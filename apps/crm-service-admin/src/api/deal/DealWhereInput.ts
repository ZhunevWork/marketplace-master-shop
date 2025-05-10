import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DealWhereInput = {
  id?: StringFilter;
  productId?: StringNullableFilter;
};
