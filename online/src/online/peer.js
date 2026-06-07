import { decodeMessage, encodeMessage } from './protocol.js';

const rtcConfiguration = {
  iceServers: [
    { urls: ['stun:stun1.l.google.com:19302'] },
    { urls: ['stun:stun2.l.google.com:19302'] },
  ],
};

export class PeerSession extends EventTarget {
  constructor({ role, signalingRoom, uid }) {
    super();
    this.role = role;
    this.uid = uid;
    this.signalingRoom = signalingRoom;
    this.connection = new RTCPeerConnection(rtcConfiguration);
    this.channel = null;
    this.isOpen = false;
    this.pendingRemoteCandidates = [];
    this.localCandidateKeys = new Set();

    this.connection.addEventListener('icecandidate', (event) => {
      if (event.candidate) {
        this.publishLocalCandidate(event.candidate);
      }
    });

    this.connection.addEventListener('icegatheringstatechange', () => {
      if (this.connection.iceGatheringState === 'complete') {
        this.publishLocalCandidatesFromSdp();
      }
    });

    this.connection.addEventListener('icecandidateerror', (event) => {
      this.dispatchEvent(
        new CustomEvent('candidateerror', {
          detail: event,
        })
      );
    });

    this.connection.addEventListener('connectionstatechange', () => {
      this.dispatchEvent(
        new CustomEvent('statechange', {
          detail: this.connection.connectionState,
        })
      );
    });

    this.connection.addEventListener('datachannel', (event) => {
      this.setChannel(event.channel);
    });
  }

  async startAsHost() {
    this.setChannel(
      this.connection.createDataChannel('umkemon_online', {
        ordered: true,
      })
    );

    this.signalingRoom.onAnswer(async (answer) => {
      if (!this.connection.currentRemoteDescription) {
        await this.connection.setRemoteDescription(answer);
        await this.flushRemoteCandidates();
      }
    });

    this.signalingRoom.onRemoteCandidates('guest', async (candidate) => {
      await this.addRemoteCandidate(candidate);
    });

    const offer = await this.connection.createOffer();
    await this.connection.setLocalDescription(offer);
    await this.signalingRoom.setOffer(offer, this.uid);
    window.setTimeout(() => this.publishLocalCandidatesFromSdp(), 1500);
  }

  async startAsGuest(offer) {
    this.signalingRoom.onRemoteCandidates('host', async (candidate) => {
      await this.addRemoteCandidate(candidate);
    });

    await this.connection.setRemoteDescription(offer);
    await this.flushRemoteCandidates();
    const answer = await this.connection.createAnswer();
    await this.connection.setLocalDescription(answer);
    await this.signalingRoom.setAnswer(answer, this.uid);
    window.setTimeout(() => this.publishLocalCandidatesFromSdp(), 1500);
  }

  setChannel(channel) {
    this.channel = channel;
    this.channel.addEventListener('open', () => {
      this.isOpen = true;
      this.dispatchEvent(new Event('open'));
    });
    this.channel.addEventListener('close', () => {
      this.isOpen = false;
      this.dispatchEvent(new Event('close'));
    });
    this.channel.addEventListener('message', (event) => {
      const message = decodeMessage(event.data);
      if (message) {
        this.dispatchEvent(new CustomEvent('message', { detail: message }));
      }
    });
  }

  send(message) {
    if (!this.channel || this.channel.readyState !== 'open') return false;
    this.channel.send(encodeMessage(message));
    return true;
  }

  async addRemoteCandidate(candidate) {
    if (!this.connection.currentRemoteDescription) {
      this.pendingRemoteCandidates.push(candidate);
      return;
    }
    await this.connection.addIceCandidate(candidate);
  }

  async flushRemoteCandidates() {
    while (this.pendingRemoteCandidates.length > 0) {
      await this.connection.addIceCandidate(this.pendingRemoteCandidates.shift());
    }
  }

  publishLocalCandidate(candidate) {
    const json = candidate.toJSON ? candidate.toJSON() : candidate;
    const key = candidateKey(json);
    if (this.localCandidateKeys.has(key)) return;
    this.localCandidateKeys.add(key);

    const localSide = this.role === 'host' ? 'host' : 'guest';
    this.signalingRoom.addCandidate(localSide, { toJSON: () => json }, this.uid).catch((error) => {
      this.dispatchEvent(
        new CustomEvent('candidatepublisherror', {
          detail: error,
        })
      );
    });
  }

  publishLocalCandidatesFromSdp() {
    const sdp = this.connection.localDescription?.sdp;
    if (!sdp) return;

    let currentMid = '0';
    let currentMLineIndex = -1;
    for (const line of sdp.split(/\r?\n/)) {
      if (line.startsWith('m=')) {
        currentMLineIndex++;
      } else if (line.startsWith('a=mid:')) {
        currentMid = line.slice('a=mid:'.length);
      } else if (line.startsWith('a=candidate:')) {
        this.publishLocalCandidate({
          candidate: line.slice(2),
          sdpMid: currentMid,
          sdpMLineIndex: Math.max(currentMLineIndex, 0),
        });
      }
    }
  }

  close() {
    if (this.channel) this.channel.close();
    this.connection.close();
  }
}

function candidateKey(candidate) {
  return `${candidate.candidate}|${candidate.sdpMid ?? ''}|${candidate.sdpMLineIndex ?? ''}`;
}
