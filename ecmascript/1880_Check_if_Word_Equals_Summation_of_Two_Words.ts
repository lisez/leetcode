function getNumber(word: string): string {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    result += word.charCodeAt(i) - 97;
  }
  return result;
}

function lastChar(word: string | number): string {
  if (typeof word === "number") return lastChar(word.toString());
  return word[word.length - 1];
}

export function isSumEqual(
  firstWord: string,
  secondWord: string,
  targetWord: string,
): boolean {
  const a = getNumber(firstWord);
  const b = getNumber(secondWord);
  const c = getNumber(targetWord);

  if (lastChar(+lastChar(a) + +lastChar(b)) !== lastChar(c)) {
    return false;
  }

  return +a + +b === +c;
}
