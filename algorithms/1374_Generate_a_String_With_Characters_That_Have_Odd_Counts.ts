function isOdd(n: number): boolean {
  return n % 2 === 1;
}

export function generateTheString(n: number): string {
  return isOdd(n) ? "a".repeat(n) : "a".repeat(n - 1) + "b";
}
