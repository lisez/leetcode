export function repeatedCharacter(s: string): string {
  const set = new Set<string>();
  for (const c of s) {
    if (set.has(c)) return c;
    set.add(c);
  }
  return "";
}
