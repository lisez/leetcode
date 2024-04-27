type Fn = () => Promise<any>;

// FIXME: leetcode always timeout

function delay(f: Fn, ms: number): any {
  return () => new Promise((resolve) => setTimeout(() => resolve(f()), ms));
}

export function delayAll(functions: Fn[], ms: number): Fn[] {
  return functions.map((fn) => delay(fn, ms));
}
