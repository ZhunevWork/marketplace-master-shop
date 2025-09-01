import { ImportanceWhereInput } from "./ImportanceWhereInput";
import { ImportanceOrderByInput } from "./ImportanceOrderByInput";

export type ImportanceFindManyArgs = {
  where?: ImportanceWhereInput;
  orderBy?: Array<ImportanceOrderByInput>;
  skip?: number;
  take?: number;
};
