function shift(c: string, x: number): string {
  return String.fromCharCode(c.charCodeAt(0) + x);
}

export function replaceDigits(s: string): string {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      result += s[i];
    } else {
      result += shift(s[i - 1], parseInt(s[i], 10));
    }
  }
  return result;
}
