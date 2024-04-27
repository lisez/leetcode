export function calculateTime(keyboard: string, word: string): number {
  let time = 0;
  let prev = 0;
  for (let i = 0; i < word.length; i++) {
    const index = keyboard.indexOf(word[i]);
    time += Math.abs(index - prev);
    prev = index;
  }
  return time;
}
