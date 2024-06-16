export function isPrefixOfWord(sentence: string, searchWord: string): number {
  const idx = sentence.split(" ").findIndex((word) =>
    word.startsWith(searchWord)
  );
  return idx === -1 ? -1 : idx + 1;
}
