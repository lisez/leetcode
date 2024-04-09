export function largestGoodInteger(num: string): string {
  let max = "";
  for (let i = 0; i < num.length - 2; i += 1) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      max = !max || max[0] < num[i] ? num[i].repeat(3) : max;
    }
  }
  return max;
}
