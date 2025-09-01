import { Description as TDescription } from "../api/description/Description";

export const DESCRIPTION_TITLE_FIELD = "id";

export const DescriptionTitle = (record: TDescription): string => {
  return record.id?.toString() || String(record.id);
};
