import { Tenant } from "../tenant/Tenant";

export type PurchasePrice = {
  createdAt: Date;
  id: string;
  ownerId: string | null;
  productId: string | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
