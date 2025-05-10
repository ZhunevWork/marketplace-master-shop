import { DescriptionWhereInput } from "./DescriptionWhereInput";
import { DescriptionOrderByInput } from "./DescriptionOrderByInput";

export type DescriptionFindManyArgs = {
  where?: DescriptionWhereInput;
  orderBy?: Array<DescriptionOrderByInput>;
  skip?: number;
  take?: number;
};
