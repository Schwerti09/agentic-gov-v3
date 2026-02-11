export type RiskAnalyzerInput = { systemId: string; signals: string[] };
export type RiskAnalyzerOutput = {
  systemId: string;
  riskScore: number;
  level: 'low' | 'medium' | 'high';
  signals: { name: string; weight: number; note: string }[];
  generatedAt: string;
};

export async function riskAnalyze(input: RiskAnalyzerInput): Promise<RiskAnalyzerOutput> {
  const signals = input.signals.map((s, i) => ({
    name: s,
    weight: Math.min(1, 0.35 + i * 0.15),
    note: `Mock-Interpretation für Signal "${s}".`,
  }));
  const riskScore = Math.round(40 + signals.reduce((a, b) => a + b.weight * 15, 0));
  const level = riskScore >= 75 ? 'high' : riskScore >= 55 ? 'medium' : 'low';
  return { systemId: input.systemId, riskScore, level, signals, generatedAt: new Date().toISOString() };
}
