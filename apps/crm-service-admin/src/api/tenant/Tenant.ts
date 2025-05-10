import { Deal } from "../deal/Deal";
import { Lead } from "../lead/Lead";

export type Tenant = {
  createdAt: Date;
  deals?: Array<Deal>;
  id: string;
  leads?: Array<Lead>;
  updatedAt: Date;
};
