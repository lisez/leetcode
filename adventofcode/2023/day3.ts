async function readFile(): Promise<string> {
  const data = await Deno.readFile("./day3.txt");
  const decoder = new TextDecoder("utf-8");
  const text = decoder.decode(data);
  return text.trim();
}

function symbolized(c: string): number {
  switch (true) {
    case /\d/.test(c):
      return 2;
    case c === ".":
      return 0;
    default:
      return 1;
  }
}

function* iteratePairs(length: number) {
  for (let i = 0; i < length - 1; i += 1) {
    yield [i, i + 1] as [number, number];
  }
}

function validator(nums: number[]): boolean {
  return nums.includes(2) && nums.some((e) => e === 1);
}

function findAllNumbers(line: string) {
  const matches = line.matchAll(/\d+/g);
  return [...matches].map((m) => (
    {
      num: +m[0],
      start: m.index!,
      end: m.index! + m[0].length - 1,
    }
  ));
}

async function main() {
  const text = await readFile();
  const lines = text.split("\n");
  const map: string[] = lines.map((line) =>
    line.split("").map(symbolized).join("")
  );

  const records: Map<number, Set<number>> = new Map();
  for (const [line1, line2] of iteratePairs(map.length)) {
    const line = map[line1];
    const nextLine = map[line2];

    for (const [char1, char2] of iteratePairs(line.length)) {
      const chars1 = [+line[char1], +line[char2]];
      const chars2 = [+nextLine[char1], +nextLine[char2]];
      const result = validator([...chars1, ...chars2]);

      if (result) {
        const val1 = records.get(line1) ?? new Set();
        if (chars1[0] === 2) val1.add(char1);
        if (chars1[1] === 2) val1.add(char2);
        records.set(line1, val1);

        const val2 = records.get(line2) ?? new Set();
        if (chars2[0] === 2) val2.add(char1);
        if (chars2[1] === 2) val2.add(char2);
        records.set(line2, val2);
      }
    }
  }

  let result = 0;
  for (const [key, val] of records.entries()) {
    const line = lines[key];
    const numbers = findAllNumbers(line);

    const matches = numbers.filter((n) => {
      const sorted = [...val].sort((a, b) => a - b);

      for (const i of sorted) {
        if (i >= n.start && i <= n.end) return true;
      }
      return false;
    });

    const sum = matches.reduce((acc, curr) => acc + curr.num, 0);
    result += sum;
  }

  console.log(result);
}

main();
