import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type LeadUpdateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
