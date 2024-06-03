function string2map(s: string): Map<string, number> {
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    map.set(char, i);
  }
  return map;
}

export function findPermutationDifference(s: string, t: string): number {
  let acc = 0;
  const map = string2map(t);
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    const index = map.get(char);
    acc += Math.abs(i - index!);
  }

  return acc;
}

export function findPermutationDifference_v2(s: string, t: string): number {
  let acc = 0;
  for (let i = 0; i < s.length; i += 1) {
    const idx = t.indexOf(s[i]);
    acc += Math.abs(i - idx);
  }
  return acc;
}
