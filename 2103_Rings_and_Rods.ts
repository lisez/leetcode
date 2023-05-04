function countPoints(rings: string): number {
  const map: Record<string, number> = {};
  const result: Set<string> = new Set();
  for (let i = 0; i <= rings.length; i += 2) {
    const c = rings[i];
    const n = rings[i + 1];

    map[n] ??= 0;
    if (c === "R") map[n] |= 0b100;
    if (c === "G") map[n] |= 0b10;
    if (c === "B") map[n] |= 0b1;
    if (map[n] === 0b111) result.add(n);
  }
  return result.size;
}
