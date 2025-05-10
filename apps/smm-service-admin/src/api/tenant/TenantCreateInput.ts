import { ContentCreateNestedManyWithoutTenantsInput } from "./ContentCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  contents?: ContentCreateNestedManyWithoutTenantsInput;
};
