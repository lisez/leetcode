export function checkZeroOnes(s: string): boolean {
  const matches = [...new Set(s.match(/1+|0+/g) || [])].sort((a, b) =>
    b.length - a.length || +b - +a
  );
  return matches?.[0]?.[0] === "1" &&
    (!matches[1] || matches[0]?.length > matches[1]?.length);
}
