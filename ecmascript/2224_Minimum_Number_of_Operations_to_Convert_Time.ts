function toMin(time: string): number {
  return +(time.substring(0, 2)) * 60 + +(time.substring(3, 5));
}

function diff(a: string, b: string): number {
  const t1 = toMin(a);
  const t2 = toMin(b);
  return t1 > t2 ? t1 - t2 : t2 - t1;
}

export function convertTime(current: string, correct: string): number {
  const steps = [60, 15, 5, 1];
  const max = diff(current, correct);
  let acc = 0;
  let count = 0;
  for (const step of steps) {
    if (acc >= max) break;
    const diff = max - acc;
    const times = Math.floor(diff / step);
    acc += times * step;
    count += times;
  }

  return count;
}
