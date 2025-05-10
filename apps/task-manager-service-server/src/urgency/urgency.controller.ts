import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UrgencyService } from "./urgency.service";
import { UrgencyControllerBase } from "./base/urgency.controller.base";

@swagger.ApiTags("urgencies")
@common.Controller("urgencies")
export class UrgencyController extends UrgencyControllerBase {
  constructor(protected readonly service: UrgencyService) {
    super(service);
  }
}
