export function minLength(s: string): number {
  const stack: string[] = [];
  for (const c of s) {
    const last = stack.pop();
    if (!last) {
      stack.push(c);
    } else {
      const word = `${last}${c}`;
      if (word !== "AB" && word !== "CD") {
        stack.push(last, c);
      }
    }
  }
  return stack.length;
}

export function minLength_v2(s: string): number {
  let result = "";
  for (let i = 0; i < s.length; i += 1) {
    result += s[i];
    if (result.endsWith("AB") || result.endsWith("CD")) {
      result = result.slice(0, result.length - 2);
    }
  }

  return result.length;
}
