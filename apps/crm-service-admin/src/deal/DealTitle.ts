import { Deal as TDeal } from "../api/deal/Deal";

export const DEAL_TITLE_FIELD = "ownerId";

export const DealTitle = (record: TDeal): string => {
  return record.ownerId?.toString() || String(record.id);
};
