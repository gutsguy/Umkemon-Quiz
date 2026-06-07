export const MessageType = {
  Hello: 'hello',
  TimePing: 'timePing',
  TimePong: 'timePong',
  TimeSyncDone: 'timeSyncDone',
  StartGame: 'startGame',
  Question: 'question',
  Answer: 'answer',
  Chat: 'chat',
  RoundResult: 'roundResult',
  GameOver: 'gameOver',
};

export function encodeMessage(message) {
  return JSON.stringify(message);
}

export function decodeMessage(data) {
  if (typeof data !== 'string') return null;
  try {
    const parsed = JSON.parse(data);
    return parsed && typeof parsed.type === 'string' ? parsed : null;
  } catch {
    return null;
  }
}
