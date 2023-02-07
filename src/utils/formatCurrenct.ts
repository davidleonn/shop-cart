const CURRENCY_FORMATTER = new Intl.NumberFormat("es-sp", {
  currency: "EUR",
  style: "currency",
});

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};
