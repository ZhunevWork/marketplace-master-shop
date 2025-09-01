import { BrandUpdateManyWithoutTenantsInput } from "./BrandUpdateManyWithoutTenantsInput";
import { CategoryUpdateManyWithoutTenantsInput } from "./CategoryUpdateManyWithoutTenantsInput";
import { ProductUpdateManyWithoutTenantsInput } from "./ProductUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  brands?: BrandUpdateManyWithoutTenantsInput;
  categories?: CategoryUpdateManyWithoutTenantsInput;
  products?: ProductUpdateManyWithoutTenantsInput;
};
