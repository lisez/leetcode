export function squareIsWhite_v1(coordinates: string): boolean {
  const [x, y] = coordinates.split("");
  return (x.charCodeAt(0) - 96 + +y) % 2 === 0;
}

export function squareIsWhite_v2(coordinates: string): boolean {
  return coordinates.charCodeAt(0) % 2 !== +coordinates[1] % 2;
}
