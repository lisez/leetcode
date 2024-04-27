function calculateCount(s: string) {
  const map = new Map<string, number>();
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  return map;
}

export function sortString(s: string): string {
  const map = calculateCount(s);
  let result = "";
  let reverse = false;
  while (map.size > 0) {
    const keys = [...map.keys()];
    if (reverse) {
      keys.sort((a, b) => b.localeCompare(a));
    } else {
      keys.sort();
    }

    for (const key of keys) {
      const val = map.get(key)! - 1;
      if (val) {
        map.set(key, val);
      } else {
        map.delete(key);
      }
    }

    result += keys.join("");
    reverse = !reverse;
  }
  return result;
}
