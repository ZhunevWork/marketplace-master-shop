import { Urgency as TUrgency } from "../api/urgency/Urgency";

export const URGENCY_TITLE_FIELD = "id";

export const UrgencyTitle = (record: TUrgency): string => {
  return record.id?.toString() || String(record.id);
};
