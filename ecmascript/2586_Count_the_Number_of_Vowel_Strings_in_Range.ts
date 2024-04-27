function isVowelString(w: string): boolean {
  const v = "aeiou";
  return !!(~v.indexOf(w[0]) && ~v.indexOf(w[w.length - 1]));
}

export function vowelStrings(
  words: string[],
  left: number,
  right: number,
): number {
  let count = 0;
  for (let i = left; i <= right; i += 1) {
    if (isVowelString(words[i])) {
      count += 1;
    }
  }
  return count;
}
