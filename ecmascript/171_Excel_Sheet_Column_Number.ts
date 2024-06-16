export function titleToNumber(columnTitle: string): number {
  return columnTitle.split("").reduce(
    (acc, char, index) => acc * 26 + (char.charCodeAt(0) - 64),
    0,
  );
}
