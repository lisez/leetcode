function goatize(word: string, index: number): string {
  switch (word[0].toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return word + "ma" + "a".repeat(index + 1);
    default:
      return word.slice(1) + word[0] + "ma" + "a".repeat(index + 1);
  }
}

export function toGoatLatin(sentence: string): string {
  return sentence.split(" ").map(goatize).join(" ");
}
