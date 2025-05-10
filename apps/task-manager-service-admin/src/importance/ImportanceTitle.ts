import { Importance as TImportance } from "../api/importance/Importance";

export const IMPORTANCE_TITLE_FIELD = "id";

export const ImportanceTitle = (record: TImportance): string => {
  return record.id?.toString() || String(record.id);
};
