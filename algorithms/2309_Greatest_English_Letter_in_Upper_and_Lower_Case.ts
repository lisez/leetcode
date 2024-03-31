export function greatestLetter(s: string): string {
  for (let i = 25; i >= 0; i -= 1) {
    const upper = String.fromCharCode(65 + i);
    const lower = String.fromCharCode(97 + i);
    if (s.includes(upper) && s.includes(lower)) {
      return upper;
    }
  }
  return "";
}
