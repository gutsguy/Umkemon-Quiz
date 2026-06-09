const GENERATIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const TOP_N = 30;
const textDecoder = new TextDecoder('utf-8');
const shouldWrite = process.argv.includes('--write');

async function fetchUtf8(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return textDecoder.decode(await response.arrayBuffer());
}

const speciesResponse = await fetch('https://pokeapi.co/api/v2/pokemon-species?limit=1025');
if (!speciesResponse.ok) {
  throw new Error(`Failed to fetch PokeAPI species list: ${speciesResponse.status}`);
}

const speciesData = await speciesResponse.json();
const speciesByName = new Map(
  speciesData.results.map((species) => {
    const match = species.url.match(/\/pokemon-species\/(\d+)\//);
    return [species.name, Number(match?.[1])];
  }),
);

const normalizeName = (name) =>
  name
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.'’]/g, '')
    .replace(/♀/g, '-f')
    .replace(/♂/g, '-m')
    .replace(/:/g, '')
    .replace(/\s+/g, '-');

const repairMojibake = (value) => {
  if (!/[Ãâ]/.test(value)) return value;
  return Buffer.from(value, 'latin1').toString('utf8');
};

const fixPokemonName = (value) => {
  if (/^Sirfetch/i.test(value)) return "Sirfetch'd";
  if (/^Farfetch/i.test(value)) return "Farfetch'd";
  return value;
};

function getRankClass(rank) {
  if (rank === 1) return 'gold';
  if (rank === 2) return 'silver';
  if (rank === 3) return 'bronze';
  return '';
}

function parsePokemonCards(html) {
  const starts = [...html.matchAll(/<[^>]+class="rank-card[^"]*"[^>]*>/g)].map((match) => match.index);
  const cards = starts.map((start, index) => {
    const nextStart = starts[index + 1] ?? html.indexOf('footer-cta', start);
    return html.slice(start, nextStart);
  });

  return cards.slice(0, TOP_N).map((card) => {
    const rank = Number(card.match(/<span class="rank-num">#?(\d+)<\/span>/)?.[1]);
    const rawName = card.match(/<span class="rank-name">([^<]+)<\/span>/)?.[1]?.trim();
    const name = rawName ? fixPokemonName(repairMojibake(rawName)) : undefined;
    const score = Number(card.match(/<span class="rank-score">([\d.]+)<\/span>/)?.[1]);
    const normalized = normalizeName(name ?? '');
    const id = speciesByName.get(normalized);

    if (!rank || !name || Number.isNaN(score) || !id) {
      throw new Error(`Failed to parse card: ${JSON.stringify({ rank, name, score, normalized, id })}`);
    }

    return { rank, id, name, score };
  });
}

const data = {};

for (const generation of GENERATIONS) {
  const url = `https://poke-trends.com/most-popular-gen-${generation}-pokemon/`;
  const html = await fetchUtf8(url);
  const pokemon = parsePokemonCards(html).slice(0, TOP_N);
  if (pokemon.length !== TOP_N) {
    throw new Error(`Expected ${TOP_N} Pokemon for generation ${generation}, got ${pokemon.length}`);
  }

  data[generation] = pokemon;
}

const lines = [
  '// Generated from PokéTrends generation ranking pages.',
  '// https://poke-trends.com/most-popular-pokemon/',
  '// Run: node online/scripts/scrape-poketrends-background-pool.mjs',
  'export const POPULAR_BACKGROUND_POKEMON_BY_GENERATION = {',
];

for (const generation of GENERATIONS) {
  lines.push(`  ${generation}: [`);
  for (const pokemon of data[generation]) {
    lines.push(
      `    { rank: ${pokemon.rank}, id: ${pokemon.id}, name: '${pokemon.name.replace(/'/g, "\\'")}', score: ${pokemon.score} },`,
    );
  }
  lines.push('  ],');
}

lines.push('};');
lines.push('');
lines.push('export const POPULAR_BACKGROUND_POKEMON_IDS = Object.values(POPULAR_BACKGROUND_POKEMON_BY_GENERATION)');
lines.push('  .flat()');
lines.push('  .map((pokemon) => pokemon.id);');

const output = `${lines.join('\n')}\n`;

if (shouldWrite) {
  const { writeFile } = await import('node:fs/promises');
  await writeFile(new URL('../src/data/popular-background-pokemon.js', import.meta.url), output, 'utf8');
} else {
  console.log(output);
}
