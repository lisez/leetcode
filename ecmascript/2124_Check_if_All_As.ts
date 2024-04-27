export function checkString(s: string): boolean {
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== "a" && s[i + 1] === "a") {
      return false;
    }
  }
  return true;
}

export function checkString_v2(s: string): boolean {
  return !s.includes("ba");
}
