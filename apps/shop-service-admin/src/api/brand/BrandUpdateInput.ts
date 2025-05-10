import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BrandUpdateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
