export function maxWidthOfVerticalArea(points: number[][]): number {
  const pts = points.sort((a, b) => b[0] - a[0]);
  let max = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const x = pts[i][0] - pts[i + 1][0];
    if (x > max) max = x;
  }
  return max;
}
