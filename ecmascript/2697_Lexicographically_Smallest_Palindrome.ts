export function makeSmallestPalindrome(s: string): string {
  const len = Math.trunc(s.length / 2);
  const w: string[] = [];
  for (let i = 0; i < len; i += 1) {
    const cur = s[i];
    const last = s[s.length - 1 - i];
    w.push(cur <= last ? cur : last);
  }

  const cen = s.length % 2 === 1 ? s[len] : "";
  return w.join("") + cen + w.reverse().join("");
}
