export function indexPairs(text: string, words: string[]): number[][] {
  const co: [number, number][] = [];
  for (let i = 0; i < text.length; i++) {
    for (const word of words) {
      if (text.slice(i, i + word.length) === word) {
        co.push([i, i + word.length - 1]);
      }
    }
  }

  co.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  return co;
}
