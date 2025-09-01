import { DealListRelationFilter } from "../deal/DealListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeadListRelationFilter } from "../lead/LeadListRelationFilter";

export type TenantWhereInput = {
  deals?: DealListRelationFilter;
  id?: StringFilter;
  leads?: LeadListRelationFilter;
};
