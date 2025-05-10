import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ContentUpdateInput = {
  ownerId?: string | null;
  productId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
