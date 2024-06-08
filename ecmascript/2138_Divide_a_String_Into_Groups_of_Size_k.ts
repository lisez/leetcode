export function divideString(s: string, k: number, fill: string): string[] {
  const chunks: string[] = [];
  for (let i = 0; i < s.length; i += k) {
    chunks.push(s.slice(i, i + k).padEnd(k, fill));
  }
  return chunks;
}
