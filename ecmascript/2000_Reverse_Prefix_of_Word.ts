export function reversePrefix(word: string, ch: string): string {
  const result: string[] = [];
  for (let i = 0; i < word.length; i++) {
    result.push(word[i]);
    if (word[i] === ch) {
      return result.slice(0, i + 1).reverse().join("") + word.slice(i + 1);
    }
  }
  return word;
}
