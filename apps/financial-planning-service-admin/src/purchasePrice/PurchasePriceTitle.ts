import { PurchasePrice as TPurchasePrice } from "../api/purchasePrice/PurchasePrice";

export const PURCHASEPRICE_TITLE_FIELD = "ownerId";

export const PurchasePriceTitle = (record: TPurchasePrice): string => {
  return record.ownerId?.toString() || String(record.id);
};
