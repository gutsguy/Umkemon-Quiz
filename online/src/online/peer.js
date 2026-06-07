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

    this.connection.addEventListener('icecandidate', (event) => {
      if (event.candidate) {
        const localSide = this.role === 'host' ? 'host' : 'guest';
        this.signalingRoom.addCandidate(localSide, event.candidate, this.uid);
      }
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

  close() {
    if (this.channel) this.channel.close();
    this.connection.close();
  }
}
