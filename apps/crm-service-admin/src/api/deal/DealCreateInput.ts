import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type DealCreateInput = {
  ownerId?: string | null;
  productId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
