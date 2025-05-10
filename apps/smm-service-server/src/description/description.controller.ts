import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DescriptionService } from "./description.service";
import { DescriptionControllerBase } from "./base/description.controller.base";

@swagger.ApiTags("descriptions")
@common.Controller("descriptions")
export class DescriptionController extends DescriptionControllerBase {
  constructor(protected readonly service: DescriptionService) {
    super(service);
  }
}
