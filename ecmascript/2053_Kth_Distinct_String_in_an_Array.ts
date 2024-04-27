export function kthDistinct(arr: string[], k: number): string {
  const m = new Map<string, boolean>();
  for (const s of arr) {
    m.set(s, m.has(s));
  }
  const words: string[] = [];
  for (const [key, value] of m.entries()) {
    if (!value) words.push(key);
  }
  return words[k - 1] || "";
}
