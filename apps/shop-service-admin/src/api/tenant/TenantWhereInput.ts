import { BrandListRelationFilter } from "../brand/BrandListRelationFilter";
import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type TenantWhereInput = {
  brands?: BrandListRelationFilter;
  categories?: CategoryListRelationFilter;
  id?: StringFilter;
  products?: ProductListRelationFilter;
};
