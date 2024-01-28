export function splitWordsBySeparator(
  words: string[],
  separator: string,
): string[] {
  const result: string[] = [];
  for (const w of words) {
    const parts = w.split(separator);
    for (const p of parts) {
      if (p) result.push(p);
    }
  }
  return result;
}

export function splitWordsBySeparator_2(
  words: string[],
  separator: string,
): string[] {
  return words.reduce((acc, cur) => {
    const parts = cur.split(separator);
    for (const p of parts) {
      if (p) acc.push(p);
    }
    return acc;
  }, [] as string[]);
}

export function splitWordsBySeparator_3(
  words: string[],
  separator: string,
): string[] {
  return words.join(separator).split(separator).filter(Boolean);
}
