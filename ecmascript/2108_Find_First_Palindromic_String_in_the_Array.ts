function isPalindrome(word: string): boolean {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) return false;
    left++;
    right--;
  }
  return true;
}

export function firstPalindrome(words: string[]): string {
  for (const word of words) {
    if (isPalindrome(word)) return word;
  }
  return "";
}
