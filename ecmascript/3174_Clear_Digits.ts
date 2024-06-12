export function clearDigits(s: string): string {
  if (!/[a-z]\d/.test(s)) return s;
  return clearDigits(s.replace(/[a-z]\d/, ""));
}

export function clearDigits2(s: string): string {
  const digits = "0123456789";
  const stack: string[] = [];
  for (const c of s) {
    if (digits.includes(c)) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join("");
}
