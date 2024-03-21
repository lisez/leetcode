export function maximumValue(strs: string[]): number {
  return Math.max(...strs.map((e) => Number.isNaN(+e) ? +e : e.length));
}
