import { SortOrder } from "../../util/SortOrder";

export type DealOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
