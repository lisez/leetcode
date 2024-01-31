export function digitCount(num: string): boolean {
  const ary: number[] = [];
  for (const n of num) {
    ary[+n] = (ary[+n] || 0) + 1;
  }
  return num.split("").every((n, i) => (ary[i] || 0) === +n);
}
