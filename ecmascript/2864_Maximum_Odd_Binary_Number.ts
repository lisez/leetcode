function count(s: string, t: string): number {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) count++;
  }
  return count;
}

export function maximumOddBinaryNumber(s: string): string {
  const ones = count(s, "1");
  return "1".repeat(ones - 1) + "0".repeat(s.length - ones) + "1";
}
