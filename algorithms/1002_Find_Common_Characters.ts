export function commonChars(words: string[]): string[] {
  const std = words[0];
  let result = [...std];

  for (const w of words) {
    const temp: string[] = [];
    for (const c of w) {
      const idx = result.indexOf(c);
      if (~idx) {
        temp.push(c);
        result.splice(idx, 1);
      }
    }
    result = temp;

    if (!result.length) return [];
  }

  return result;
}
