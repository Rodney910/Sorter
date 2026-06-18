export function msToReadableTime(milliseconds) {
  let t = Math.floor((milliseconds || 0) / 1000);
  const years = Math.floor(t / 31536000);
  t -= years * 31536000;
  const months = Math.floor(t / 2592000);
  t -= months * 2592000;
  const days = Math.floor(t / 86400);
  t -= days * 86400;
  const hours = Math.floor(t / 3600);
  t -= hours * 3600;
  const minutes = Math.floor(t / 60);
  t -= minutes * 60;

  const content = [];
  if (years) content.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months) content.push(`${months} month${months > 1 ? 's' : ''}`);
  if (days) content.push(`${days} day${days > 1 ? 's' : ''}`);
  if (hours) content.push(`${hours} hour${hours > 1 ? 's' : ''}`);
  if (minutes) content.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
  if (t) content.push(`${t} second${t > 1 ? 's' : ''}`);

  return content.slice(0, 3).join(', ') || '0 seconds';
}

export function formatLegacyDate(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}-${month}-${date.getFullYear()}`;
}

export function buildTimestampFilename(prefix, timestamp) {
  const tzoffset = new Date().getTimezoneOffset() * 60000;
  const stamp = new Date(timestamp - tzoffset).toISOString().slice(0, -5).replace('T', '(');
  return `${prefix}-${stamp}).png`;
}
