import { Tenant } from "../tenant/Tenant";

export type Category = {
  createdAt: Date;
  id: string;
  ownerId: string | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
