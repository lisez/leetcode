type Fn = (accum: number, curr: number) => number;

export function reduce(nums: number[], fn: Fn, init: number): number {
  let acc = init;
  for (const num of nums) {
    acc = fn(acc, num);
  }
  return acc;
}
