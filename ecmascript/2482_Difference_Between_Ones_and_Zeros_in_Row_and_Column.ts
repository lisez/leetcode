function sumCells(grid: number[][]): [rows: number[], columns: number[]] {
  const rows: number[] = Array(grid.length).fill(0);
  const columns: number[] = Array(grid[0].length).fill(0);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      rows[i] += grid[i][j] * 2;
      columns[j] += grid[i][j] * 2;
    }
  }

  return [rows, columns];
}

export function onesMinusZeros(grid: number[][]): number[][] {
  const [rows, columns] = sumCells(grid);

  const matrix: number[][] = Array(grid.length);
  for (let x = 0; x < grid.length; x += 1) {
    matrix[x] = Array(grid[0].length);
    for (let y = 0; y < grid[0].length; y += 1) {
      const result = rows[x] + columns[y] - grid.length - grid[0].length;
      matrix[x][y] = result;
    }
  }

  return matrix;
}
