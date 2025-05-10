import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PurchasePriceUpdateInput = {
  ownerId?: string | null;
  productId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
