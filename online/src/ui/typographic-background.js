import { measureNaturalWidth, prepareWithSegments } from '@chenglou/pretext';
import { POPULAR_BACKGROUND_POKEMON_IDS } from '../data/popular-background-pokemon.js';

const ARTWORK_BASE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
const BACKGROUND_POKEMON_POOL = POPULAR_BACKGROUND_POKEMON_IDS;
const TOKENS = ['엄', '엄', '어', 'ㅁ', 'UM', 'um'];
const FONT_FAMILY = '"Malgun Gothic", "Apple SD Gothic Neo", "Segoe UI", sans-serif';
const TILE_SIZE = 430;
const TILE_GAP_X = 120;
const TILE_GAP_Y = 60;
const SPEED_X = 27;
const SPEED_Y = 16.2;
const SAMPLE_STEP = 8;
const MIN_ALPHA = 24;
const BASE_OPACITY = 0.4;
const MAX_TILE_CACHE = 60;
const MAX_ASSIGNMENTS = 80;
const TARGET_FRAME_MS = 1000 / 30;
const ANALOG_BLEED_ALPHA = 0.22;
const ANALOG_SOFT_FILL_ALPHA = 0.075;
const GLOW_SCALE = 0.15;
const GLOW_MIN_STRENGTH = 0.14;

export function initTypographicBackground() {
  const canvas = document.querySelector('#typographic-bg');
  if (!canvas) return null;

  const context = canvas.getContext('2d');
  const renderer = new TypographicBackground(canvas, context);
  renderer.start();
  return renderer;
}

