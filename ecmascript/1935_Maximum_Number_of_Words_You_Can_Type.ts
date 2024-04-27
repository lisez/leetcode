export function canBeTypedWords(text: string, brokenLetters: string): number {
  let count = 0;

  let broken = false;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === " ") {
      count += +!broken;
      broken = false;
    } else if (broken) {
      continue;
    } else if (brokenLetters.includes(text[i])) {
      broken = true;
    }
  }
  return count + +!broken;
}
