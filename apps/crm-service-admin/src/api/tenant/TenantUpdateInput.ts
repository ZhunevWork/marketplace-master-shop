import { DealUpdateManyWithoutTenantsInput } from "./DealUpdateManyWithoutTenantsInput";
import { LeadUpdateManyWithoutTenantsInput } from "./LeadUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  deals?: DealUpdateManyWithoutTenantsInput;
  leads?: LeadUpdateManyWithoutTenantsInput;
};
