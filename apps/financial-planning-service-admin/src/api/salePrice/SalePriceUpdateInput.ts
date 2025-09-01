import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalePriceUpdateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
