type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

export function invertObject(obj: Obj): Record<string, JSONValue> {
  const result: Record<string, JSONValue> = {};
  for (const key in obj) {
    const value = obj[key];
    if (Array.isArray(result[value])) {
      (result[value] as JSONValue[]).push(key as any);
    } else if (result[value]) {
      result[value] = [result[value], key];
    } else {
      result[value] = key;
    }
  }
  return result;
}
