import { Category as TCategory } from "../api/category/Category";

export const CATEGORY_TITLE_FIELD = "ownerId";

export const CategoryTitle = (record: TCategory): string => {
  return record.ownerId?.toString() || String(record.id);
};
