function stripSpecialShinyChars(value) {
  return value.replace(/[✨⭐]/g, '');
}

function normalize(value) {
  return value.replace(/\s/g, '').toLowerCase();
}

export function isCorrectAnswer(input, pokemon) {
  const answer = input.trim();
  if (!answer || !pokemon?.umName) return false;

  const expected = normalize(pokemon.umName);
  const expectedWithoutSpecials = normalize(stripSpecialShinyChars(pokemon.umName));
  const normalizedAnswer = normalize(answer);

  return normalizedAnswer === expected || normalizedAnswer === expectedWithoutSpecials;
}
