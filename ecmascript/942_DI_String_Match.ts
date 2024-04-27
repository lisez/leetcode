export function diStringMatch(s: string): number[] {
  let low = 0;
  let high = s.length;
  const result: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      result.push(low++);
    } else {
      result.push(high--);
    }
  }
  return [...result, low];
}
