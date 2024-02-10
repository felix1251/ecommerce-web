export function discountedPrice(price: number, percent: number): string {
  return toMoneyFormat(priceCalc(price, percent));
}

export function priceCalc(price: number, percent: number) {
  return price - (percent / 100) * price;
}

export function roundPrice(value: number): string {
  return toMoneyFormat(value);
}

export function toMoneyFormat(value: number, currency = "USD"): string {
  const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  return money.format(value);
}
