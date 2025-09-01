import { Module } from "@nestjs/common";
import { UrgencyModuleBase } from "./base/urgency.module.base";
import { UrgencyService } from "./urgency.service";
import { UrgencyController } from "./urgency.controller";
import { UrgencyResolver } from "./urgency.resolver";

@Module({
  imports: [UrgencyModuleBase],
  controllers: [UrgencyController],
  providers: [UrgencyService, UrgencyResolver],
  exports: [UrgencyService],
})
export class UrgencyModule {}
