import { Deal as TDeal } from "../api/deal/Deal";

export const DEAL_TITLE_FIELD = "productId";

export const DealTitle = (record: TDeal): string => {
  return record.productId?.toString() || String(record.id);
};
