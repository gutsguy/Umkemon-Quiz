import '../styles/base.css';
import '../styles/lobby.css';
import '../styles/game.css';

import { getPokemonDb } from './data/pokemon-adapter.js';
import { signInAnonymousUser } from './config/firebase.js';
import {
  artworkUrl,
  decoratePokemon,
  findPokemonById,
  getAllowedPool,
  pickQuestion,
} from './core/quiz-core.js';
import { isCorrectAnswer } from './core/answer-checker.js';
import {
  createRevealRenderer,
  loadArtwork,
  REVEAL_INTERVAL,
  REVEAL_STEPS,
} from './core/image-renderer.js';
import { createPlayerId, createRoomCode, normalizeRoomCode } from './online/room-code.js';
import { MessageType } from './online/protocol.js';
import { PeerSession } from './online/peer.js';
import { SignalingRoom } from './online/signaling.js';
import { ClientTimeSync, HostTimeSync } from './online/time-sync.js';
import {
  appendChatMessage,
  getNickname,
  initGenerationGrid,
  initSegmentedControl,
  renderPlayers,
  renderRoomSettings,
  renderScoreboard,
  resetGameVisuals,
  setAnswerBanner,
  setLatencyInfo,
  setRoundMeta,
  setStatus,
  setTimerText,
  showCanvas,
  showOriginalImage,
  showScreen,
} from './ui/app-ui.js';

const ROUND_SECONDS = 20;
const QUESTION_DELAY_MS = 3000;
const MIN_REACTION_MS = 100;
const ADJUDICATION_WAIT_MS = 650;

const pokemonDb = getPokemonDb();
const selectedGenerations = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

let quizMode = 'pixelate';
let targetScore = 10;
let signalingRoom = null;
let peerSession = null;
let role = null;
let localPlayer = null;
let remotePlayer = null;
let players = [];
let settings = null;
let hostTimeSync = null;
let clientTimeSync = null;
let clientOffsetToHost = 0;
let scores = {};
let roundId = 0;
let currentPokemon = null;
let currentQuestion = null;
let roundResolved = false;
let correctCandidates = [];
let finalizeTimer = null;
let timerInterval = null;
let usedQuestionIds = new Set();
let timeSyncReady = false;
let authUser = null;
let revealRenderer = null;
let relayReady = false;
let timeSyncStarted = false;
let revealTimer = null;
let revealStep = 0;

initGenerationGrid(selectedGenerations);
initSegmentedControl('#mode-select', 'mode', (mode) => {
  quizMode = mode;
});
initSegmentedControl('#target-score-select', 'score', (score) => {
  targetScore = Number(score);
});

document.querySelector('#create-room-btn').addEventListener('click', createRoom);
document.querySelector('#join-room-btn').addEventListener('click', joinRoom);
document.querySelector('#leave-room-btn').addEventListener('click', leaveRoom);
document.querySelector('#start-game-btn').addEventListener('click', startGameAsHost);
document.querySelector('#room-code-btn').addEventListener('click', copyRoomCode);
document.querySelector('#chat-form').addEventListener('submit', submitAnswer);

bootstrapAuth();

async function bootstrapAuth() {
  setLobbyEnabled(false);
  try {
    authUser = await signInAnonymousUser();
    setLobbyEnabled(true);
  } catch (error) {
    alert(`Firebase 익명 인증에 실패했습니다: ${error.message}`);
  }
}

