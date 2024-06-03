export function numberOfLines(widths: number[], s: string): number[] {
  return s.split("").reduce(([lines, last], char) => {
    const width = widths[char.charCodeAt(0) - "a".charCodeAt(0)];
    return last + width > 100 ? [lines + 1, width] : [lines, last + width];
  }, [1, 0]);
}
