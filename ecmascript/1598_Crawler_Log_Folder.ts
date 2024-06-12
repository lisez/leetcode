export function minOperations(logs: string[]): number {
  const paths: string[] = [];
  for (const log of logs) {
    switch (log) {
      case "../":
        paths.pop();
        break;
      case "./":
        break;
      default:
        paths.push(log);
        break;
    }
  }
  return paths.length;
}