async function createRoom() {
  if (!authUser) return;
  if (selectedGenerations.size === 0) {
    alert('최소 1개 세대를 선택하세요.');
    return;
  }

  role = 'host';
  localPlayer = {
    id: createPlayerId(),
    uid: authUser.uid,
    nickname: getNickname(),
    role,
  };
  settings = {
    generations: [...selectedGenerations].sort((a, b) => a - b),
    quizMode,
    targetScore,
  };

  const roomCode = createRoomCode();
  signalingRoom = new SignalingRoom(roomCode);
  try {
    await signalingRoom.create({
      hostId: localPlayer.id,
      hostUid: authUser.uid,
      settings,
    });
    await signalingRoom.addPlayer(localPlayer);
    await signalingRoom.registerDisconnectCleanup(localPlayer.id, true);
  } catch (error) {
    alert(error.message);
    return;
  }

  enterRoomScreen(roomCode);
  renderRoomSettings(settings);
  bindPlayers(localPlayer.id);
  bindRoomLifecycle();

  peerSession = new PeerSession({ role, signalingRoom, uid: authUser.uid });
  bindPeerEvents();
  await peerSession.startAsHost();
  setStatus(['방을 만들었습니다.', '친구에게 방 코드를 공유하세요.']);
}

async function joinRoom() {
  if (!authUser) return;
  const roomCode = normalizeRoomCode(document.querySelector('#join-code-input').value);
  if (!roomCode) return;

  role = 'guest';
  localPlayer = {
    id: createPlayerId(),
    uid: authUser.uid,
    nickname: getNickname(),
    role,
  };

  signalingRoom = new SignalingRoom(roomCode);
  const room = await signalingRoom.read();
  if (!room?.offer) {
    alert('방을 찾을 수 없거나 아직 준비되지 않았습니다.');
    return;
  }

  settings = room.settings;
  remotePlayer = {
    id: room.hostId,
    nickname: '방장',
    role: 'host',
  };

  await signalingRoom.addPlayer(localPlayer);
  await signalingRoom.registerDisconnectCleanup(localPlayer.id, false);
  enterRoomScreen(roomCode);
  renderRoomSettings(settings);
  bindPlayers(room.hostId);
  bindRoomLifecycle();

  peerSession = new PeerSession({ role, signalingRoom, uid: authUser.uid });
  bindPeerEvents();
  await peerSession.startAsGuest(room.offer);
  setStatus(['방에 참가했습니다.', 'P2P 연결을 기다리는 중입니다.']);
}

function enterRoomScreen(roomCode) {
  document.querySelector('#room-code-btn').textContent = roomCode;
  document.querySelector('#start-game-btn').style.display = role === 'host' ? '' : 'none';
  showScreen('room-screen');
}

function setLobbyEnabled(enabled) {
  document.querySelector('#create-room-btn').disabled = !enabled;
  document.querySelector('#join-room-btn').disabled = !enabled;
}

function bindPlayers(hostId) {
  signalingRoom.onPlayers((nextPlayers) => {
    players = nextPlayers.sort((a, b) => (a.role === 'host' ? -1 : 1) - (b.role === 'host' ? -1 : 1));
    remotePlayer = players.find((player) => player.id !== localPlayer.id) || remotePlayer;
    renderPlayers(players, hostId);
    renderScoreboard(players, scores);
    setupRelayTransportIfReady();
    updateStartButton();
  });
}

function bindRoomLifecycle() {
  signalingRoom.onRoom((roomData) => {
    if (roomData === null && role === 'guest') {
      peerSession?.close();
      setStatus(['방장이 방을 닫았습니다.']);
      document.querySelector('#start-game-btn').disabled = true;
    }
  });
}

function bindPeerEvents() {
  peerSession.addEventListener('open', () => {
    setStatus(['DataChannel 연결 완료.', '시간 보정을 준비 중입니다.']);
    sendToPeer({
      type: MessageType.Hello,
      player: localPlayer,
    });
    startTimeSyncIfReady();
  });

  peerSession.addEventListener('statechange', (event) => {
    setStatus([`연결 상태: ${event.detail}`]);
    if (event.detail === 'failed' || event.detail === 'disconnected') {
      setupRelayTransportIfReady();
      if (relayReady) {
        setStatus(['P2P 직접 연결 실패. Firebase relay로 전환합니다.']);
        startTimeSyncIfReady();
      }
    }
  });

  peerSession.addEventListener('candidatepublisherror', (event) => {
    setStatus(['ICE 후보를 Firebase에 쓰지 못했습니다.', event.detail.message]);
  });

  peerSession.addEventListener('candidateerror', () => {
    setStatus(['STUN 후보 수집 중 오류가 발생했습니다.', '다른 네트워크에서 다시 시도하거나 TURN/relay가 필요할 수 있습니다.']);
  });

  peerSession.addEventListener('close', () => {
    setStatus(['연결이 종료되었습니다.']);
  });

  peerSession.addEventListener('message', (event) => handlePeerMessage(event.detail));
}

