import { Module } from "@nestjs/common";
import { ProfitabilityAnalysisModuleBase } from "./base/profitabilityAnalysis.module.base";
import { ProfitabilityAnalysisService } from "./profitabilityAnalysis.service";
import { ProfitabilityAnalysisController } from "./profitabilityAnalysis.controller";
import { ProfitabilityAnalysisResolver } from "./profitabilityAnalysis.resolver";

@Module({
  imports: [ProfitabilityAnalysisModuleBase],
  controllers: [ProfitabilityAnalysisController],
  providers: [ProfitabilityAnalysisService, ProfitabilityAnalysisResolver],
  exports: [ProfitabilityAnalysisService],
})
export class ProfitabilityAnalysisModule {}
