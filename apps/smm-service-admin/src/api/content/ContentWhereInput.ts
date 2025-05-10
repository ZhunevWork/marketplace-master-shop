import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ContentWhereInput = {
  id?: StringFilter;
  ownerId?: StringNullableFilter;
  productId?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
};
