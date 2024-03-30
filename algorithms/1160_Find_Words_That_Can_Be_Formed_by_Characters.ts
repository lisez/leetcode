function stringToMap(s: string): Record<string, number> {
  const map: Record<string, number> = {};
  for (const c of s) {
    map[c] = (map[c] || 0) + 1;
  }
  return map;
}

export function countCharacters(words: string[], chars: string): number {
  const d = stringToMap(chars);

  let r = 0;
  let m: Record<string, number>;
  outside: for (const w of words) {
    if (w.length <= chars.length) {
      m = { ...d };
      for (const c of w) {
        if (!m[c]) continue outside;
        m[c] -= 1;
      }
      r += w.length;
    }
  }

  return r;
}
