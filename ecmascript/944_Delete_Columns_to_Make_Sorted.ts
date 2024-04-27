export function minDeletionSize(strs: string[]): number {
  let count = 0;
  for (let i = 0; i < strs[0].length; i += 1) {
    for (let j = 1; j < strs.length; j += 1) {
      if (strs[j][i] < strs[j - 1][i]) {
        count += 1;
        break;
      }
    }
  }
  return count;
}
