import { Module } from "@nestjs/common";
import { MarketplaceDiscountModuleBase } from "./base/marketplaceDiscount.module.base";
import { MarketplaceDiscountService } from "./marketplaceDiscount.service";
import { MarketplaceDiscountController } from "./marketplaceDiscount.controller";
import { MarketplaceDiscountResolver } from "./marketplaceDiscount.resolver";

@Module({
  imports: [MarketplaceDiscountModuleBase],
  controllers: [MarketplaceDiscountController],
  providers: [MarketplaceDiscountService, MarketplaceDiscountResolver],
  exports: [MarketplaceDiscountService],
})
export class MarketplaceDiscountModule {}
