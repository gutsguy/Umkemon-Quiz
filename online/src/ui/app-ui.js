import { GENERATIONS } from '../core/quiz-core.js';

export function showScreen(id) {
  document.body.classList.toggle('game-active', id === 'game-screen');
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.toggle('active', screen.id === id);
  });
}

export function initGenerationGrid(selectedGenerations) {
  const grid = document.querySelector('#generation-grid');
  grid.innerHTML = '';

  for (const generation of GENERATIONS) {
    const btn = document.createElement('button');
    btn.className = 'gen-btn selected';
    btn.type = 'button';
    btn.dataset.gen = String(generation.gen);
    btn.innerHTML = `${generation.label}<span class="gen-range">#${generation.start}-${generation.end}</span>`;
    btn.addEventListener('click', () => {
      if (selectedGenerations.has(generation.gen)) {
        selectedGenerations.delete(generation.gen);
      } else {
        selectedGenerations.add(generation.gen);
      }
      btn.classList.toggle('selected', selectedGenerations.has(generation.gen));
    });
    grid.appendChild(btn);
  }
}

export function initSegmentedControl(selector, attr, onSelect) {
  const root = document.querySelector(selector);
  root.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    root.querySelectorAll('button').forEach((item) => {
      item.classList.toggle('selected', item === button);
    });
    onSelect(button.dataset[attr]);
  });
}

export function renderPlayers(players, hostId) {
  const playerList = document.querySelector('#player-list');
  playerList.innerHTML = '';
  for (const player of players) {
    const row = document.createElement('div');
    row.className = 'player-chip';
    row.innerHTML = `<span>${escapeHtml(player.nickname)}</span><strong>${
      player.id === hostId ? '방장' : '참가자'
    }</strong>`;
    playerList.appendChild(row);
  }
}

export function renderRoomSettings(settings) {
  const summary = document.querySelector('#room-settings-summary');
  summary.innerHTML = `
    <div>세대: ${settings.generations.map((gen) => `${gen}세대`).join(', ')}</div>
    <div>모드: ${settings.quizMode === 'pixelate' ? '픽셀화' : '실루엣'}</div>
    <div>목표 점수: ${settings.targetScore}점</div>
  `;
}

export function setStatus(lines) {
  const status = document.querySelector('#connection-status');
  status.innerHTML = lines.map((line) => `<div>${escapeHtml(line)}</div>`).join('');
}

export function renderScoreboard(players, scores) {
  const scoreboard = document.querySelector('#scoreboard');
  scoreboard.innerHTML = '';
  for (const player of players) {
    const row = document.createElement('div');
    row.className = 'score-row';
    row.innerHTML = `<span>${escapeHtml(player.nickname)}</span><strong>${
      scores[player.id] || 0
    }</strong>`;
    scoreboard.appendChild(row);
  }
}

export function appendChatMessage({ nickname, text, correct = false }) {
  const log = document.querySelector('#chat-log');
  const row = document.createElement('div');
  row.className = `chat-message${correct ? ' correct' : ''}`;
  row.innerHTML = `<div class="name">${escapeHtml(nickname)}</div><div>${escapeHtml(text)}</div>`;
  log.appendChild(row);
  log.scrollTop = log.scrollHeight;
}

export function setRoundMeta(roundId, state) {
  document.querySelector('#round-label').textContent = `Round ${roundId}`;
  document.querySelector('#round-state').textContent = state;
}

export function setTimerText(progress) {
  const fill = document.querySelector('#round-timer-fill');
  if (!fill) return;
  const clamped = Math.max(0, Math.min(1, progress));
  fill.style.width = `${(1 - clamped) * 100}%`;
  fill.classList.toggle('danger', clamped > 0.75);
}

export function setAnswerBanner(html) {
  document.querySelector('#answer-banner').innerHTML = html;
}

export function setLatencyInfo({ rtt, offsetToHost }) {
  const latency = document.querySelector('#latency-panel');
  if (rtt == null) {
    latency.textContent = '';
    return;
  }
  latency.innerHTML = `RTT ${Math.round(rtt)}ms<br />시계 보정 ${Math.round(offsetToHost)}ms`;
}

export function resetGameVisuals() {
  document.querySelector('#pokemon-canvas').style.display = 'none';
  document.querySelector('#pokemon-original').style.display = 'none';
  document.querySelector('#game-loading').style.display = 'block';
  setAnswerBanner('');
}

export function showCanvas() {
  document.querySelector('#game-loading').style.display = 'none';
  document.querySelector('#pokemon-original').style.display = 'none';
  document.querySelector('#pokemon-canvas').style.display = 'block';
}

export function showOriginalImage(src) {
  const original = document.querySelector('#pokemon-original');
  original.src = src;
  original.style.display = 'block';
  document.querySelector('#pokemon-canvas').style.display = 'none';
}

export function getNickname() {
  return document.querySelector('#nickname-input').value.trim() || '익명';
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const chars = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return chars[char];
  });
}
