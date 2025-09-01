import { DealCreateNestedManyWithoutTenantsInput } from "./DealCreateNestedManyWithoutTenantsInput";
import { LeadCreateNestedManyWithoutTenantsInput } from "./LeadCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  deals?: DealCreateNestedManyWithoutTenantsInput;
  leads?: LeadCreateNestedManyWithoutTenantsInput;
};
