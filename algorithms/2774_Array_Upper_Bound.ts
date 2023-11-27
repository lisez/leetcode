declare global {
  interface Array<T> {
    upperBound(target: number): number;
  }
}

Array.prototype.upperBound_v1 = function (target): number {
  let idx = -1;
  for (let i = 0; i < this.length; i++) {
    if (this[i] > target) {
      break;
    }
    if (this[i] === target) {
      idx = i;
    }
  }
  return idx;
};

Array.prototype.upperBound_v2 = function (target): number {
  let left = 0;
  let right = this.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (this[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return --left >= 0 && this[left] === target ? left : -1;
};

// [3,4,5].upperBound(5); // 2
// [1,4,5].upperBound(2); // -1
// [3,4,6,6,6,6,7].upperBound(6) // 5
