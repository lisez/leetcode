export function numDecodings(s: string): number {
  if (s[0] === "0") return 0;
  if (s.length === 1) return 1;
  if (s.length === 2) {
    const firstTwoDigits = +s.slice(0, 2);
    if (firstTwoDigits > 26) {
      return +!(s[1] === "0");
    }
    return (s[1] === "0") ? 1 : 2;
  }

  const dp = Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i += 1) {
    const oneDigit = +s.slice(i - 1, i);
    const twoDigits = +s.slice(i - 2, i);

    if (oneDigit > 0) {
      dp[i] += dp[i - 1];
    }
    if (twoDigits > 9 && twoDigits < 27) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
}