class TypographicBackground {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.pixelRatio = 1;
    this.width = 0;
    this.height = 0;
    this.frame = 0;
    this.lastDrawAt = 0;
    this.startedAt = performance.now();
    this.glyphPalette = createGlyphPalette();
    this.filterEnabled = true;
    this.tileAssignments = new Map();
    this.tileCache = new Map();
    this.loadingIds = new Set();
    this.recentIds = [];
    this.pendingIds = [];
    this.resizeObserver = new ResizeObserver(() => this.resize());
  }

  start() {
    this.resizeObserver.observe(document.body);
    this.resize();
    const tick = (time) => {
      if (time - this.lastDrawAt >= TARGET_FRAME_MS) {
        this.draw(time);
        this.lastDrawAt = time;
      }
      this.frame = requestAnimationFrame(tick);
    };
    this.frame = requestAnimationFrame(tick);
  }

  stop() {
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
  }

  setFilterEnabled(enabled) {
    if (this.filterEnabled === enabled) return;
    this.filterEnabled = enabled;
    this.tileCache.clear();
    this.pendingIds = [];
  }

  resize() {
    const nextPixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const nextWidth = window.innerWidth;
    const nextHeight = window.innerHeight;
    if (this.width === nextWidth && this.height === nextHeight && this.pixelRatio === nextPixelRatio) return;

    this.pixelRatio = nextPixelRatio;
    this.width = nextWidth;
    this.height = nextHeight;
    this.canvas.width = Math.ceil(nextWidth * nextPixelRatio);
    this.canvas.height = Math.ceil(nextHeight * nextPixelRatio);
    this.canvas.style.width = `${nextWidth}px`;
    this.canvas.style.height = `${nextHeight}px`;
    this.context.setTransform(nextPixelRatio, 0, 0, nextPixelRatio, 0, 0);
  }

  draw(time) {
    if (document.body.classList.contains('game-active')) return;

    const context = this.context;
    context.clearRect(0, 0, this.width, this.height);
    context.fillStyle = '#151722';
    context.fillRect(0, 0, this.width, this.height);

    const elapsed = (time - this.startedAt) / 1000;
    const spacingX = TILE_SIZE + TILE_GAP_X;
    const spacingY = TILE_SIZE + TILE_GAP_Y;
    const cameraX = -elapsed * SPEED_X;
    const cameraY = -elapsed * SPEED_Y;
    const minCol = Math.floor((cameraX - spacingX) / spacingX) - 1;
    const maxCol = Math.ceil((cameraX + this.width + spacingX) / spacingX) + 1;
    const minRow = Math.floor((cameraY - spacingY) / spacingY) - 1;
    const maxRow = Math.ceil((cameraY + this.height + spacingY) / spacingY) + 1;
    const visibleKeys = new Set();

    for (let worldRow = minRow; worldRow <= maxRow; worldRow++) {
      const rowStagger = Math.abs(worldRow % 2) * spacingX * 0.5;
      const y = worldRow * spacingY - cameraY;

      for (let worldCol = minCol; worldCol <= maxCol; worldCol++) {
        const x = worldCol * spacingX + rowStagger - cameraX;
        if (x < -TILE_SIZE || x > this.width + TILE_SIZE || y < -TILE_SIZE || y > this.height + TILE_SIZE) {
          continue;
        }

        const key = `${worldCol}:${worldRow}`;
        visibleKeys.add(key);
        const assignment = this.getAssignment(key);
        const tile = this.tileCache.get(assignment.id);
        if (!tile) {
          this.queueTileLoad(assignment.id);
          continue;
        }

        const keyHash = hashKey(key);
        const pulse = 0.92 + Math.sin(elapsed * 0.9 + keyHash * 0.001) * 0.08;
        this.drawTile(tile, x, y, pulse);
        tile.lastUsedAt = performance.now();
      }
    }
    this.pruneAssignments(visibleKeys);

  }

  drawTile(tile, x, y, pulse) {
    const context = this.context;
    context.save();
    context.translate(x + TILE_SIZE / 2, y + TILE_SIZE / 2);
    context.rotate(-0.13);
    context.translate(-TILE_SIZE / 2, -TILE_SIZE / 2);
    context.globalAlpha = pulse;
    context.drawImage(tile.canvas, 0, 0);

    context.restore();
  }

  getAssignment(key) {
    const existing = this.tileAssignments.get(key);
    if (existing) return existing;

    const assignment = { id: this.pickPokemonId() };
    this.tileAssignments.set(key, assignment);
    return assignment;
  }

  pickPokemonId() {
    const recent = new Set(this.recentIds);
    const candidates = BACKGROUND_POKEMON_POOL.filter((id) => !recent.has(id));
    const source = candidates.length > 0 ? candidates : BACKGROUND_POKEMON_POOL;
    const id = source[Math.floor(Math.random() * source.length)];
    this.recentIds.push(id);
    if (this.recentIds.length > 18) this.recentIds.shift();
    return id;
  }

  queueTileLoad(id) {
    if (this.tileCache.has(id) || this.loadingIds.has(id) || this.pendingIds.includes(id)) return;
    this.pendingIds.push(id);
    this.processTileQueue();
  }

  async processTileQueue() {
    if (this.loadingIds.size >= 2) return;
    const id = this.pendingIds.shift();
    if (!id || this.tileCache.has(id) || this.loadingIds.has(id)) return;

    this.loadingIds.add(id);
    try {
      const image = await loadArtwork(id);
      this.tileCache.set(id, {
        ...createPokemonTile(image, this.glyphPalette, this.filterEnabled),
        lastUsedAt: performance.now(),
      });
      this.pruneTileCache();
    } catch (error) {
      console.warn('Failed to load background artwork:', id, error);
    } finally {
      this.loadingIds.delete(id);
      if (this.pendingIds.length > 0) this.processTileQueue();
    }
  }

  pruneAssignments(visibleKeys) {
    if (this.tileAssignments.size < MAX_ASSIGNMENTS) return;
    for (const key of this.tileAssignments.keys()) {
      if (!visibleKeys.has(key)) this.tileAssignments.delete(key);
    }
  }

  pruneTileCache() {
    if (this.tileCache.size <= MAX_TILE_CACHE) return;
    const entries = [...this.tileCache.entries()].sort((a, b) => a[1].lastUsedAt - b[1].lastUsedAt);
    for (const [id] of entries.slice(0, this.tileCache.size - MAX_TILE_CACHE)) {
      if (!this.loadingIds.has(id)) this.tileCache.delete(id);
    }
  }
}

function createGlyphPalette() {
  const variants = [];
  const sizes = [6, 7, 8, 9, 10];
  const weights = [600, 800, 900];

  for (const text of TOKENS) {
    for (const size of sizes) {
      for (const weight of weights) {
        const font = `${weight} ${size}px ${FONT_FAMILY}`;
        const width = measureNaturalWidth(prepareWithSegments(text, font));
        variants.push({
          text,
          size,
          weight,
          width,
          ink: estimateInk(text, size, weight, width),
          font,
        });
      }
    }
  }

  return variants.sort((a, b) => a.ink - b.ink);
}

function createPokemonTile(image, glyphPalette, filterEnabled) {
  const source = drawArtworkToSource(image);
  const glyphs = [];

  for (let y = 0; y < TILE_SIZE; y += SAMPLE_STEP) {
    for (let x = 0; x < TILE_SIZE; ) {
      const sample = sampleSource(source, x, y);
      if (sample.a < MIN_ALPHA) {
        x += SAMPLE_STEP;
        continue;
      }

      const detail = sampleDetail(source, x, y);
      const brightness = relativeBrightness(sample.r, sample.g, sample.b);
      const density = Math.max(0.05, sample.a / 255) * (0.28 + detail * 0.46 + (1 - brightness) * 0.34);
      const glyph = pickGlyph(glyphPalette, density, x, y);
      const alpha = BASE_OPACITY * (0.45 + sample.a / 255) * (0.72 + detail * 0.32);
      const color = boostColor(sample.r, sample.g, sample.b, brightness);

      glyphs.push({
        text: glyph.text,
        font: glyph.font,
        x: x + glyph.width / 2,
        y,
        r: color.r,
        g: color.g,
        b: color.b,
        alpha: Math.min(alpha, 0.58),
      });

      x += Math.max(glyph.width + 1.5, SAMPLE_STEP * 0.72);
    }
  }

  return {
    ...renderTileCanvases(glyphs, filterEnabled),
  };
}

