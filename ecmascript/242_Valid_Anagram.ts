export function isAnagram_v1(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (map.has(char)) {
      map.set(char, map.get(char)! + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (let i = 0; i < t.length; i += 1) {
    const char = t[i];
    if (map.has(char)) {
      map.set(char, map.get(char)! - 1);
    } else {
      return false;
    }
  }
  for (const [, value] of map) {
    if (value !== 0) return false;
  }
  return true;
}

export function isAnagram_v2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map: number[] = Array(26);

  for (let i = 0; i < s.length; i += 1) {
    {
      const c = s.charCodeAt(i) - 97;
      map[c] = (map[c] || 0) + 1;
    }
    {
      const c = t.charCodeAt(i) - 97;
      map[c] = (map[c] || 0) - 1;
    }
  }

  return map.every((value) => !value);
}

export function isAnagram_v3(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map: Record<string, number> = {};

  for (let i = 0; i < s.length; i += 1) {
    map[s[i]] = (map[s[i]] || 0) + 1;
    map[t[i]] = (map[t[i]] || 0) - 1;
  }

  return Object.values(map).every((value) => !value);
}
