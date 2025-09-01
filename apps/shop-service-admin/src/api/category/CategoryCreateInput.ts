import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CategoryCreateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
