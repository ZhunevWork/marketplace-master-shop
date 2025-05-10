import { PurchasePrice as TPurchasePrice } from "../api/purchasePrice/PurchasePrice";

export const PURCHASEPRICE_TITLE_FIELD = "productId";

export const PurchasePriceTitle = (record: TPurchasePrice): string => {
  return record.productId?.toString() || String(record.id);
};
