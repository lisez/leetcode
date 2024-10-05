type Fn = (...params: number[]) => number;

/**
 * @example
 * ```typescript
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 * 	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 * ```
 */
export function memoize(fn: Fn): Fn {
  const cache = new Map<string, number>();
  return function (...args: number[]) {
    const key = args.join(",");
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
