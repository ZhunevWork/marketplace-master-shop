import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  ownerId?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
};
