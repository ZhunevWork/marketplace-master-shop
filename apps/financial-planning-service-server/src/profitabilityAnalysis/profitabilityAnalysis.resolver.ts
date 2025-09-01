import * as graphql from "@nestjs/graphql";
import { ProfitabilityAnalysisResolverBase } from "./base/profitabilityAnalysis.resolver.base";
import { ProfitabilityAnalysis } from "./base/ProfitabilityAnalysis";
import { ProfitabilityAnalysisService } from "./profitabilityAnalysis.service";

@graphql.Resolver(() => ProfitabilityAnalysis)
export class ProfitabilityAnalysisResolver extends ProfitabilityAnalysisResolverBase {
  constructor(protected readonly service: ProfitabilityAnalysisService) {
    super(service);
  }
}
