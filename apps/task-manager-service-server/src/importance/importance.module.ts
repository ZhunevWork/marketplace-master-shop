import { Module } from "@nestjs/common";
import { ImportanceModuleBase } from "./base/importance.module.base";
import { ImportanceService } from "./importance.service";
import { ImportanceController } from "./importance.controller";
import { ImportanceResolver } from "./importance.resolver";

@Module({
  imports: [ImportanceModuleBase],
  controllers: [ImportanceController],
  providers: [ImportanceService, ImportanceResolver],
  exports: [ImportanceService],
})
export class ImportanceModule {}
