export function countBinarySubstrings(s: string): number {
  let count = 0;
  for (let i = 0; i < s.length - 1; i += 1) {
    if (s[i] === s[i + 1]) continue;
    let last = i;
    for (let j = i + 1; j < s.length; j += 1) {
      if (s[j] === s[i]) {
        last = j;
      } else {
        break;
      }
    }

    const len = last - i + 1;
    const tail = s.slice(last + 1, last + 1 + len);
    if (tail.length === len && !tail.includes(s[i])) {
      count += 1;
    }
  }

  return count;
}

export function countBinarySubstrings2(s: string): number {
  let count = 0;
  let pre = 0;
  let cur = 1;
  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === s[i - 1]) {
      cur += 1;
    } else {
      count += Math.min(pre, cur);
      pre = cur;
      cur = 1;
    }
  }
  return count + Math.min(pre, cur);
}