function handlePeerMessage(message) {
  if (role === 'host' && hostTimeSync?.handle(message)) {
    if (message.type === MessageType.TimeSyncDone) {
      setLatencyInfo({
        rtt: hostTimeSync.peerRtt,
        offsetToHost: hostTimeSync.peerOffsetToHost,
      });
      setStatus(['시간 보정 완료.', '게임을 시작할 수 있습니다.']);
      timeSyncReady = true;
      updateStartButton();
    }
    return;
  }

  if (role === 'guest' && clientTimeSync?.handle(message)) return;

  switch (message.type) {
    case MessageType.Hello:
      remotePlayer = message.player;
      break;
    case MessageType.StartGame:
      scores = message.scores;
      showScreen('game-screen');
      renderScoreboard(players, scores);
      break;
    case MessageType.Question:
      receiveQuestion(message.question);
      break;
    case MessageType.Answer:
      if (role === 'host') handleAnswerAsHost(message);
      break;
    case MessageType.Chat:
      appendChatMessage(message);
      break;
    case MessageType.RoundResult:
      applyRoundResult(message);
      break;
    case MessageType.GameOver:
      applyGameOver(message);
      break;
  }
}

function startGameAsHost() {
  if (role !== 'host' || !canSendToPeer() || !timeSyncReady || players.length < 2) return;
  scores = Object.fromEntries(players.map((player) => [player.id, 0]));
  usedQuestionIds = new Set();
  showScreen('game-screen');
  renderScoreboard(players, scores);
  sendToPeer({
    type: MessageType.StartGame,
    settings,
    scores,
  });
  nextQuestionAsHost();
}

function nextQuestionAsHost() {
  roundId++;
  roundResolved = false;
  correctCandidates = [];
  clearTimeout(finalizeTimer);

  const pool = getAllowedPool(pokemonDb, settings.generations);
  currentQuestion = pickQuestion(pool, usedQuestionIds);
  usedQuestionIds.add(currentQuestion.pokemonId);
  const question = {
    roundId,
    ...currentQuestion,
    quizMode: settings.quizMode,
    startAt: Date.now() + QUESTION_DELAY_MS,
    timeoutAt: Date.now() + QUESTION_DELAY_MS + ROUND_SECONDS * 1000,
  };

  sendToPeer({ type: MessageType.Question, question });
  receiveQuestion(question);
}

async function receiveQuestion(question) {
  currentQuestion = question;
  roundResolved = false;
  correctCandidates = [];
  stopRevealTimer();
  resetGameVisuals();
  setRoundMeta(question.roundId, '곧 시작');

  const hostNow = role === 'host' ? Date.now() : Date.now() + clientOffsetToHost;
  const delay = Math.max(0, question.startAt - hostNow);
  window.setTimeout(() => showQuestion(question), delay);
}

async function showQuestion(question) {
  const basePokemon = findPokemonById(pokemonDb, question.pokemonId);
  currentPokemon = decoratePokemon(basePokemon, '엄', question.shiny);
  setRoundMeta(question.roundId, '정답 입력 가능');
  setAnswerBanner('');

  const url = artworkUrl(currentPokemon.id, currentPokemon.isShiny);
  const fallbackUrl = currentPokemon.isShiny ? artworkUrl(currentPokemon.id, false) : null;
  const img = await loadArtwork(url, fallbackUrl);
  revealRenderer = createRevealRenderer(document.querySelector('#pokemon-canvas'), img, question.quizMode);
  revealRenderer.drawInitial();
  showCanvas();
  startTimer(question.timeoutAt);
  startRevealTimer();

  if (role === 'host') {
    window.setTimeout(() => {
      if (!roundResolved && question.roundId === roundId) {
        finalizeRound(null);
      }
    }, Math.max(0, question.timeoutAt - Date.now()));
  }
}

