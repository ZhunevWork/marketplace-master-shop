import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarketplaceDiscountService } from "./marketplaceDiscount.service";
import { MarketplaceDiscountControllerBase } from "./base/marketplaceDiscount.controller.base";

@swagger.ApiTags("marketplaceDiscounts")
@common.Controller("marketplaceDiscounts")
export class MarketplaceDiscountController extends MarketplaceDiscountControllerBase {
  constructor(protected readonly service: MarketplaceDiscountService) {
    super(service);
  }
}
