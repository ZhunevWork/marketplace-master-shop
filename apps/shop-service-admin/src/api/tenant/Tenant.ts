import { Brand } from "../brand/Brand";
import { Category } from "../category/Category";
import { Product } from "../product/Product";

export type Tenant = {
  brands?: Array<Brand>;
  categories?: Array<Category>;
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
};
