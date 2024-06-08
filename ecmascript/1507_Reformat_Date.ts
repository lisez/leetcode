function month2Number(month: string): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (months.indexOf(month) + 1).toString().padStart(2, "0");
}

function day2Number(day: string): string {
  return day.slice(0, -2).padStart(2, "0");
}

export function reformatDate(date: string): string {
  const [day, month, year] = date.split(" ");
  return `${year}-${month2Number(month)}-${day2Number(day)}`;
}
