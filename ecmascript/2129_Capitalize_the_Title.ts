export function capitalizeTitle(title: string): string {
  return title.split(" ").map((w) =>
    w.length > 2
      ? w[0].toUpperCase() + w.slice(1).toLowerCase()
      : w.toLowerCase()
  ).join(" ");
}
