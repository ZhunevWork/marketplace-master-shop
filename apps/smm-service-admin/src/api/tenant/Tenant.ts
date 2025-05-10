import { Content } from "../content/Content";

export type Tenant = {
  contents?: Array<Content>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
