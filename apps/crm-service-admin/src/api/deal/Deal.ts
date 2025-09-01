import { Tenant } from "../tenant/Tenant";

export type Deal = {
  createdAt: Date;
  id: string;
  ownerId: string | null;
  productId: string | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
