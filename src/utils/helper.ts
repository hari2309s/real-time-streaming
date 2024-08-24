import { countryCodes } from "../country-codes";
import { Instrument } from "../types";

export const isISINValid = (isin: string) => {
  return (
    isin.length === 12 &&
    countryCodes.includes(isin.substring(0, 2).toUpperCase())
  );
};

export const isISINUnique = (isin: string, stocks: Array<Instrument>) => {
  return !JSON.stringify(stocks).includes(isin);
};
