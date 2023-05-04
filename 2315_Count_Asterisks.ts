function countAsterisks(s: string): number {
  let total = 0;
  let flag = false;
  for (const c of s) {
    if (!flag && c === "*") total += 1;
    if (c === "|") flag = !flag;
  }

  return total;
}
