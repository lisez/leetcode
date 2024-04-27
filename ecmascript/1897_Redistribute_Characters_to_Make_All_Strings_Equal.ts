export function makeEqual(words: string[]): boolean {
  const map = new Map<string, number>();
  for (const word of words) {
    for (const char of word) {
      map.set(char, (map.get(char) ?? 0) + 1);
    }
  }
  for (const [_, count] of map) {
    if (count % words.length !== 0) {
      return false;
    }
  }
  return true;
}
