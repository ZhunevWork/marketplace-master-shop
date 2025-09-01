import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BrandWhereInput = {
  id?: StringFilter;
  ownerId?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
};
