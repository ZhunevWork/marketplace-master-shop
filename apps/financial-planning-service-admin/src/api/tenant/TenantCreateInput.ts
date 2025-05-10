import { PurchasePriceCreateNestedManyWithoutTenantsInput } from "./PurchasePriceCreateNestedManyWithoutTenantsInput";
import { SalePriceCreateNestedManyWithoutTenantsInput } from "./SalePriceCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  purchasePrices?: PurchasePriceCreateNestedManyWithoutTenantsInput;
  salePrices?: SalePriceCreateNestedManyWithoutTenantsInput;
};
