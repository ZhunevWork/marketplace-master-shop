import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContentWhereInput = {
  id?: StringFilter;
  productId?: StringNullableFilter;
};
