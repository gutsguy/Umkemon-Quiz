import {
  child,
  get,
  off,
  onDisconnect,
  onChildAdded,
  onValue,
  push,
  ref,
  remove,
  serverTimestamp,
  set,
  update,
} from 'firebase/database';
import { database } from '../config/firebase.js';

export class SignalingRoom {
  constructor(roomCode) {
    this.roomCode = roomCode;
    this.roomRef = ref(database, `onlineRooms/${roomCode}`);
    this.unsubscribers = [];
  }

  async create(metadata) {
    const snapshot = await get(this.roomRef);
    if (snapshot.exists()) {
      throw new Error('이미 존재하는 방 코드입니다. 다시 시도하세요.');
    }

    await set(this.roomRef, {
      ...metadata,
      status: 'waiting',
      createdAt: serverTimestamp(),
    });
  }

  async read() {
    const snapshot = await get(this.roomRef);
    return snapshot.exists() ? snapshot.val() : null;
  }

  async setOffer(offer, uid) {
    await set(child(this.roomRef, 'offer'), {
      type: offer.type,
      sdp: offer.sdp,
      uid,
    });
  }

  async setAnswer(answer, uid) {
    await update(this.roomRef, {
      status: 'connected',
      answer: {
        type: answer.type,
        sdp: answer.sdp,
        uid,
      },
    });
  }

  onAnswer(callback) {
    const answerRef = child(this.roomRef, 'answer');
    onValue(answerRef, (snapshot) => {
      if (snapshot.exists()) callback(snapshot.val());
    });
    this.unsubscribers.push(() => off(answerRef));
  }

  onOffer(callback) {
    const offerRef = child(this.roomRef, 'offer');
    onValue(offerRef, (snapshot) => {
      if (snapshot.exists()) callback(snapshot.val());
    });
    this.unsubscribers.push(() => off(offerRef));
  }

  async addCandidate(side, candidate, uid) {
    await push(child(this.roomRef, `${side}Candidates`), {
      ...candidate.toJSON(),
      uid,
    });
  }

  async sendRelayMessage(targetPlayerId, message) {
    await push(child(this.roomRef, `relay/${targetPlayerId}`), {
      message,
      createdAt: serverTimestamp(),
    });
  }

  onRelayMessages(playerId, callback) {
    const relayRef = child(this.roomRef, `relay/${playerId}`);
    onChildAdded(relayRef, async (snapshot) => {
      const value = snapshot.val();
      if (value?.message) callback(value.message);
      await remove(snapshot.ref);
    });
    this.unsubscribers.push(() => off(relayRef));
  }

  onRemoteCandidates(side, callback) {
    const candidatesRef = child(this.roomRef, `${side}Candidates`);
    onChildAdded(candidatesRef, (snapshot) => callback(snapshot.val()));
    this.unsubscribers.push(() => off(candidatesRef));
  }

  async addPlayer(player) {
    await set(child(this.roomRef, `players/${player.id}`), {
      id: player.id,
      uid: player.uid,
      nickname: player.nickname,
      role: player.role,
      joinedAt: serverTimestamp(),
    });
  }

  async removePlayer(playerId) {
    await remove(child(this.roomRef, `players/${playerId}`));
  }

  async registerDisconnectCleanup(playerId, removeRoom = false) {
    if (removeRoom) {
      await onDisconnect(this.roomRef).remove();
      return;
    }
    await onDisconnect(child(this.roomRef, `players/${playerId}`)).remove();
  }

  onRoom(callback) {
    onValue(this.roomRef, (snapshot) => {
      callback(snapshot.exists() ? snapshot.val() : null);
    });
    this.unsubscribers.push(() => off(this.roomRef));
  }

  onPlayers(callback) {
    const playersRef = child(this.roomRef, 'players');
    onValue(playersRef, (snapshot) => {
      const players = snapshot.exists() ? Object.values(snapshot.val()) : [];
      callback(players);
    });
    this.unsubscribers.push(() => off(playersRef));
  }

  async remove() {
    this.close();
    await remove(this.roomRef);
  }

  close() {
    while (this.unsubscribers.length) {
      this.unsubscribers.pop()();
    }
  }
}
