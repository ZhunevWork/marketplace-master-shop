import { Tenant } from "../tenant/Tenant";

export type Product = {
  createdAt: Date;
  id: string;
  ownerId: string | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
