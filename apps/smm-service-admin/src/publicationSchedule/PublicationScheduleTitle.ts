import { PublicationSchedule as TPublicationSchedule } from "../api/publicationSchedule/PublicationSchedule";

export const PUBLICATIONSCHEDULE_TITLE_FIELD = "id";

export const PublicationScheduleTitle = (
  record: TPublicationSchedule
): string => {
  return record.id?.toString() || String(record.id);
};
