function string2map(word: string) {
  return word.split("").reduce((map, char) => {
    map[char] = true;
    return map;
  }, {} as Record<string, boolean>);
}

export function numOfStrings(patterns: string[], word: string): number {
  const map = string2map(word);
  let count = 0;
  for (let i = 0; i < patterns.length; i += 1) {
    if (!map[patterns[i][0]]) continue;
    if (~word.indexOf(patterns[i])) {
      count += 1;
    }
  }
  return count;
}
