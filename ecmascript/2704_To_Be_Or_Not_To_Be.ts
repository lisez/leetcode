type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

export function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (expected: any): boolean => {
      if (val !== expected) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: (expected: any): boolean => {
      if (val === expected) {
        throw new Error("Equal");
      }
      return true;
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
