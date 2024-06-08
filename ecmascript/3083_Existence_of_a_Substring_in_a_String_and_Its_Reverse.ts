function isSubstringPresent(s: string): boolean {
  for (let i = 0; i < s.length - 1; i += 1) {
    const sub = s[i] + s[i + 1];
    const reverse = sub[1] + sub[0];
    if (sub === reverse || s.includes(reverse)) return true;
  }
  return false;
}
