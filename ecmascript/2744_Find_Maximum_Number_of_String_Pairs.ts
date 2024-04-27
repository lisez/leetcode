export function maximumNumberOfStringPairs(words: string[]): number {
  const map = new Map<string, number>();
  for (const word of words) {
    const key = [...word].sort().join("");
    if (map.has(key)) {
      map.set(key, (map.get(key) || 0) + 1);
    } else {
      map.set(key, 0);
    }
  }
  return [...map.values()].reduce((acc, cur) => acc + cur, 0);
}
