import { PurchasePriceWhereInput } from "./PurchasePriceWhereInput";
import { PurchasePriceOrderByInput } from "./PurchasePriceOrderByInput";

export type PurchasePriceFindManyArgs = {
  where?: PurchasePriceWhereInput;
  orderBy?: Array<PurchasePriceOrderByInput>;
  skip?: number;
  take?: number;
};
