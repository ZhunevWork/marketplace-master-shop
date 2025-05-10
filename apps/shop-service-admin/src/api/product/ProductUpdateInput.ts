import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductUpdateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