function renderTileCanvases(glyphs, filterEnabled) {
  const canvas = document.createElement('canvas');
  canvas.width = TILE_SIZE;
  canvas.height = TILE_SIZE;
  const context = canvas.getContext('2d');

  context.textBaseline = 'middle';
  context.textAlign = 'center';

  if (filterEnabled) {
    bakeCheapGlow(context, glyphs);
  }

  for (const glyph of glyphs) {
    if (filterEnabled) {
      drawDepthGlyph(context, glyph);
      drawAnalogBleedGlyph(context, glyph);
    } else {
      drawBaseGlyph(context, glyph);
    }
  }

  return { canvas };
}

function drawBaseGlyph(context, glyph) {
  context.font = glyph.font;
  context.fillStyle = `rgba(${glyph.r}, ${glyph.g}, ${glyph.b}, ${glyph.alpha})`;
  context.fillText(glyph.text, glyph.x, glyph.y);
}

function drawAnalogBleedGlyph(context, glyph) {
  const alpha = glyph.alpha;
  context.font = glyph.font;

  context.fillStyle = `rgba(${glyph.r}, ${glyph.g}, ${glyph.b}, ${alpha * ANALOG_SOFT_FILL_ALPHA})`;
  context.fillText(glyph.text, glyph.x - 1, glyph.y - 1);
  context.fillText(glyph.text, glyph.x + 1, glyph.y - 1);
  context.fillText(glyph.text, glyph.x - 1, glyph.y + 1);
  context.fillText(glyph.text, glyph.x + 1, glyph.y + 1);
  context.fillText(glyph.text, glyph.x, glyph.y - 1);
  context.fillText(glyph.text, glyph.x, glyph.y + 1);

  context.fillStyle = `rgba(${glyph.r}, ${glyph.g}, ${glyph.b}, ${alpha * ANALOG_BLEED_ALPHA})`;
  context.fillText(glyph.text, glyph.x - 2, glyph.y);
  context.fillText(glyph.text, glyph.x + 2, glyph.y);

  context.fillStyle = `rgba(${Math.min(glyph.r + 26, 255)}, ${Math.min(glyph.g + 26, 255)}, ${Math.min(
    glyph.b + 26,
    255
  )}, ${alpha * 0.16})`;
  context.fillText(glyph.text, glyph.x - 1, glyph.y);
  context.fillText(glyph.text, glyph.x + 1, glyph.y);

  context.fillStyle = `rgba(${glyph.r}, ${glyph.g}, ${glyph.b}, ${alpha})`;
  context.fillText(glyph.text, glyph.x, glyph.y);
}

function drawDepthGlyph(context, glyph) {
  const alpha = glyph.alpha;
  context.font = glyph.font;

  context.fillStyle = `rgba(7, 10, 20, ${alpha * 0.18})`;
  context.fillText(glyph.text, glyph.x + 1, glyph.y + 2);

  context.fillStyle = `rgba(${Math.min(glyph.r + 42, 255)}, ${Math.min(glyph.g + 42, 255)}, ${Math.min(
    glyph.b + 42,
    255
  )}, ${alpha * 0.12})`;
  context.fillText(glyph.text, glyph.x - 1, glyph.y - 1);
}

function bakeCheapGlow(targetContext, glyphs) {
  const glowCanvas = document.createElement('canvas');
  glowCanvas.width = Math.ceil(TILE_SIZE * GLOW_SCALE);
  glowCanvas.height = Math.ceil(TILE_SIZE * GLOW_SCALE);
  const glowContext = glowCanvas.getContext('2d');
  glowContext.textBaseline = 'middle';
  glowContext.textAlign = 'center';
  glowContext.globalCompositeOperation = 'lighter';

  for (const glyph of glyphs) {
    drawCheapGlowGlyph(glowContext, glyph, GLOW_SCALE);
  }

  targetContext.save();
  targetContext.globalCompositeOperation = 'lighter';
  targetContext.imageSmoothingEnabled = true;
  targetContext.globalAlpha = 0.2;
  targetContext.drawImage(glowCanvas, 0, 0, TILE_SIZE, TILE_SIZE);
  targetContext.restore();
}

