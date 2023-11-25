function maxDepth(s: string): number {
  let max = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count+=1;
      max = Math.max(max, count);
    } else if (s[i] === ")") {
      count-=1;
    }
  }
  return max;
}
