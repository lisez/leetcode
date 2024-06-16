export function checkAlmostEquivalent(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const freq = Array(26).fill(0);
  for (let i = 0; i < word1.length; i += 1) {
    freq[word1.charCodeAt(i) - 97] += 1;
    freq[word2.charCodeAt(i) - 97] -= 1;
  }

  return freq.every((val) => Math.abs(val) <= 3);
}
