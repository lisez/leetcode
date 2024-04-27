export function lengthOfLongestSubstringTwoDistinct(s: string): number {
  let left = 0;
  let right = 0;
  let max = 0;
  const map = new Map<string, number>();
  while (right < s.length) {
    const rc = s[right];
    map.set(rc, (map.get(rc) || 0) + 1);
    right += 1;
    while (map.size > 2) {
      const lc = s[left];
      map.set(lc, (map.get(lc) || 0) - 1);
      if (map.get(lc) === 0) {
        map.delete(lc);
      }
      left += 1;
    }
    max = Math.max(max, right - left);
  }
  return max;
}
