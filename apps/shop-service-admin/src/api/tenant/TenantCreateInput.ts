import { BrandCreateNestedManyWithoutTenantsInput } from "./BrandCreateNestedManyWithoutTenantsInput";
import { CategoryCreateNestedManyWithoutTenantsInput } from "./CategoryCreateNestedManyWithoutTenantsInput";
import { ProductCreateNestedManyWithoutTenantsInput } from "./ProductCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  brands?: BrandCreateNestedManyWithoutTenantsInput;
  categories?: CategoryCreateNestedManyWithoutTenantsInput;
  products?: ProductCreateNestedManyWithoutTenantsInput;
};
