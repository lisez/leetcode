export function findOcurrences(
  text: string,
  first: string,
  second: string,
): string[] {
  const words = text.split(" ");
  const result = [];
  for (let i = 0; i < words.length - 2; i += 1) {
    if (words[i] === first && words[i + 1] === second) {
      result.push(words[i + 2]);
    }
  }
  return result;
}
