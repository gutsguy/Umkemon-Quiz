export function getPokemonDb() {
  if (!Array.isArray(window.POKEMON_DB_RAW)) {
    throw new Error('pokemon_data.js was not loaded.');
  }
  return window.POKEMON_DB_RAW;
}

export function buildKoreanNameSet(pokemonDb) {
  return new Set(pokemonDb.map((pokemon) => pokemon.koName).filter(Boolean));
}
