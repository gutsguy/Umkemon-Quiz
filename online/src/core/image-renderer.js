const PIXEL_BLOCK_START = 40;

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

export function drawPokemon(canvas, img, mode) {
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);

  if (mode === 'silhouette') {
    drawSilhouette(ctx, canvas.width, canvas.height);
  } else {
    drawPixelated(ctx, canvas.width, canvas.height, PIXEL_BLOCK_START);
  }
}

function drawSilhouette(ctx, width, height) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 0) {
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
      data[i + 3] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function drawPixelated(ctx, width, height, blockSize) {
  const source = ctx.getImageData(0, 0, width, height).data.slice();
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
