export function destCity(paths: string[][]): string {
  const map = new Map<string, string>();
  for (const [from, to] of paths) {
    map.set(from, to);
  }

  let [[start]] = paths;
  while (map.has(start)) {
    const next = map.get(start);
    if (next) {
      start = next;
    } else {
      break;
    }
  }
  return start;
}
