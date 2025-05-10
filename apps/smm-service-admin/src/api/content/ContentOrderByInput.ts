import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
