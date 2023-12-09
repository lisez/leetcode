export function removeTrailingZeros_v1(num: string): string {
  return num.replace(/0+$/, "");
}

export function removeTrailingZeros_v2(num: string): string {
  if (num.slice(-1) !== "0") return num;
  return removeTrailingZeros_v2(num.slice(0, -1));
}

export function removeTrailingZeros_v3(num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] !== "0") return num.slice(0, i + 1);
  }
  return num;
}
