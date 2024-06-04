export function countVowelSubstrings(word: string): number {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;
  for (let i = 0; i < word.length; i += 1) {
    if (!vowels.includes(word[i])) continue;

    const sub = new Set<string>();
    for (let j = i; j < word.length; j += 1) {
      if (vowels.includes(word[j])) {
        sub.add(word[j]);
        count += +(sub.size === 5);
      } else {
        break;
      }
    }
  }
  return count;
}
