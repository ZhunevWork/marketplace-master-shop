import { Content as TContent } from "../api/content/Content";

export const CONTENT_TITLE_FIELD = "ownerId";

export const ContentTitle = (record: TContent): string => {
  return record.ownerId?.toString() || String(record.id);
};
