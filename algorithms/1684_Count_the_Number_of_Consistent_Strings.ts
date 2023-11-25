function countConsistentStrings(allowed: string, words: string[]): number {
  let count = 0;

  loop_outside: for (const word of words) {
    for (const char of word) {
      if (!allowed.includes(char)) continue loop_outside;
    }
    count += 1;
  }

  return count;
}