function drawCheapGlowGlyph(context, glyph, scale) {
  const brightness = relativeBrightness(glyph.r, glyph.g, glyph.b);
  const saturation = relativeSaturation(glyph.r, glyph.g, glyph.b);
  const glowStrength = 0.08 + brightness * 0.12 + saturation * 0.18;
  if (glowStrength < GLOW_MIN_STRENGTH) return;

  const alpha = glyph.alpha * glowStrength;
  context.font = scaleFont(glyph.font, scale);
  context.fillStyle = `rgba(${Math.min(glyph.r + 38, 255)}, ${Math.min(glyph.g + 38, 255)}, ${Math.min(
    glyph.b + 38,
    255
  )}, ${alpha})`;
  context.fillText(glyph.text, glyph.x * scale, glyph.y * scale);
  context.fillStyle = `rgba(${glyph.r}, ${glyph.g}, ${glyph.b}, ${alpha * 0.42})`;
  context.fillText(glyph.text, (glyph.x - 1.6) * scale, glyph.y * scale);
  context.fillText(glyph.text, (glyph.x + 1.6) * scale, glyph.y * scale);
}

function drawArtworkToSource(image) {
  const canvas = document.createElement('canvas');
  canvas.width = TILE_SIZE;
  canvas.height = TILE_SIZE;
  const context = canvas.getContext('2d');
  const scale = Math.min((TILE_SIZE * 0.98) / image.naturalWidth, (TILE_SIZE * 0.98) / image.naturalHeight);
  const width = image.naturalWidth * scale;
  const height = image.naturalHeight * scale;
  const x = (TILE_SIZE - width) / 2;
  const y = (TILE_SIZE - height) / 2;
  context.clearRect(0, 0, TILE_SIZE, TILE_SIZE);
  context.drawImage(image, x, y, width, height);

  return {
    data: context.getImageData(0, 0, TILE_SIZE, TILE_SIZE).data,
    width: TILE_SIZE,
    height: TILE_SIZE,
  };
}

function loadArtwork(id) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = `${ARTWORK_BASE}/${id}.png`;
  });
}

function hashKey(key) {
  let hash = 0;
  for (let index = 0; index < key.length; index++) {
    hash = (hash * 31 + key.charCodeAt(index)) | 0;
  }
  return Math.abs(hash);
}

function sampleSource(source, x, y) {
  const ix = clamp(Math.round(x), 0, source.width - 1);
  const iy = clamp(Math.round(y), 0, source.height - 1);
  const index = (iy * source.width + ix) * 4;
  return {
    r: source.data[index],
    g: source.data[index + 1],
    b: source.data[index + 2],
    a: source.data[index + 3],
  };
}

function sampleDetail(source, x, y) {
  const center = sampleSource(source, x, y);
  const right = sampleSource(source, x + SAMPLE_STEP, y);
  const down = sampleSource(source, x, y + SAMPLE_STEP);
  const colorDelta =
    (Math.abs(center.r - right.r) +
      Math.abs(center.g - right.g) +
      Math.abs(center.b - right.b) +
      Math.abs(center.r - down.r) +
      Math.abs(center.g - down.g) +
      Math.abs(center.b - down.b)) /
    1530;
  const alphaDelta = (Math.abs(center.a - right.a) + Math.abs(center.a - down.a)) / 510;
  return Math.min(1, colorDelta * 1.5 + alphaDelta * 0.7);
}

function pickGlyph(glyphPalette, density, x, y) {
  const target = clamp(density, 0, 1);
  const offset = Math.abs(Math.floor(x * 13 + y * 7)) % 5;
  const index = clamp(Math.round(target * (glyphPalette.length - 1)) + offset - 2, 0, glyphPalette.length - 1);
  return glyphPalette[index];
}

function estimateInk(text, size, weight, width) {
  const tokenWeight =
    {
      um: 0.34,
      '어': 0.48,
      UM: 0.56,
      'ㅁ': 0.62,
      '엄': 0.68,
    }[text] ?? 0.5;
  return tokenWeight * size * (weight / 900) * Math.max(width, 1);
}

function relativeBrightness(r, g, b) {
  return (r * 0.299 + g * 0.587 + b * 0.114) / 255;
}

function relativeSaturation(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max === 0 ? 0 : (max - min) / max;
}

function scaleFont(font, scale) {
  return font.replace(/(\d+(?:\.\d+)?)px/, (_, size) => `${Number(size) * scale}px`);
}

function boostColor(r, g, b, brightness) {
  const boost = brightness < 0.32 ? 1.38 : 1.16;
  return {
    r: clamp(Math.round(r * boost + 18), 0, 255),
    g: clamp(Math.round(g * boost + 18), 0, 255),
    b: clamp(Math.round(b * boost + 18), 0, 255),
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
