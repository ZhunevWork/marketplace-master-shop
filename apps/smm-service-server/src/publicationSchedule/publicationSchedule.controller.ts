import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PublicationScheduleService } from "./publicationSchedule.service";
import { PublicationScheduleControllerBase } from "./base/publicationSchedule.controller.base";

@swagger.ApiTags("publicationSchedules")
@common.Controller("publicationSchedules")
export class PublicationScheduleController extends PublicationScheduleControllerBase {
  constructor(protected readonly service: PublicationScheduleService) {
    super(service);
  }
}
