import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ContentCreateInput = {
  ownerId?: string | null;
  productId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
