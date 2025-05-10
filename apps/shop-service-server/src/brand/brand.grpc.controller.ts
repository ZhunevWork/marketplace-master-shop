import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BrandService } from "./brand.service";
import { BrandGrpcControllerBase } from "./base/brand.grpc.controller.base";

@swagger.ApiTags("brands")
@common.Controller("brands")
export class BrandGrpcController extends BrandGrpcControllerBase {
  constructor(protected readonly service: BrandService) {
    super(service);
  }
}
