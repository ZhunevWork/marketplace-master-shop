import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
