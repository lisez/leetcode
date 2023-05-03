function mergeAlternately(word1: string, word2: string): string {
  const minWords = Math.min(word1.length, word2.length);
  let result = "";
  for (let i = 0; i < minWords; i += 1) {
    result += word1[i] || "";
    result += word2[i] || "";
  }
  result += (word1.length > minWords ? word1 : word2).slice(minWords);
  return result;
}
