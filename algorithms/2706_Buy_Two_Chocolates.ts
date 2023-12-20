export function buyChoco(prices: number[], money: number): number {
  let price1 = Infinity;
  let price2 = Infinity;
  for (const price of prices) {
    if (price < price1) {
      price2 = price1;
      price1 = price;
    } else if (price < price2) {
      price2 = price;
    }
  }

  const sum = price1 + price2;
  return sum > money ? money : money - sum;
}
