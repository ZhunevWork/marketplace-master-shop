import { ProfitabilityAnalysis as TProfitabilityAnalysis } from "../api/profitabilityAnalysis/ProfitabilityAnalysis";

export const PROFITABILITYANALYSIS_TITLE_FIELD = "id";

export const ProfitabilityAnalysisTitle = (
  record: TProfitabilityAnalysis
): string => {
  return record.id?.toString() || String(record.id);
};
