const ROOM_CHARS = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';

export function createRoomCode(length = 6) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return [...bytes].map((byte) => ROOM_CHARS[byte % ROOM_CHARS.length]).join('');
}

export function normalizeRoomCode(value) {
  return value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
}

export function createPlayerId() {
  return crypto.randomUUID ? crypto.randomUUID() : createRoomCode(16);
}
