export function furthestDistanceFromOrigin(moves: string): number {
  const map = moves.split("").reduce(
    (acc, m) => {
      acc[m] ??= 0;
      acc[m] += 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  switch (true) {
    case (!map["L"] && !map["R"]):
    default:
      return map["_"];

    case (!map["L"]):
      return (map["R"] || 0) + (map["_"] || 0);

    case (!map["R"]):
      return (map["L"] || 0) + (map["_"] || 0);

    case (!map["_"]):
      return Math.abs(map["L"] - map["R"]);

    case (map["L"] > map["R"]):
      return map["_"] + (map["L"] - map["R"]);

    case (map["R"] > map["L"]):
      return map["_"] + (map["R"] - map["L"]);
  }
}
