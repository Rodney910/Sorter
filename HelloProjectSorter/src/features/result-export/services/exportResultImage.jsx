import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';

const ASSET_WAIT_TIMEOUT_MS = 10000;

function waitWithTimeout(promise, timeoutMs = ASSET_WAIT_TIMEOUT_MS) {
  let timeoutId;
  const timeout = new Promise((resolve) => {
    timeoutId = window.setTimeout(resolve, timeoutMs);
  });

  return Promise.race([Promise.resolve(promise), timeout]).finally(() => {
    window.clearTimeout(timeoutId);
  });
}

function waitForImage(image) {
  if (image.complete) return Promise.resolve();

  return new Promise((resolve) => {
    let timeoutId;

    const finish = () => {
      window.clearTimeout(timeoutId);
      image.removeEventListener('load', finish);
      image.removeEventListener('error', finish);
      resolve();
    };

    image.addEventListener('load', finish, { once: true });
    image.addEventListener('error', finish, { once: true });
    timeoutId = window.setTimeout(finish, ASSET_WAIT_TIMEOUT_MS);
  });
}

async function waitForExportAssets(element) {
  const fontsReady = document.fonts?.ready || Promise.resolve();
  const imagesReady = Promise.all(Array.from(element.querySelectorAll('img'), waitForImage));

  await Promise.all([waitWithTimeout(fontsReady), imagesReady]);

  // Two frames let the browser apply the export stylesheet and final image dimensions.
  await waitWithTimeout(
    new Promise((resolve) => {
      window.requestAnimationFrame(() => window.requestAnimationFrame(resolve));
    }),
    1000,
  );
}

export async function exportResultImage({ model, filename }) {
  if (!model || !Array.isArray(model.rows)) {
    throw new Error('Invalid result data was provided for PNG export.');
  }

  const [{ default: ResultExportTemplate }, { downloadElementAsPng }] = await Promise.all([
    import('../components/ResultExportTemplate.jsx'),
    import('../../../utils/downloadUtils.js'),
  ]);

  const host = document.createElement('div');
  host.className = 'result-export-host';
  host.setAttribute('aria-hidden', 'true');
  document.body.appendChild(host);

  const root = createRoot(host);

  try {
    flushSync(() => {
      root.render(<ResultExportTemplate model={model} />);
    });

    const exportElement = host.querySelector('[data-result-export]');
    if (!exportElement) throw new Error('The result export template could not be rendered.');

    await waitForExportAssets(exportElement);
    await downloadElementAsPng(exportElement, filename);
  } finally {
    root.unmount();
    host.remove();
  }
}
