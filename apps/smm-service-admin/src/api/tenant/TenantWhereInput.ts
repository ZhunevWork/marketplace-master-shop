import { ContentListRelationFilter } from "../content/ContentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TenantWhereInput = {
  contents?: ContentListRelationFilter;
  id?: StringFilter;
};
