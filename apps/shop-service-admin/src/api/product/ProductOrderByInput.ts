import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
