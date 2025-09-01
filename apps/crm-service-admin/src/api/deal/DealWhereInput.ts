import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type DealWhereInput = {
  id?: StringFilter;
  ownerId?: StringNullableFilter;
  productId?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
};
