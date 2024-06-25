function str2num(s: string): string {
  let acc = "";
  for (const c of s) {
    acc += c.charCodeAt(0) - 96;
  }
  return acc;
}

function sumByDigits(n: string): number {
  let acc = 0;
  for (const c of n) {
    acc += +c;
  }
  return acc;
}

export function getLucky(s: string, k: number): number {
  const base = str2num(s);
  let acc: number | string = base;
  for (let i = 1; i <= k; i += 1) {
    acc = sumByDigits(acc.toString());
  }
  return +acc;
}
