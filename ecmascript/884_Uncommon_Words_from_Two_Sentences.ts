export function uncommonFromSentences(s1: string, s2: string): string[] {
  const map = new Map<string, number>();
  for (const w of (s1.split(" ").concat(s2.split(" ")))) {
    map.set(w, (map.get(w) || 0) + 1);
  }

  const res: string[] = [];
  for (const [w, c] of map.entries()) {
    if (c === 1) res.push(w);
  }
  return res;
}
