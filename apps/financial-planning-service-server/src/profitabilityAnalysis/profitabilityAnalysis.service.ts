import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfitabilityAnalysisServiceBase } from "./base/profitabilityAnalysis.service.base";

@Injectable()
export class ProfitabilityAnalysisService extends ProfitabilityAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
