export function removeVowels(s: string): string {
  const m = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };

  let r = "";
  for (const c of s) {
    if (!m[c]) {
      r += c;
    }
  }
  return r;
}
