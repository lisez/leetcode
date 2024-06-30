export function longestNiceSubstring(s: string): string {
  if (s.length < 2) return "";
  const chars = "abcdefghijklmnopqrstuvwxyz".split("").map((e) => `${e}+`).join(
    "|",
  );
  const m = Array.from(
    new Set(s.match(new RegExp(`(?:${chars})+`, "ig")) || []),
  ).sort((a, b) => b.length - a.length);
  return m[0]?.length > 1 ? m[0] : "";
}
