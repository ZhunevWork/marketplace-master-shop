import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductCreateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
