import { Task } from "../task/Task";

export type Tenant = {
  createdAt: Date;
  id: string;
  tasks?: Array<Task>;
  updatedAt: Date;
};
