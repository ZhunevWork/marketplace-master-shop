import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TaskCreateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
