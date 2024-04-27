export function halvesAreAlike(s: string): boolean {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (vowels.has(s[i].toLowerCase())) count++;
    if (vowels.has(s[j].toLowerCase())) count--;
  }
  return count === 0;
}
