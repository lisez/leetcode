function num2char(num: number): string {
  return String.fromCharCode(num + 96);
}

export function freqAlphabets_v1(s: string): string {
  const stack: string[] = [];
  for (const c of s) {
    if (c === "#") {
      const last = stack.pop()!;
      const secondLast = stack.pop()!;
      stack.push(secondLast + last);
    } else {
      stack.push(c);
    }
  }
  return stack.map((c) => num2char(+c)).join("");
}

export function freqAlphabets_v2(s: string): string {
  let result = "";
  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (s[i] === "#") {
      result = num2char(+s.slice(i - 2, i)) + result;
      i -= 2;
    } else {
      result = num2char(+s[i]) + result;
    }
  }
  return result;
}
