function movesBetween(a: number, b: number): number {
  const d = Math.abs(a - b);
  return Math.min(d, 26 - d);
}

export function minTimeToType(word: string): number {
  let m = 0;
  for (let i = 0; i < word.length; i += 1) {
    const c = word.charCodeAt(i);
    const prevCode = i ? word.charCodeAt(i - 1) : 97;
    m += c !== prevCode ? movesBetween(c, prevCode) + 1 : 1;
  }
  return m;
}
