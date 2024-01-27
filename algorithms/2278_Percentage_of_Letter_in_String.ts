function count(s: string, letter: string): number {
  let result = 0;
  for (const c of s) {
    if (c === letter) {
      result += 1;
    }
  }
  return result;
}

export function percentageLetter(s: string, letter: string): number {
  const c = count(s, letter);
  return c ? Math.floor((c / s.length) * 100) : 0;
}
