import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PurchasePriceCreateInput = {
  ownerId?: string | null;
  productId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
