export function areOccurrencesEqual(s: string): boolean {
  const count: number[] = Array(26);
  let code: number | undefined;
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97] ??= 0;
    count[s.charCodeAt(i) - 97]++;
    code ??= s.charCodeAt(i) - 97;
  }

  return count.every((v) => v === count[code!]);
}
