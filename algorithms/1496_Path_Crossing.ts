export function isPathCrossing_v2(path: string): boolean {
  const map: Record<string, boolean> = { "0,0": true };
  let x = 0;
  let y = 0;
  for (const direction of path) {
    switch (direction) {
      case "N":
        y += 1;
        break;
      case "S":
        y -= 1;
        break;
      case "E":
        x += 1;
        break;
      case "W":
        x -= 1;
        break;
    }
    const position = `${x},${y}`;
    if (map[position]) {
      return true;
    }
    map[position] = true;
  }
  return false;
}

export function isPathCrossing(path: string): boolean {
  const visited = new Set<string>();
  let x = 0;
  let y = 0;
  visited.add(`${x},${y}`);
  for (const direction of path) {
    switch (direction) {
      case "N":
        y += 1;
        break;
      case "S":
        y -= 1;
        break;
      case "E":
        x += 1;
        break;
      case "W":
        x -= 1;
        break;
    }
    const position = `${x},${y}`;
    if (visited.has(position)) {
      return true;
    }
    visited.add(position);
  }
  return false;
}
