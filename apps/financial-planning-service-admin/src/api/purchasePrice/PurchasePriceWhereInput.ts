import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PurchasePriceWhereInput = {
  id?: StringFilter;
  productId?: StringNullableFilter;
};
