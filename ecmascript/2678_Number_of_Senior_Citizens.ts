function decodeAge(s: string): number {
  return +s.substring(11, 13);
}

export function countSeniors(details: string[]): number {
  return details.filter((d) => decodeAge(d) > 60).length;
}
