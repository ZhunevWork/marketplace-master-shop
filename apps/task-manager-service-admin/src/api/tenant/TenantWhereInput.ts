import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type TenantWhereInput = {
  id?: StringFilter;
  tasks?: TaskListRelationFilter;
};
