import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  productId?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
