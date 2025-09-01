import { Module } from "@nestjs/common";
import { DescriptionModuleBase } from "./base/description.module.base";
import { DescriptionService } from "./description.service";
import { DescriptionController } from "./description.controller";
import { DescriptionResolver } from "./description.resolver";

@Module({
  imports: [DescriptionModuleBase],
  controllers: [DescriptionController],
  providers: [DescriptionService, DescriptionResolver],
  exports: [DescriptionService],
})
export class DescriptionModule {}
