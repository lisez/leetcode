export function countPrefixSuffixPairs(words: string[]): number {
  let count = 0;
  for (let i = 0; i < words.length - 1; i += 1) {
    const root = words[i];
    for (let j = i + 1; j < words.length; j += 1) {
      const word = words[j];
      if (
        root.length <= word.length && word.startsWith(root) &&
        word.endsWith(root)
      ) {
        count += 1;
      }
    }
  }

  return count;
}
