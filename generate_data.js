// pokemon_data.json 생성 스크립트
// 사용법: node generate_data.js

const API_BASE = "https://pokeapi.co/api/v2";
const BATCH = 15;

const GENERATIONS = [
  { gen: 1, start: 1, end: 151 },
  { gen: 2, start: 152, end: 251 },
  { gen: 3, start: 252, end: 386 },
  { gen: 4, start: 387, end: 493 },
  { gen: 5, start: 494, end: 649 },
  { gen: 6, start: 650, end: 721 },
  { gen: 7, start: 722, end: 809 },
  { gen: 8, start: 810, end: 905 },
  { gen: 9, start: 906, end: 1025 },
];

const TYPE_MAP = {
  normal:"노말", fire:"불꽃", water:"물", electric:"전기",
  grass:"풀", ice:"얼음", fighting:"격투", poison:"독",
  ground:"땅", flying:"비행", psychic:"에스퍼", bug:"벌레",
  rock:"바위", ghost:"고스트", dragon:"드래곤", dark:"악",
  steel:"강철", fairy:"페어리",
};

// 퀴즈에서 제외할 폼 패턴
const EXCLUDE_PATTERNS = [
  "totem", "cosplay", "rock-star", "belle", "pop-star", "phd", "libre",
  "starter", "battle-bond", "ash",
  "-cap", "original-cap", "world-cap", "hoenn-cap", "sinnoh-cap", "unova-cap", "kalos-cap", "alola-cap", "partner-cap",
  "small", "large", "super",  // 호바귀/펌킨인 크기
  "meteor", // 메테노 색상
  "gulping", "gorging", // 윽우지
  "busted", "disguised", // 따라큐
  "family-of-three", "three-segment", // 파밀리쥐/노고고치
  "blue-striped", "white-striped", // 배쓰나이
  "roaming", // 모으령
  "limited-build", "sprinting-build", "swimming-build", "gliding-build", // 코라이돈
  "low-power-mode", "drive-mode", "aquatic-mode", "glide-mode", // 미라이돈
  "female", // 성별폼
  "eternal", // 플라엣테 이터널
  "sandy", "trash", // 도롱마담
  "pom-pom", "pau", "sensu", // 춤추새
  "own-tempo", // 암멍이
  "blue-plumage", "yellow-plumage", "white-plumage", // 시비꼬
  "hero", // 돌핀맨
  "droopy", "stretchy", // 싸리용
  "mega-z", // mega-z 변형 (비공식 스타일)
];

// 이미지 없는 폼 ID
const NO_IMAGE_IDS = [10309, 10318, 10322];

// 폼체인지 한글 라벨 매핑
const FORM_LABEL_MAP = {
  "origin": "오리진",
  "therian": "영물",
  "sky": "스카이",
  "heat": "히트",
  "wash": "워시",
  "frost": "프로스트",
  "fan": "스핀",
  "mow": "커트",
  "attack": "어택",
  "defense": "디펜스",
  "speed": "스피드",
  "zen": "달마",
  "black": "블랙",
  "white": "화이트",
  "resolute": "각오",
  "pirouette": "스텝",
  "blade": "블레이드",
  "unbound": "풀림",
  "crowned": "왕",
  "midnight": "한밤",
  "dusk": "황혼",
  "dawn": "새벽",
  "ultra": "울트라",
  "school": "군집",
  "noice": "나이스페이스",
  "hangry": "배고픈모습",
  "rapid-strike": "연격",
  "low-key": "로우",
  "sunny": "태양",
  "rainy": "빗방울",
  "snowy": "눈구름",
  "ice": "백마탈것",
  "shadow": "흑마탈것",
  "bloodmoon": "붉은달",
  "eternamax": "무한",
  "original": "500년전의모습",
  "wellspring-mask": "우물의가면",
  "hearthflame-mask": "화덕의가면",
  "cornerstone-mask": "주춧돌의가면",
  "terastal": "테라스탈",
  "stellar": "스텔라",
  "combat-breed": "격투종",
  "blaze-breed": "불꽃종",
  "aqua-breed": "물종",
  "galar-standard": "가라르",
  "galar-zen": "가라르달마",
};

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return res.json();
}

function getGen(id) {
  const g = GENERATIONS.find(g => id >= g.start && id <= g.end);
  return g ? g.gen : null;
}

function getTypes(pokemonRes) {
  return pokemonRes.types.map(t => TYPE_MAP[t.type.name] || t.type.name);
}

function shouldExclude(formName) {
  return EXCLUDE_PATTERNS.some(p => formName.includes(p));
}

