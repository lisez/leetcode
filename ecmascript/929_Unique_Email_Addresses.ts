function extractEmail(s: string): string {
  const [local, domain] = s.split("@");
  const pureLocal = local.split("+", 1)[0].replace(/\./g, "");
  return `${pureLocal}@${domain}`;
}

export function numUniqueEmails(emails: string[]): number {
  const unique = emails.reduce(
    (set, e) => set.add(extractEmail(e)),
    new Set<string>(),
  );

  return unique.size;
}
