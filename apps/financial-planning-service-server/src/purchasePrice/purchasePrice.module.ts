import { Module } from "@nestjs/common";
import { PurchasePriceModuleBase } from "./base/purchasePrice.module.base";
import { PurchasePriceService } from "./purchasePrice.service";
import { PurchasePriceController } from "./purchasePrice.controller";
import { PurchasePriceResolver } from "./purchasePrice.resolver";

@Module({
  imports: [PurchasePriceModuleBase],
  controllers: [PurchasePriceController],
  providers: [PurchasePriceService, PurchasePriceResolver],
  exports: [PurchasePriceService],
})
export class PurchasePriceModule {}
