const PIXEL_BLOCK_START = 40;
const PIXEL_BLOCK_END = 1;

export function loadArtwork(url, fallbackUrl = null) {
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

export function createRevealRenderer(canvas, img, mode) {
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
  const source = ctx.getImageData(0, 0, canvas.width, canvas.height).data.slice();
  const opaqueCoords = collectOpaqueCoords(source, canvas.width, canvas.height);

  return {
    render(progress) {
      const clamped = Math.max(0, Math.min(1, progress));
      if (mode === 'silhouette') {
        drawSilhouette(ctx, canvas.width, canvas.height, source, opaqueCoords, clamped);
      } else {
        const blockSize = Math.max(
          Math.round(PIXEL_BLOCK_START * (1 - clamped) + PIXEL_BLOCK_END * clamped),
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

function drawSilhouette(ctx, width, height, source, opaqueCoords, progress) {
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

  const revealCount = Math.floor(opaqueCoords.length * progress);
  for (let i = 0; i < revealCount; i++) {
    const [x, y] = opaqueCoords[i];
    const index = (y * width + x) * 4;
    data[index] = source[index];
    data[index + 1] = source[index + 1];
    data[index + 2] = source[index + 2];
    data[index + 3] = source[index + 3];
  }

  if (progress > 0 && opaqueCoords.length > 0) {
    const radius = Math.floor(Math.min(width, height) * 0.14);
    const [cx, cy] = opaqueCoords[
      Math.min(opaqueCoords.length - 1, Math.floor((opaqueCoords.length - 1) * progress))
    ];
    for (let y = Math.max(0, cy - radius); y < Math.min(height, cy + radius); y++) {
      for (let x = Math.max(0, cx - radius); x < Math.min(width, cx + radius); x++) {
        if ((x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2) {
          const index = (y * width + x) * 4;
          if (source[index + 3] > 0) {
            data[index] = source[index];
            data[index + 1] = source[index + 1];
            data[index + 2] = source[index + 2];
            data[index + 3] = source[index + 3];
          }
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
