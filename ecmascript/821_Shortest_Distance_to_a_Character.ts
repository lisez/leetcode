function getIndex(s: string, c: string): number[] {
  const index: number[] = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === c) index.push(i);
  }
  return index;
}

export function shortestToChar(s: string, c: string): number[] {
  const indexes = getIndex(s, c);

  const result: number[] = [];
  for (let i = 0; i < s.length; i += 1) {
    result.push(Math.min(...indexes.map((x) => Math.abs(x - i))));
  }
  return result;
}
