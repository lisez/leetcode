export function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length;
  if (n < d) return -1;
  if (n === d) return jobDifficulty.reduce((a, b) => a + b, 0);
  const dp = Array.from(
    { length: n + 1 },
    () => Array.from({ length: d + 1 }, () => Infinity),
  );
  dp[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= d; k++) {
      let md = 0;
      for (let j = i - 1; j >= k - 1; j--) {
        md = Math.max(md, jobDifficulty[j]);
        dp[i][k] = Math.min(dp[i][k], dp[j][k - 1] + md);
      }
    }
  }
  return dp[n][d];
}

