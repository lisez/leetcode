declare global {
  interface Date {
    nextDay(): string;
  }
}

Date.prototype.nextDay = function (): string {
  const oneDayMs = 86400000;
  const nextDate = new Date(+this + oneDayMs);
  return `${nextDate.getFullYear()}-${(nextDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${nextDate.getDate().toString().padStart(2, "0")}`;
};

/**
 * const date = new Date("2014-06-20");
 * date.nextDay(); // "2014-06-21"
 */
