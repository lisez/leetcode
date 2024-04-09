function countSetsByTwo(n: number): number {
  return n * (n - 1) / 2;
}

export function similarPairs(words: string[]): number {
  const map = new Map<string, number>();
  for (const w of words) {
    const k = Array.from(new Set([...w])).sort().join("");
    map.set(k, (map.get(k) || 0) + 1);
  }
  return [...map.values()].reduce(
    (acc, v) => v > 1 ? acc + countSetsByTwo(v) : acc,
    0,
  );
}
