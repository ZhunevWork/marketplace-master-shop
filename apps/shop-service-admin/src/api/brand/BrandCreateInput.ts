import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BrandCreateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
