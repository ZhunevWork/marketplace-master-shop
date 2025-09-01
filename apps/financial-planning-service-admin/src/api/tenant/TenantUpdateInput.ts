import { PurchasePriceUpdateManyWithoutTenantsInput } from "./PurchasePriceUpdateManyWithoutTenantsInput";
import { SalePriceUpdateManyWithoutTenantsInput } from "./SalePriceUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  purchasePrices?: PurchasePriceUpdateManyWithoutTenantsInput;
  salePrices?: SalePriceUpdateManyWithoutTenantsInput;
};
