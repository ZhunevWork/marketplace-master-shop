import { SalePrice as TSalePrice } from "../api/salePrice/SalePrice";

export const SALEPRICE_TITLE_FIELD = "id";

export const SalePriceTitle = (record: TSalePrice): string => {
  return record.id?.toString() || String(record.id);
};
