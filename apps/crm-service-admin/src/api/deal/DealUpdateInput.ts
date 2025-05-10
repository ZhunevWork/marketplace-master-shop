import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type DealUpdateInput = {
  ownerId?: string | null;
  productId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
