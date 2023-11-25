function uniqueMorseRepresentations(words: string[]): number {
  const codes = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const map: Record<string, boolean> = {};
  for (const word of words) {
    const form = word
      .split("")
      .map((e) => codes[e.charCodeAt(0) - 97])
      .join("");
    map[form] ??= true;
  }
  return Object.keys(map).length;
}
