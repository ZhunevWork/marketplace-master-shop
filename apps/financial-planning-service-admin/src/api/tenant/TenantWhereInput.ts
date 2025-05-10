import { StringFilter } from "../../util/StringFilter";
import { PurchasePriceListRelationFilter } from "../purchasePrice/PurchasePriceListRelationFilter";
import { SalePriceListRelationFilter } from "../salePrice/SalePriceListRelationFilter";

export type TenantWhereInput = {
  id?: StringFilter;
  purchasePrices?: PurchasePriceListRelationFilter;
  salePrices?: SalePriceListRelationFilter;
};
