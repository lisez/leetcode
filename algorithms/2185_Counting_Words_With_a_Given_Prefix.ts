export function prefixCount(words: string[], pref: string): number {
  return words.filter((word) => word.startsWith(pref)).length;
}

export function prefixCount_v2(words: string[], pref: string): number {
  let count = 0;
  for (const word of words) {
    if (word.startsWith(pref)) {
      count++;
    }
  }
  return count;
}
