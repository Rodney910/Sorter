import { resolveImageSrc } from '../../../utils/imageUtils.js';

export function preloadImages(items, { imageRoot, version, onProgress }) {
  const totalLength = items.length || 1;
  let imagesLoaded = 0;

  return Promise.all(
    items.map(
      (item) =>
        new Promise((resolve) => {
          const img = new Image();
          const done = () => {
            imagesLoaded += 1;
            onProgress?.({
              loaded: imagesLoaded,
              total: totalLength,
              label: `Loading Image ${imagesLoaded}`,
              percent: Math.floor((imagesLoaded * 100) / totalLength),
            });
            resolve();
          };

          img.onload = done;
          img.onerror = done;
          img.src = resolveImageSrc(item.img, { imageRoot, version });
        }),
    ),
  );
}
