export function totalPrice(price: number, percent: number): number {
  return round((percent / 100) * price, 2);
}

export function round(value: number, decimals: number): number {
  return Number(Math.round(Number(value + "e" + decimals)) + "e-" + decimals);
}
