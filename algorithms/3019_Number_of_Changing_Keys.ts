export function countKeyChanges(s: string): number {
  let c = 0;
  for (let i = 1; i < s.length; i += 1) {
    if (s[i].toLowerCase() !== s[i - 1].toLowerCase()) {
      c += 1;
    }
  }
  return c;
}
