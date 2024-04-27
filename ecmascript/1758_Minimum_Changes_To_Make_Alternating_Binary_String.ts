function idealArray(len: number, start: 0 | 1) {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push((i + start) % 2);
  }
  return arr;
}

export function minOperations(s: string): number {
  const ideal0 = idealArray(s.length, 0);
  const ideal1 = idealArray(s.length, 1);
  let count0 = 0;
  let count1 = 0;
  for (let i = 0; i < s.length; i++) {
    if (+s[i] !== ideal0[i]) {
      count0++;
    }
    if (+s[i] !== ideal1[i]) {
      count1++;
    }
  }
  return Math.min(count0, count1);
}

export function minOperations_v2(s: string): number {
  let opts = 0;
  const b = s.split("");
  for (let i = 1; i < b.length; i += 1) {
    if (b[i] === b[i - 1]) {
      b[i] = b[i] === "0" ? "1" : "0";
      ++opts;
    }
  }
  return Math.min(opts, s.length - opts);
}
