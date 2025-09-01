import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalePriceService } from "./salePrice.service";
import { SalePriceControllerBase } from "./base/salePrice.controller.base";

@swagger.ApiTags("salePrices")
@common.Controller("salePrices")
export class SalePriceController extends SalePriceControllerBase {
  constructor(protected readonly service: SalePriceService) {
    super(service);
  }
}
