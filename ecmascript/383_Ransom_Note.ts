function freq(s: string): number[] {
  return s.split("").reduce((acc, c) => {
    acc[c.charCodeAt(0) - 97] += 1;
    return acc;
  }, Array(26).fill(0) as number[]);
}

export function canConstruct(ransomNote: string, magazine: string): boolean {
  const f = freq(magazine);
  for (const c of ransomNote) {
    const i = c.charCodeAt(0) - 97;
    if (f[i] === 0) {
      return false;
    }
    f[i] -= 1;
  }
  return true;
}
