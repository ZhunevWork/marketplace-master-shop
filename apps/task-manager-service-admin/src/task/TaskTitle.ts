import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "ownerId";

export const TaskTitle = (record: TTask): string => {
  return record.ownerId?.toString() || String(record.id);
};
