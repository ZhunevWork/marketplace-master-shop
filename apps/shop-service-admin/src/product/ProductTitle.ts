import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "ownerId";

export const ProductTitle = (record: TProduct): string => {
  return record.ownerId?.toString() || String(record.id);
};