function classifyForm(formName, baseName) {
  const suffix = formName.replace(baseName + "-", "");

  // 메가진화
  if (suffix === "mega") return { formType: "mega", formLabel: "" };
  if (suffix === "mega-x") return { formType: "mega", formLabel: "X" };
  if (suffix === "mega-y") return { formType: "mega", formLabel: "Y" };

  // 리전폼
  if (suffix === "alola") return { formType: "alola", formLabel: "" };
  if (suffix === "galar") return { formType: "galar", formLabel: "" };
  if (suffix === "hisui") return { formType: "hisui", formLabel: "" };
  if (suffix.startsWith("paldea")) return { formType: "paldea", formLabel: "" };

  // 거다이맥스
  if (suffix.endsWith("-gmax") || suffix === "gmax") return { formType: "gmax", formLabel: "" };

  // 원시회귀
  if (suffix === "primal") return { formType: "primal", formLabel: "" };

  // 복합 리전+폼 (가라르 불비달마 등)
  if (suffix === "galar-standard") return { formType: "galar", formLabel: "" };
  if (suffix === "galar-zen") return { formType: "galar", formLabel: "" };

  // 폼체인지
  for (const [key, label] of Object.entries(FORM_LABEL_MAP)) {
    if (suffix === key) return { formType: "form", formLabel: label };
  }

  // 팔데아 하위폼
  if (suffix.startsWith("paldea-")) {
    const sub = suffix.replace("paldea-", "");
    const label = FORM_LABEL_MAP[sub];
    if (label) return { formType: "paldea", formLabel: label };
    return { formType: "paldea", formLabel: "" };
  }

  return null; // 분류 불가 → 제외
}

async function processSpecies(id) {
  const results = [];

  const [speciesRes, pokemonRes] = await Promise.all([
    fetchJson(`${API_BASE}/pokemon-species/${id}`),
    fetchJson(`${API_BASE}/pokemon/${id}`),
  ]);

  const koName = speciesRes.names.find(n => n.language.name === "ko")?.name;
  if (!koName) return results;

  let koFlavor = "";
  for (const entry of speciesRes.flavor_text_entries) {
    if (entry.language.name !== "ko") continue;
    if (entry.version.name === "x") { koFlavor = entry.flavor_text; break; }
    koFlavor = entry.flavor_text;
  }

  const gen = getGen(id);
  const types = getTypes(pokemonRes);

  // 기본 폼
  results.push({ id, koName, formType: null, formLabel: "", types, koFlavor, gen });

  // 변형 폼
  const varieties = speciesRes.varieties.filter(v => !v.is_default);
  for (const v of varieties) {
    const formId = parseInt(v.pokemon.url.match(/\/pokemon\/(\d+)/)?.[1]);
    const formName = v.pokemon.name;

    if (NO_IMAGE_IDS.includes(formId)) continue;
    if (shouldExclude(formName)) continue;

    const baseName = speciesRes.name; // 영어 기본 이름
    const classification = classifyForm(formName, baseName);
    if (!classification) continue;

    // 폼별 타입 가져오기
    let formTypes = types;
    try {
      const formPokemonRes = await fetchJson(`${API_BASE}/pokemon/${formId}`);
      formTypes = getTypes(formPokemonRes);
    } catch {}

    results.push({
      id: formId,
      koName,
      formType: classification.formType,
      formLabel: classification.formLabel,
      types: formTypes,
      koFlavor,
      gen,
    });
  }

  return results;
}

async function main() {
  console.log("포켓몬 데이터 생성 시작...\n");
  const allData = [];

  for (let start = 1; start <= 1025; start += BATCH) {
    const end = Math.min(start + BATCH - 1, 1025);
    const ids = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    const batched = await Promise.all(ids.map(processSpecies));
    for (const results of batched) allData.push(...results);

    const formCount = allData.filter(d => d.formType !== null).length;
    console.log(`${end}/1025 완료 (기본: ${allData.length - formCount}, 변형: ${formCount})`);
  }

  const baseCount = allData.filter(d => d.formType === null).length;
  const formCount = allData.filter(d => d.formType !== null).length;
  console.log(`\n=== 완료 ===`);
  console.log(`기본 포켓몬: ${baseCount}`);
  console.log(`변형 폼: ${formCount}`);
  console.log(`총: ${allData.length}`);

  // formType별 통계
  const stats = {};
  for (const d of allData) {
    const key = d.formType || "base";
    stats[key] = (stats[key] || 0) + 1;
  }
  console.log("\n카테고리별:");
  for (const [k, v] of Object.entries(stats)) console.log(`  ${k}: ${v}`);

  const fs = require("fs");
  fs.writeFileSync("pokemon_data.json", JSON.stringify(allData, null, 2), "utf-8");
  console.log("\n→ pokemon_data.json 저장 완료");
}

main().catch(err => {
  console.error("오류:", err);
  process.exit(1);
});
