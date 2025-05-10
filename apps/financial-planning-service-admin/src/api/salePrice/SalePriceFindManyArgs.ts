import { SalePriceWhereInput } from "./SalePriceWhereInput";
import { SalePriceOrderByInput } from "./SalePriceOrderByInput";

export type SalePriceFindManyArgs = {
  where?: SalePriceWhereInput;
  orderBy?: Array<SalePriceOrderByInput>;
  skip?: number;
  take?: number;
};
