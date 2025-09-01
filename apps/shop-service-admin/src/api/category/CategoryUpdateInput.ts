import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CategoryUpdateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
