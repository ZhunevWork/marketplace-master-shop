import { Module } from "@nestjs/common";
import { SalePriceModuleBase } from "./base/salePrice.module.base";
import { SalePriceService } from "./salePrice.service";
import { SalePriceController } from "./salePrice.controller";
import { SalePriceResolver } from "./salePrice.resolver";

@Module({
  imports: [SalePriceModuleBase],
  controllers: [SalePriceController],
  providers: [SalePriceService, SalePriceResolver],
  exports: [SalePriceService],
})
export class SalePriceModule {}
