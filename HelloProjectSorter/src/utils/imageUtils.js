export function appendVersion(src, version) {
  const suffix = `v=${encodeURIComponent(version || 'dev')}`;
  return `${src}${src.includes('?') ? '&' : '?'}${suffix}`;
}

export function resolveImageSrc(imgName, { imageRoot = '', version = 'dev' } = {}) {
  if (!imgName) return '';

  if (imgName.startsWith('data:image')) return imgName;

  if (imgName.startsWith('http://') || imgName.startsWith('https://') || imgName.startsWith('/')) {
    return appendVersion(imgName, version);
  }

  return appendVersion(`${imageRoot}${imgName}`, version);
}
