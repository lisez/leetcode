export function twoSumLessThanK(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let max = -1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum < k) {
      max = Math.max(max, sum);
      left += 1;
    } else {
      right -= 1;
    }
  }
  return max;
}
