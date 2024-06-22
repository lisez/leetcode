export function getLongestSubsequence(
  words: string[],
  groups: number[],
): string[] {
  const chars: string[] = [words[0]];
  for (let i = 1; i < words.length; i += 1) {
    if (groups[i] !== groups[i - 1]) {
      chars.push(words[i]);
    }
  }

  return chars;
}
