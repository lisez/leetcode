function freq(s: string): Map<string, number> {
  const m = new Map<string, number>();
  for (const c of s) {
    m.set(c, (m.get(c) || 0) + 1);
  }
  return m;
}

export function canConstruct(ransomNote: string, magazine: string): boolean {
  const f = freq(magazine);
  for (const c of ransomNote) {
    if (f.get(c) === 0 || !f.has(c)) {
      return false;
    }
    f.set(c, f.get(c)! - 1);
  }
  return true;
}
