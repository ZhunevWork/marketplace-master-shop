import { Content as TContent } from "../api/content/Content";

export const CONTENT_TITLE_FIELD = "productId";

export const ContentTitle = (record: TContent): string => {
  return record.productId?.toString() || String(record.id);
};
