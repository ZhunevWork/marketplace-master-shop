import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CategoryWhereInput = {
  id?: StringFilter;
  ownerId?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
};
