export function stringMatching(words: string[]): string[] {
  words.sort((a, b) => a.length - b.length);

  const matched = new Set<string>();
  for (let i = 0; i < words.length - 1; i += 1) {
    for (let j = i + 1; j < words.length; j += 1) {
      if (words[j].includes(words[i])) {
        matched.add(words[i]);
      }
    }
  }
  return Array.from(matched);
}
