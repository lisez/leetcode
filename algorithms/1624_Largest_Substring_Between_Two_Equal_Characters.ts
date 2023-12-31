export function maxLengthBetweenEqualCharacters(s: string): number {
  const map = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.get(s[i])?.push(i);
    } else {
      map.set(s[i], [i]);
    }
  }

  return Array.from(map.values()).reduce((m, ary) => {
    const diff = ary[ary.length - 1] - ary[0] - 1;
    return diff > m ? diff : m;
  }, -1);
}

export function maxLengthBetweenEqualCharacters_v2(s: string): number {
  const set = new Set<string>();
  let max = -1;
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) continue;
    const diff = s.lastIndexOf(s[i]) - i - 1;
    max = diff > max ? diff : max;

    set.add(s[i]);
    if (set.size === 26) break;
  }
  return max;
}

export function maxLengthBetweenEqualCharacters_v3(s: string): number {
  return s.split("").reduce((m, c, i) => {
    const d = s.lastIndexOf(c) - i - 1;
    return d > m ? d : m;
  }, -1);
}
