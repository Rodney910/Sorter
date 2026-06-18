export function safeHexColor(color, fallback = '#ffffff') {
  return /^#[0-9a-f]{6}$/i.test(color || '') ? color : fallback;
}
