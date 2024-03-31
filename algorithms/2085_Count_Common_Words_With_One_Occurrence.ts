function words2map(s: string[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const word of s) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  return map;
}

export function countWords(words1: string[], words2: string[]): number {
  const m1 = words2map(words1);
  const m2 = words2map(words2);
  let count = 0;
  for (const w of m1.keys()) {
    count += +(m1.get(w) === 1 && m2.get(w) === 1);
  }
  return count;
}
