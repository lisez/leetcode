export function createInfiniteObject(): Record<string, () => string> {
  return new Proxy(
    {},
    {
      get: (_, prop) => {
        return () => prop.toString();
      },
    },
  );
}

/**
 * const obj = createInfiniteObject();
 * obj['abc123'](); // "abc123"
 */
