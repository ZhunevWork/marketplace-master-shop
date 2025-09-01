import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PurchasePriceWhereInput = {
  id?: StringFilter;
  ownerId?: StringNullableFilter;
  productId?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
};
