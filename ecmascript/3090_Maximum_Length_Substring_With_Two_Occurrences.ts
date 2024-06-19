export function maximumLengthSubstring(s: string): number {
  const ary: number[] = Array(26).fill(0);
  let left = 0;
  let ans = 0;
  for (let right = 0; right < s.length; right += 1) {
    const c = s[right].charCodeAt(0) - 97;
    ary[c] += 1;
    while (ary[c] > 2) {
      const lc = s[left].charCodeAt(0) - 97;
      ary[lc] -= 1;
      left += 1;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}
