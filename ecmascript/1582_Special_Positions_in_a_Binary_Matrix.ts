function flatRecords(mat: number[][]): [number[], number[]] {
  const m = Array<number>(mat.length).fill(0);
  const n = Array<number>(mat[0].length).fill(0);
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        m[i]++;
        n[j]++;
      }
    }
  }
  return [m, n];
}

export function numSpecial(mat: number[][]): number {
  let count = 0;

  const [m, n] = flatRecords(mat);
  for (let i = 0; i < mat.length; i++) {
    if (m[i] !== 1) continue;
    for (let j = 0; j < mat[i].length; j++) {
      if (n[j] !== 1) continue;
      if (mat[i][j] === 1 && n[j] === 1) {
        count++;
      }
    }
  }

  return count;
}
