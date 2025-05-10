import { TaskCreateNestedManyWithoutTenantsInput } from "./TaskCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  tasks?: TaskCreateNestedManyWithoutTenantsInput;
};
