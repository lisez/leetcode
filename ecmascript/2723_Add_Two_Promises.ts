type P = Promise<number>;

export async function addTwoPromises(promise1: P, promise2: P): P {
  const [v1, v2] = await Promise.all([promise1, promise2]);
  return v1 + v2;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
