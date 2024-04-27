export function numRollsToTarget(n: number, k: number, target: number): number {
  const dp: number[][] = Array.from(
    { length: n + 1 },
    () => Array.from({ length: target + 1 }, () => 0),
  );
  const mod = 10 ** 9 + 7;
  for (let i = 1; i <= Math.min(k, target); i += 1) {
    dp[1][i] = 1;
  }
  for (let i = 2; i <= n; i += 1) {
    for (let j = 1; j <= target; j += 1) {
      for (let m = 1; m <= k; m += 1) {
        if (j >= m) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - m]) % mod;
        }
      }
    }
  }
  return dp[n][target];
}
