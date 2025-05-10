import { SalePrice as TSalePrice } from "../api/salePrice/SalePrice";

export const SALEPRICE_TITLE_FIELD = "ownerId";

export const SalePriceTitle = (record: TSalePrice): string => {
  return record.ownerId?.toString() || String(record.id);
};
