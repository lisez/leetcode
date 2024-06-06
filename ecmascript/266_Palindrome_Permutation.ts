export function canPermutePalindrome(s: string): boolean {
  const m: Record<string, number> = {};
  for (const c of s) {
    if (m[c]) {
      m[c] -= 1;
      if (!m[c]) delete m[c];
    } else {
      m[c] ??= 0;
      m[c] += 1;
    }
  }
  return Object.keys(m).length <= 1;
}
