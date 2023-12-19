function rangePicker(i: number, j: number, img: number[][]): number[] {
  const result: number[] = [];
  for (let k = i - 1; k <= i + 1; k += 1) {
    for (let l = j - 1; l <= j + 1; l += 1) {
      const grid = img[k]?.[l];
      if (grid >= 0) result.push(grid);
    }
  }
  return result;
}

export function imageSmoother(img: number[][]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < img.length; i += 1) {
    for (let j = 0; j < img[i].length; j += 1) {
      const range = rangePicker(i, j, img);
      const average = Math.floor(
        range.reduce((acc, cur) => acc + cur, 0) / range.length,
      );

      result[i] ??= [];
      result[i][j] = average;
    }
  }

  return result;
}
