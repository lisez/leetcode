export function checkDistances(s: string, distance: number[]): boolean {
  const set = new Set<string>();
  for (let i = 0; i < s.length; i += 1) {
    if (set.has(s[i])) continue;
    const size = distance[s.charCodeAt(i) - 97];
    const last = s.lastIndexOf(s[i]);
    const diff = last - i - 1;
    if (diff !== size) return false;
    set.add(s[i]);
  }
  return true;
}
