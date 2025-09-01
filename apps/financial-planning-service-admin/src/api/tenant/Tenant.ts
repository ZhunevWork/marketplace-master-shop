import { PurchasePrice } from "../purchasePrice/PurchasePrice";
import { SalePrice } from "../salePrice/SalePrice";

export type Tenant = {
  createdAt: Date;
  id: string;
  purchasePrices?: Array<PurchasePrice>;
  salePrices?: Array<SalePrice>;
  updatedAt: Date;
};
