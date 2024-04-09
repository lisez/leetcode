export function areNumbersAscending(s: string): boolean {
  const nums = "0123456789";
  let max = -1;
  let digits = "";
  for (const c of s) {
    if (nums.includes(c)) {
      digits += c;
    } else if (digits) {
      if (+digits <= max) {
        return false;
      }
      max = +digits;
      digits = "";
    }
  }
  return !digits || +digits > max;
}

export function areNumbersAscending_v2(s: string): boolean {
  let p = NaN;
  for (const n of s.matchAll(/\d+/g)) {
    if (+n <= p) return false;
    p = +n;
  }
  return true;
}
