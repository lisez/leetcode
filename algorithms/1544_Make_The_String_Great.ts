function shouldRemove(a: string, b: string): boolean {
  return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) === 32;
}

export function makeGood(s: string): string {
  const stack: string[] = [];
  for (const c of s) {
    if (stack.length > 0 && shouldRemove(stack[stack.length - 1], c)) {
      stack.length -= 1;
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
}
