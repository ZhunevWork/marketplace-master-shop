import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchasePriceService } from "./purchasePrice.service";
import { PurchasePriceControllerBase } from "./base/purchasePrice.controller.base";

@swagger.ApiTags("purchasePrices")
@common.Controller("purchasePrices")
export class PurchasePriceController extends PurchasePriceControllerBase {
  constructor(protected readonly service: PurchasePriceService) {
    super(service);
  }
}
