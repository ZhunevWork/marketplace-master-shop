import { SortOrder } from "../../util/SortOrder";

export type DealOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  productId?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
