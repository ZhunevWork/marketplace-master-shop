import { Tenant } from "../tenant/Tenant";

export type Content = {
  createdAt: Date;
  id: string;
  ownerId: string | null;
  productId: string | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
