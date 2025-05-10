import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "ownerId";

export const LeadTitle = (record: TLead): string => {
  return record.ownerId?.toString() || String(record.id);
};
