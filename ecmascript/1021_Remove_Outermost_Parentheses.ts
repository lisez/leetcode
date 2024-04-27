export function removeOuterParentheses(s: string): string {
  let result = "";
  let count = 0;
  for (const c of s) {
    if (c === "(") {
      if (count > 0) {
        result += c;
      }
      count += 1;
    } else {
      count -= 1;
      if (count > 0) {
        result += c;
      }
    }
  }

  return result;
}
