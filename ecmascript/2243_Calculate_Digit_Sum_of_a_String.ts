function sum(s: string): number {
  let acc = 0;
  for (let i = 0; i < s.length; i++) {
    acc += +s[i];
  }
  return acc;
}

export function digitSum(s: string, k: number): string {
  if (s.length <= k) return s;

  const chunks: string[] = [];
  for (let i = 0; i < s.length; i += k) {
    chunks.push(s.slice(i, i + k));
  }

  const concat: string = chunks.reduce(
    (acc, chunk) => `${acc}${sum(chunk)}`,
    "",
  );
  return digitSum(concat, k);
}
