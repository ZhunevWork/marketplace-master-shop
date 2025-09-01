import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImportanceService } from "./importance.service";
import { ImportanceControllerBase } from "./base/importance.controller.base";

@swagger.ApiTags("importances")
@common.Controller("importances")
export class ImportanceController extends ImportanceControllerBase {
  constructor(protected readonly service: ImportanceService) {
    super(service);
  }
}
