function zipped(names: string[], heights: number[]): [string, number][] {
  return names.map((n, i) => [n, heights[i]]);
}

export function sortPeople(names: string[], heights: number[]): string[] {
  const list = zipped(names, heights);
  list.sort((a, b) => b[1] - a[1]);
  return list.map((p) => p[0]);
}
