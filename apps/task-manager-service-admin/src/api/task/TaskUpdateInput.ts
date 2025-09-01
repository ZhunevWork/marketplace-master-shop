import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TaskUpdateInput = {
  ownerId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
