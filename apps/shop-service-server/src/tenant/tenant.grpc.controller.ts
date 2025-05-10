import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TenantService } from "./tenant.service";
import { TenantGrpcControllerBase } from "./base/tenant.grpc.controller.base";

@swagger.ApiTags("tenants")
@common.Controller("tenants")
export class TenantGrpcController extends TenantGrpcControllerBase {
  constructor(protected readonly service: TenantService) {
    super(service);
  }
}
