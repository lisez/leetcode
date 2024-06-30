function latestHour(hh: string): string {
  switch (true) {
    case hh === "??":
      return "11";
    case hh[0] === "?": {
      if (+hh[1] > 1) return "0" + hh[1];
      return "1" + hh[1];
    }
    case hh[1] === "?": {
      if (hh[0] === "0") return "09";
      return "11";
    }
    default:
      return hh;
  }
}

function latestMinute(mm: string): string {
  switch (true) {
    case mm === "??":
      return "59";
    case mm[0] === "?": {
      return "5" + mm[1];
    }
    case mm[1] === "?": {
      return mm[0] + "9";
    }
    default:
      return mm;
  }
}

export function findLatestTime(s: string): string {
  const [hh, mm] = s.split(":");
  return `${latestHour(hh)}:${latestMinute(mm)}`;
}
