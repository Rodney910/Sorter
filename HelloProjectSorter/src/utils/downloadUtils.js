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
  } catch (error) {
    const canvas = await html2canvas(element, {
      backgroundColor: '#161b22',
      scale: 2,
      useCORS: true,
    });
    triggerDownload(canvas.toDataURL('image/png'), filename);
  } finally {
    element.style.boxShadow = previous.boxShadow;
    element.style.marginTop = previous.marginTop;
    element.style.marginBottom = previous.marginBottom;
  }
}
