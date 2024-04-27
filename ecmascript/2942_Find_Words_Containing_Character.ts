export function findWordsContaining(words: string[], x: string): number[] {
  const result: number[] = [];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }
  return result;
}
