export function countLetters(s: string): number {
  let total = 1;
  let count = 1;
  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === s[i - 1]) {
      count += 1;
    } else {
      count = 1;
    }
    total += count;
  }
  return total;
}
