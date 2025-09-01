import { Module } from "@nestjs/common";
import { PublicationScheduleModuleBase } from "./base/publicationSchedule.module.base";
import { PublicationScheduleService } from "./publicationSchedule.service";
import { PublicationScheduleController } from "./publicationSchedule.controller";
import { PublicationScheduleResolver } from "./publicationSchedule.resolver";

@Module({
  imports: [PublicationScheduleModuleBase],
  controllers: [PublicationScheduleController],
  providers: [PublicationScheduleService, PublicationScheduleResolver],
  exports: [PublicationScheduleService],
})
export class PublicationScheduleModule {}
