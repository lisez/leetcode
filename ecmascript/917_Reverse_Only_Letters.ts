function isLetter(c: string): boolean {
  const code = c.charCodeAt(0);
  return code >= 65 && code <= 90 || code >= 97 && code <= 122;
}

export function reverseOnlyLetters(s: string): string {
  let left = 0;
  let right = s.length - 1;
  const chars = s.split("");
  while (left < right) {
    if (!isLetter(chars[left])) {
      left += 1;
    } else if (!isLetter(chars[right])) {
      right -= 1;
    } else {
      [chars[left], chars[right]] = [chars[right], chars[left]];

      left += 1;
      right -= 1;
    }
  }
  return chars.join("");
}
