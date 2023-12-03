async function readFile(): Promise<string> {
  const data = await Deno.readFile("./day3.txt");
  const decoder = new TextDecoder("utf-8");
  const text = decoder.decode(data);
  return text.trim();
}

function symbolized(c: string): number {
  switch (true) {
    case /\d/.test(c):
      return 1;
    case c === ".":
      return 0;
    default:
      return 1;
  }
}

function makeFakeLine(len: number): string {
  return "0".repeat(len);
}

function* twoStepMove(line: string) {
  for (let i = 0; i < line.length - 1; i += 1) {
    const one = line[i];
    const two = line[i + 1];
    yield [{ index: i, value: +one }, { index: i + 1, value: +two }];
  }
}

async function main() {
  const text = await readFile();
  const map = text.split("\n").map((line) =>
    line.split("").map(symbolized).join("")
  );

  for (let line = 0; line < map.length; line++) {
    // const next = map[line + 1] || makeFakeLine(map[line].length);
    for (const moves of twoStepMove(map[line])) {
      console.log(moves);
    }
  }
}

main();
