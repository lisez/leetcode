function counter(s: string, target: string): number {
  let count = 0;
  for (const c of s) {
    if (c === target) count += 1;
  }
  return count;
}

export function maxScore(s: string): number {
  let max = 0;
  let leftCount = 0;
  let rightCount = 0;

  for (let i = 1; i < s.length; i += 1) {
    const left = s.slice(0, i);
    const right = s.slice(i);

    if (i === 1) {
      leftCount = counter(left, "0");
      rightCount = counter(right, "1");
    }

    if (i > 1) {
      leftCount += +(s[i - 1] === "0");
      rightCount -= +(s[i - 1] === "1");
    }

    if (leftCount + rightCount > max) {
      max = leftCount + rightCount;
    }
  }
  return max;
}
