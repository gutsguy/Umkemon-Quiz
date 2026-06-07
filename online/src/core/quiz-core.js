export const ARTWORK_BASE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

export const GENERATIONS = [
  { gen: 1, label: '1세대', sub: '관동', start: 1, end: 151 },
  { gen: 2, label: '2세대', sub: '성도', start: 152, end: 251 },
  { gen: 3, label: '3세대', sub: '호연', start: 252, end: 386 },
  { gen: 4, label: '4세대', sub: '신오', start: 387, end: 493 },
  { gen: 5, label: '5세대', sub: '하나', start: 494, end: 649 },
  { gen: 6, label: '6세대', sub: '칼로스', start: 650, end: 721 },
  { gen: 7, label: '7세대', sub: '알로라', start: 722, end: 809 },
  { gen: 8, label: '8세대', sub: '가라르', start: 810, end: 905 },
  { gen: 9, label: '9세대', sub: '팔데아', start: 906, end: 1025 },
];

const REGION_LABELS = {
  alola: '알로라',
  galar: '가라르',
  hisui: '히스이',
  paldea: '팔데아',
};

export const DEFAULT_PREFIX = '엄';

export function toUmkemon(name, prefix = DEFAULT_PREFIX) {
  const first = name[0];
  let count = 1;
  while (count < name.length && name[count] === first) count++;
  return prefix.repeat(count) + name.slice(count);
}

export function computeNames(pokemon, prefix = DEFAULT_PREFIX) {
  const um = toUmkemon(pokemon.koName, prefix);
  let umName;
  let displayName;

  switch (pokemon.formType) {
    case 'mega':
      umName = `메가${um}${pokemon.formLabel}`;
      displayName = `메가${pokemon.koName}${pokemon.formLabel}`;
      break;
    case 'gmax':
      umName = `${prefix}다이맥스 ${um}`;
      displayName = `거다이맥스 ${pokemon.koName}`;
      break;
    case 'eternamax':
      umName = `${prefix}한다이맥스 ${um}`;
      displayName = `무한다이맥스 ${pokemon.koName}`;
      break;
    case 'primal':
      umName = `원시${um}`;
      displayName = `원시${pokemon.koName}`;
      break;
    case 'alola':
    case 'galar':
    case 'hisui':
    case 'paldea':
      umName = um;
      displayName = `${pokemon.koName} (${REGION_LABELS[pokemon.formType]})`;
      break;
    case 'form':
      umName = um;
      displayName = `${pokemon.koName} (${pokemon.formLabel})`;
      break;
    default:
      umName = um;
      displayName = pokemon.koName;
  }

  const genObj = GENERATIONS.find((generation) => generation.gen === pokemon.gen);
  return {
    umName,
    displayName,
    genLabel: genObj ? genObj.label : '',
  };
}

export function decoratePokemon(pokemon, prefix = DEFAULT_PREFIX, shiny = false) {
  return {
    ...pokemon,
    ...computeNames(pokemon, prefix),
    isShiny: shiny,
  };
}

export function getAllowedPool(pokemonDb, selectedGenerations) {
  const selected = new Set(selectedGenerations.map(Number));
  return pokemonDb.filter((pokemon) => selected.has(pokemon.gen));
}

export function pickQuestion(pool, previousIds = new Set()) {
  const candidates =
    previousIds.size < pool.length
      ? pool.filter((pokemon) => !previousIds.has(pokemon.id))
      : pool;
  const pokemon = candidates[Math.floor(Math.random() * candidates.length)];
  return {
    pokemonId: pokemon.id,
    shiny: Math.random() < 1 / 128,
  };
}

export function findPokemonById(pokemonDb, pokemonId) {
  return pokemonDb.find((pokemon) => pokemon.id === pokemonId);
}

export function artworkUrl(id, shiny) {
  return shiny ? `${ARTWORK_BASE}/shiny/${id}.png` : `${ARTWORK_BASE}/${id}.png`;
}
