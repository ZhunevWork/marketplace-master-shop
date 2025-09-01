import * as graphql from "@nestjs/graphql";
import { PurchasePriceResolverBase } from "./base/purchasePrice.resolver.base";
import { PurchasePrice } from "./base/PurchasePrice";
import { PurchasePriceService } from "./purchasePrice.service";

@graphql.Resolver(() => PurchasePrice)
export class PurchasePriceResolver extends PurchasePriceResolverBase {
  constructor(protected readonly service: PurchasePriceService) {
    super(service);
  }
}