function submitAnswer(event) {
  event.preventDefault();
  if (!currentQuestion || roundResolved) return;

  const input = document.querySelector('#chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  const message = {
    type: MessageType.Answer,
    roundId: currentQuestion.roundId,
    playerId: localPlayer.id,
    nickname: localPlayer.nickname,
    text,
    answeredAt: Date.now(),
  };

  if (role === 'host') {
    handleAnswerAsHost(message);
  } else {
    sendToPeer(message);
  }
}

function handleAnswerAsHost(message) {
  if (!currentQuestion || message.roundId !== currentQuestion.roundId || roundResolved) return;

  const player = players.find((item) => item.id === message.playerId) || {
    id: message.playerId,
    nickname: message.nickname,
  };
  const correctedAnsweredAt =
    message.playerId === localPlayer.id
      ? message.answeredAt
      : hostTimeSync.correctPeerTime(message.answeredAt);
  const reactionTime = correctedAnsweredAt - currentQuestion.startAt;
  const correct =
    reactionTime >= MIN_REACTION_MS &&
    correctedAnsweredAt <= currentQuestion.timeoutAt &&
    isCorrectAnswer(message.text, currentPokemon);

  const chat = {
    type: MessageType.Chat,
    playerId: player.id,
    nickname: player.nickname,
    text: message.text,
    correct,
  };
  appendChatMessage(chat);
  sendToPeer(chat);

  if (!correct) return;

  correctCandidates.push({
    playerId: player.id,
    nickname: player.nickname,
    reactionTime,
  });

  if (!finalizeTimer) {
    finalizeTimer = window.setTimeout(() => {
      const winner = [...correctCandidates].sort((a, b) => a.reactionTime - b.reactionTime)[0];
      finalizeRound(winner);
    }, ADJUDICATION_WAIT_MS);
  }
}

function finalizeRound(winner) {
  if (roundResolved) return;
  roundResolved = true;
  clearInterval(timerInterval);
  stopRevealTimer();
  clearTimeout(finalizeTimer);
  finalizeTimer = null;

  if (winner) {
    scores[winner.playerId] = (scores[winner.playerId] || 0) + 1;
  }

  const result = {
    type: MessageType.RoundResult,
    roundId,
    winner,
    correctAnswer: currentPokemon.umName,
    displayName: currentPokemon.displayName,
    genLabel: currentPokemon.genLabel,
    artwork: artworkUrl(currentPokemon.id, currentPokemon.isShiny),
    scores,
  };

  applyRoundResult(result);
  sendToPeer(result);

  if (winner && scores[winner.playerId] >= settings.targetScore) {
    const gameOver = {
      type: MessageType.GameOver,
      scores,
      winnerId: winner.playerId,
    };
    window.setTimeout(() => {
      applyGameOver(gameOver);
      sendToPeer(gameOver);
    }, 2500);
  } else {
    window.setTimeout(nextQuestionAsHost, 3200);
  }
}

function applyRoundResult(result) {
  roundResolved = true;
  clearInterval(timerInterval);
  stopRevealTimer();
  renderScoreboard(players, result.scores);
  showOriginalImage(result.artwork);

  const winnerText = result.winner
    ? `${result.winner.nickname} 정답 (${(result.winner.reactionTime / 1000).toFixed(3)}초)`
    : '시간 초과';
  setRoundMeta(result.roundId, '라운드 종료');
  setAnswerBanner(`
    <div>${winnerText}</div>
    <div>${result.correctAnswer} · ${result.displayName} · ${result.genLabel}</div>
  `);
}

function applyGameOver(message) {
  clearInterval(timerInterval);
  stopRevealTimer();
  const winner = players.find((player) => player.id === message.winnerId);
  setRoundMeta(roundId, '게임 종료');
  setAnswerBanner(`<div>게임 종료</div><div>승자: ${winner ? winner.nickname : '-'}</div>`);
}

