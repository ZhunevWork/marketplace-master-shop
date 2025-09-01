import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type LeadCreateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
