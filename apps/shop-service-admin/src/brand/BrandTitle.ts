import { Brand as TBrand } from "../api/brand/Brand";

export const BRAND_TITLE_FIELD = "ownerId";

export const BrandTitle = (record: TBrand): string => {
  return record.ownerId?.toString() || String(record.id);
};
