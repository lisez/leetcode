function getFreq(word: string): Map<string, number> {
  const map = new Map<string, number>();
  for (const c of word) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  return map;
}

export function equalFrequency(word: string): boolean {
  const freq = getFreq(word);

  for (const w of freq.keys()) {
    freq.set(w, (freq.get(w) || 0) - 1);
    const set = new Set<number>(freq.values());
    set.delete(0);
    if (set.size === 1) return true;
    freq.set(w, (freq.get(w) || 0) + 1);
  }

  return false;
}
