import { toPng } from 'html-to-image';
import html2canvas from 'html2canvas';

function triggerDownload(dataUrl, filename) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function shouldUseHtml2Canvas() {
  const userAgent = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/i.test(userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isSafari =
    /Safari/i.test(userAgent) &&
    /Apple Computer/i.test(navigator.vendor) &&
    !/CriOS|FxiOS|EdgiOS|OPiOS|Chrome|Chromium|Edg/i.test(userAgent);

  return isIOS || isSafari;
}

function renderWithHtml2Canvas(element) {
  return html2canvas(element, {
    backgroundColor: '#161b22',
    scale: 2,
    useCORS: true,
  });
}

export async function downloadElementAsPng(element, filename) {
  if (!element) {
    throw new Error('No element was provided for PNG export.');
  }

  const containerWidth = element.scrollWidth;
  const containerHeight = element.scrollHeight;
  const previous = {
    boxShadow: element.style.boxShadow,
    marginTop: element.style.marginTop,
    marginBottom: element.style.marginBottom,
  };

  element.style.boxShadow = 'none';
  element.style.marginTop = '0';
  element.style.marginBottom = '30px';

  try {
    if (shouldUseHtml2Canvas()) {
      const canvas = await renderWithHtml2Canvas(element);
      triggerDownload(canvas.toDataURL('image/png'), filename);
      return;
    }

    const dataUrl = await toPng(element, {
      cacheBust: true,
      pixelRatio: 2,
      width: containerWidth * 2,
      height: containerHeight * 2,
      style: {
        transform: 'scale(2)',
        transformOrigin: 'top left',
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
      },
    });
    triggerDownload(dataUrl, filename);
  } catch {
    const canvas = await renderWithHtml2Canvas(element);
    triggerDownload(canvas.toDataURL('image/png'), filename);
  } finally {
    element.style.boxShadow = previous.boxShadow;
    element.style.marginTop = previous.marginTop;
    element.style.marginBottom = previous.marginBottom;
  }
}
