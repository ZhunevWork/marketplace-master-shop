import * as graphql from "@nestjs/graphql";
import { SalePriceResolverBase } from "./base/salePrice.resolver.base";
import { SalePrice } from "./base/SalePrice";
import { SalePriceService } from "./salePrice.service";

@graphql.Resolver(() => SalePrice)
export class SalePriceResolver extends SalePriceResolverBase {
  constructor(protected readonly service: SalePriceService) {
    super(service);
  }
}
