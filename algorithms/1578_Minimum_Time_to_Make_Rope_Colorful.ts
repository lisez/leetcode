function sum(arr: number[]): number {
  arr.sort((a, b) => a - b);
  arr.pop();
  return arr.reduce((acc, cur) => acc + cur, 0);
}

export function minCost(colors: string, neededTime: number[]): number {
  let max = 0;
  let color = colors[0];
  const times: number[] = [];
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i] !== color) {
      if (times.length > 1) {
        max += sum(times);
      }
      times.length = 0;
    }

    color = colors[i];
    times.push(neededTime[i]);
  }

  if (times.length > 1) {
    max += sum(times);
  }

  return max;
}

export function minCost_v2(colors: string, neededTime: number[]): number {
  if (colors.length === 1) return 0;

  let color = colors[0];
  let sum = 0;
  let maxVal = 0;

  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i] !== color) {
      sum -= maxVal;
      maxVal = 0;
    }
    color = colors[i];
    sum += neededTime[i];
    maxVal = Math.max(maxVal, neededTime[i]);
  }
  return sum - maxVal;
}
