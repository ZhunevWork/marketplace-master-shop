import * as graphql from "@nestjs/graphql";
import { MarketplaceDiscountResolverBase } from "./base/marketplaceDiscount.resolver.base";
import { MarketplaceDiscount } from "./base/MarketplaceDiscount";
import { MarketplaceDiscountService } from "./marketplaceDiscount.service";

@graphql.Resolver(() => MarketplaceDiscount)
export class MarketplaceDiscountResolver extends MarketplaceDiscountResolverBase {
  constructor(protected readonly service: MarketplaceDiscountService) {
    super(service);
  }
}
