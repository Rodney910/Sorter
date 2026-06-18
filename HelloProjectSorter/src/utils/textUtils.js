export function reduceTextWidth(text, font = '12px Arial', width = 160) {
  if (typeof document === 'undefined' || !text) return text || '';

  const canvas = reduceTextWidth.canvas || (reduceTextWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;

  if (context.measureText(text).width < width * 0.8) {
    return text;
  }

  let reducedText = text;
  while (reducedText.length && context.measureText(reducedText).width + context.measureText('..').width > width * 0.8) {
    reducedText = reducedText.slice(0, -1);
  }

  return `${reducedText}..`;
}

export function buildResultTextList(finalCharacters) {
  return finalCharacters.map((item) => `${item.rank}. ${item.character.name}`).join('\n');
}
