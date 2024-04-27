function stringToMap(s: string): Record<string, number> {
  const map: Record<string, number> = {};
  for (const c of s) {
    map[c] = (map[c] || 0) + 1;
  }
  return map;
}

export function countCharacters(words: string[], chars: string): number {
  const d = stringToMap(chars);
  return words.reduce((acc, w) => {
    if (w.length > chars.length) return acc;
    const m = { ...d };
    for (const c of w) {
      if (!m[c]) return acc;
      m[c] -= 1;
    }
    return acc + w.length;
  }, 0);
}
