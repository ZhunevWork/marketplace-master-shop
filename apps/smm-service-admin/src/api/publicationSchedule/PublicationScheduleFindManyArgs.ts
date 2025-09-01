import { PublicationScheduleWhereInput } from "./PublicationScheduleWhereInput";
import { PublicationScheduleOrderByInput } from "./PublicationScheduleOrderByInput";

export type PublicationScheduleFindManyArgs = {
  where?: PublicationScheduleWhereInput;
  orderBy?: Array<PublicationScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
