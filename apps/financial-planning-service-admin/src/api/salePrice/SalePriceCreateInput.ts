import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalePriceCreateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
