function countBank(bank: string): number {
  let count = 0;
  for (let i = 0; i < bank.length; i += 1) {
    if (bank[i] === "1") {
      count++;
    }
  }
  return count;
}

export function numberOfBeams(bank: string[]): number {
  if (bank.length <= 1) return 0;

  let count = 0;
  let left = 0;
  let right = 1;
  while (right < bank.length) {
    const leftCount = countBank(bank[left]);
    const rightCount = countBank(bank[right]);

    switch (true) {
      case leftCount === 0 && rightCount > 0: {
        left = right;
        right += 1;
        break;
      }

      case rightCount === 0 && leftCount > 0: {
        right += 1;
        break;
      }

      case leftCount > 0 && rightCount > 0: {
        count += leftCount * rightCount;
        left = right;
        right += 1;
        break;
      }

      case leftCount === 0 && rightCount === 0:
      default: {
        left += 1;
        right += 1;
        break;
      }
    }
  }

  return count;
}
