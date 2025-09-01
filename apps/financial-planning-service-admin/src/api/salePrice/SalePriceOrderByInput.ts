import { SortOrder } from "../../util/SortOrder";

export type SalePriceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
