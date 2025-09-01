import { MarketplaceDiscount as TMarketplaceDiscount } from "../api/marketplaceDiscount/MarketplaceDiscount";

export const MARKETPLACEDISCOUNT_TITLE_FIELD = "id";

export const MarketplaceDiscountTitle = (
  record: TMarketplaceDiscount
): string => {
  return record.id?.toString() || String(record.id);
};
