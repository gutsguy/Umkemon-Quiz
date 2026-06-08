const PIXEL_BLOCK_START = 40;
const PIXEL_BLOCK_END = 1;
export const REVEAL_INTERVAL = 3000;
export const REVEAL_STEPS = 10;

const DEFAULT_LOAD_RETRIES = 2;
const DEFAULT_RETRY_DELAY_MS = 500;

export async function loadArtwork(url, fallbackUrl = null, options = {}) {
  const retries = options.retries ?? DEFAULT_LOAD_RETRIES;
  const retryDelayMs = options.retryDelayMs ?? DEFAULT_RETRY_DELAY_MS;
  let lastError = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await loadArtworkOnce(url, fallbackUrl);
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await delay(retryDelayMs * (attempt + 1));
      }
    }
  }

  throw lastError;
}

function loadArtworkOnce(url, fallbackUrl = null) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => {
      if (fallbackUrl && img.src !== fallbackUrl) {
        img.src = fallbackUrl;
      } else {
        reject(new Error(`Failed to load artwork: ${url}`));
      }
    };
    img.src = url;
  });
}

function delay(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export function createRevealRenderer(canvas, img, mode) {
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
  const source = ctx.getImageData(0, 0, canvas.width, canvas.height).data.slice();
  const opaqueCoords = collectOpaqueCoords(source, canvas.width, canvas.height);

  return {
    drawInitial() {
      if (mode === 'silhouette') {
        drawSilhouetteInitial(ctx, canvas.width, canvas.height, source);
      } else {
        drawPixelated(ctx, canvas.width, canvas.height, source, PIXEL_BLOCK_START);
      }
    },
    revealStep(step) {
      if (mode === 'silhouette') {
        revealSilhouettePatch(ctx, canvas.width, canvas.height, source, opaqueCoords);
      } else {
        const t = step / REVEAL_STEPS;
        const blockSize = Math.max(
          Math.round(PIXEL_BLOCK_START * (1 - t) + PIXEL_BLOCK_END * t),
          PIXEL_BLOCK_END
        );
        drawPixelated(ctx, canvas.width, canvas.height, source, blockSize);
      }
    },
  };
}

function collectOpaqueCoords(source, width, height) {
  const coords = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (source[(y * width + x) * 4 + 3] > 0) coords.push([x, y]);
    }
  }
  return coords;
}

function drawSilhouetteInitial(ctx, width, height, source) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    if (source[i + 3] > 0) {
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
      data[i + 3] = 255;
    } else {
      data[i] = source[i];
      data[i + 1] = source[i + 1];
      data[i + 2] = source[i + 2];
      data[i + 3] = source[i + 3];
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function revealSilhouettePatch(ctx, width, height, source, opaqueCoords) {
  if (opaqueCoords.length === 0) return;
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const [cx, cy] = opaqueCoords[Math.floor(Math.random() * opaqueCoords.length)];
  const radius = Math.floor(Math.min(width, height) * 0.15);

  for (let y = Math.max(0, cy - radius); y < Math.min(height, cy + radius); y++) {
    for (let x = Math.max(0, cx - radius); x < Math.min(width, cx + radius); x++) {
      if ((x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2) {
        const index = (y * width + x) * 4;
        if (source[index + 3] > 0) {
          data[index] = source[index];
          data[index + 1] = source[index + 1];
          data[index + 2] = source[index + 2];
          data[index + 3] = 255;
        }
      }
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function drawPixelated(ctx, width, height, source, blockSize) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  for (let by = 0; by < height; by += blockSize) {
    for (let bx = 0; bx < width; bx += blockSize) {
      let r = 0;
      let g = 0;
      let b = 0;
      let a = 0;
      let count = 0;

      for (let y = by; y < Math.min(by + blockSize, height); y++) {
        for (let x = bx; x < Math.min(bx + blockSize, width); x++) {
          const i = (y * width + x) * 4;
          r += source[i];
          g += source[i + 1];
          b += source[i + 2];
          a += source[i + 3];
          count++;
        }
      }

      r = Math.round(r / count);
      g = Math.round(g / count);
      b = Math.round(b / count);
      a = Math.round(a / count);

      for (let y = by; y < Math.min(by + blockSize, height); y++) {
        for (let x = bx; x < Math.min(bx + blockSize, width); x++) {
          const i = (y * width + x) * 4;
          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
          data[i + 3] = a;
        }
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);
}
