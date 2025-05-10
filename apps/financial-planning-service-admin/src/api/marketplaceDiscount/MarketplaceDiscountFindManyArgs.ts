import { MarketplaceDiscountWhereInput } from "./MarketplaceDiscountWhereInput";
import { MarketplaceDiscountOrderByInput } from "./MarketplaceDiscountOrderByInput";

export type MarketplaceDiscountFindManyArgs = {
  where?: MarketplaceDiscountWhereInput;
  orderBy?: Array<MarketplaceDiscountOrderByInput>;
  skip?: number;
  take?: number;
};
