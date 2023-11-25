export function isAcronym_v1(words: string[], s: string): boolean {
  const acronym = words.map((w) => w[0]).join("");
  return acronym === s;
}

export function isAcronym_v2(words: string[], s: string): boolean {
  if (words.length !== s.length) return false;
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] !== s[i]) {
      return false;
    }
  }
  return true;
}
