import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProfitabilityAnalysisService } from "./profitabilityAnalysis.service";
import { ProfitabilityAnalysisControllerBase } from "./base/profitabilityAnalysis.controller.base";

@swagger.ApiTags("profitabilityAnalyses")
@common.Controller("profitabilityAnalyses")
export class ProfitabilityAnalysisController extends ProfitabilityAnalysisControllerBase {
  constructor(protected readonly service: ProfitabilityAnalysisService) {
    super(service);
  }
}