function updateStartButton() {
  const startBtn = document.querySelector('#start-game-btn');
  if (role !== 'host') return;
  const canStart = Boolean(canSendToPeer() && timeSyncReady && players.length >= 2);
  startBtn.disabled = !canStart;
  if (!canSendToPeer()) {
    setStatus(['친구의 접속을 기다리는 중입니다.']);
  } else if (!timeSyncReady) {
    setStatus(['연결 완료. 시간 보정을 기다리는 중입니다.']);
  } else if (players.length < 2) {
    setStatus(['참가자 정보를 기다리는 중입니다.']);
  } else {
    setStatus(['준비 완료. 게임을 시작할 수 있습니다.']);
  }
}

function setupRelayTransportIfReady() {
  if (relayReady || !signalingRoom || !localPlayer || !remotePlayer) return;
  relayReady = true;
  signalingRoom.onRelayMessages(localPlayer.id, handlePeerMessage);
  if (!peerSession?.isOpen) {
    setStatus(['Firebase relay 준비 완료.', 'P2P 연결이 실패하면 relay로 진행합니다.']);
    sendToPeer({
      type: MessageType.Hello,
      player: localPlayer,
    });
    startTimeSyncIfReady();
  }
}

function startTimeSyncIfReady() {
  if (timeSyncStarted || !canSendToPeer()) return;
  timeSyncStarted = true;

  if (role === 'host') {
    hostTimeSync = new HostTimeSync(sendToPeer);
  } else {
    clientTimeSync = new ClientTimeSync(sendToPeer);
    clientTimeSync.addEventListener('done', (event) => {
      clientOffsetToHost = event.detail.offsetToHost;
      setLatencyInfo(event.detail);
      setStatus(['시간 보정 완료.', '방장이 게임을 시작할 때까지 기다리세요.']);
    });
    clientTimeSync.start();
  }
}

function canSendToPeer() {
  return Boolean(peerSession?.isOpen || (relayReady && remotePlayer));
}

function sendToPeer(message) {
  if (peerSession?.isOpen) return peerSession.send(message);
  if (relayReady && remotePlayer) {
    signalingRoom.sendRelayMessage(remotePlayer.id, message);
    return true;
  }
  return false;
}

function startTimer(timeoutAt) {
  clearInterval(timerInterval);
  const duration = timeoutAt - currentQuestion.startAt;
  const tick = () => {
    const hostNow = role === 'host' ? Date.now() : Date.now() + clientOffsetToHost;
    const left = Math.max(0, timeoutAt - hostNow);
    const elapsed = Math.max(0, Math.min(duration, duration - left));
    const progress = duration > 0 ? elapsed / duration : 1;
    setTimerText(progress);
  };
  tick();
  timerInterval = window.setInterval(tick, 60);
}

function startRevealTimer() {
  stopRevealTimer();
  revealStep = 0;
  revealTimer = window.setInterval(() => {
    revealStep++;
    if (revealStep >= REVEAL_STEPS) {
      stopRevealTimer();
    }
    revealRenderer?.revealStep(revealStep);
  }, REVEAL_INTERVAL);
}

function stopRevealTimer() {
  if (revealTimer) {
    clearInterval(revealTimer);
    revealTimer = null;
  }
}

async function copyRoomCode() {
  const code = document.querySelector('#room-code-btn').textContent;
  await navigator.clipboard.writeText(code);
  document.querySelector('#room-code-btn').textContent = '복사됨';
  window.setTimeout(() => {
    document.querySelector('#room-code-btn').textContent = code;
  }, 650);
}

async function leaveRoom() {
  try {
    peerSession?.close();
    if (signalingRoom && localPlayer) {
      if (role === 'host') {
        await signalingRoom.remove();
      } else {
        await signalingRoom.removePlayer(localPlayer.id);
        signalingRoom.close();
      }
    }
  } finally {
    location.reload();
  }
}

window.addEventListener('beforeunload', () => {
  peerSession?.close();
  signalingRoom?.close();
});
