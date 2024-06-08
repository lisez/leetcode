export function reformatNumber(number: string): string {
  if (number.length <= 3) return number;

  const digits = number.replace(/[ -]/g, "");
  const set: string[] = [];
  for (let i = 0; i < digits.length - 2; i += 3) {
    const sub = digits.slice(i, Math.min(i + 3, digits.length - 2));
    set.push(sub);
  }

  const last = set[set.length - 1];
  const tail = digits.slice(-2);
  if (last.length === 1) {
    set[set.length - 1] = set[set.length - 1] + tail;
  } else {
    set.push(tail);
  }

  return set.join("-");
}
