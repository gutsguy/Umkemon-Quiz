import { MessageType } from './protocol.js';

const SAMPLE_COUNT = 10;

export class HostTimeSync {
  constructor(send) {
    this.send = send;
    this.peerOffsetToHost = 0;
    this.peerRtt = null;
  }

  handle(message) {
    if (message.type === MessageType.TimePing) {
      this.send({
        type: MessageType.TimePong,
        id: message.id,
        clientSentAt: message.sentAt,
        hostReceivedAt: Date.now(),
        hostSentAt: Date.now(),
      });
      return true;
    }

    if (message.type === MessageType.TimeSyncDone) {
      this.peerOffsetToHost = message.offsetToHost;
      this.peerRtt = message.rtt;
      return true;
    }

    return false;
  }

  correctPeerTime(peerLocalTime) {
    return peerLocalTime + this.peerOffsetToHost;
  }
}

export class ClientTimeSync extends EventTarget {
  constructor(send) {
    super();
    this.send = send;
    this.samples = [];
    this.pending = new Map();
  }

  start() {
    this.samples = [];
    this.pending.clear();
    this.sendNext();
  }

  handle(message) {
    if (message.type !== MessageType.TimePong) return false;

    const clientReceivedAt = Date.now();
    const pending = this.pending.get(message.id);
    if (!pending) return true;

    this.pending.delete(message.id);
    const rtt =
      clientReceivedAt -
      pending.clientSentAt -
      (message.hostSentAt - message.hostReceivedAt);
    const offsetToHost =
      (message.hostReceivedAt - pending.clientSentAt + message.hostSentAt - clientReceivedAt) /
      2;

    this.samples.push({ rtt, offsetToHost });

    if (this.samples.length >= SAMPLE_COUNT) {
      const result = summarizeSamples(this.samples);
      this.send({
        type: MessageType.TimeSyncDone,
        offsetToHost: result.offsetToHost,
        rtt: result.rtt,
      });
      this.dispatchEvent(new CustomEvent('done', { detail: result }));
    } else {
      window.setTimeout(() => this.sendNext(), 120);
    }
    return true;
  }

  sendNext() {
    const id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
    const clientSentAt = Date.now();
    this.pending.set(id, { clientSentAt });
    this.send({
      type: MessageType.TimePing,
      id,
      sentAt: clientSentAt,
    });
  }
}

function summarizeSamples(samples) {
  const stable = [...samples].sort((a, b) => a.rtt - b.rtt).slice(0, 5);
  return {
    rtt: median(stable.map((sample) => sample.rtt)),
    offsetToHost: median(stable.map((sample) => sample.offsetToHost)),
  };
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}
