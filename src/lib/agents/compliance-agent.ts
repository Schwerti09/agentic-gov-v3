export type ComplianceAgentInput = { systemName: string; regulation: 'EU_AI_ACT' | 'ISO_42001' | 'GDPR' };
export type ComplianceFinding = { id: string; title: string; detail: string; severity: 'low' | 'medium' | 'high' };
export type ComplianceAgentOutput = { status: 'ok' | 'warn'; summary: string; findings: ComplianceFinding[] };

export async function complianceAgent(input: ComplianceAgentInput): Promise<ComplianceAgentOutput> {
  // Demo: deterministic-ish findings (no external keys)
  const base: ComplianceFinding[] = [
    { id: 'docs', title: 'Technical Documentation', detail: `${input.systemName} benötigt dokumentierte Datenflüsse + Modellkarte.`, severity: 'high' },
    { id: 'oversight', title: 'Human Oversight', detail: `Definiere klare Eingriffs- & Eskalationspfade.`, severity: 'medium' },
    { id: 'logging', title: 'Logging & Traceability', detail: `Audit-Logs müssen manipulationssicher & exportierbar sein.`, severity: 'medium' },
  ];
  const more = input.regulation === 'ISO_42001'
    ? [{ id: 'isms', title: 'Management System', detail: 'ISO 42001 verlangt Governance-Prozesse + Rollen/Verantwortlichkeiten.', severity: 'high' as const }]
    : [{ id: 'transparency', title: 'Transparency', detail: 'Nutzerinformation & Modellgrenzen müssen kommuniziert werden.', severity: 'medium' as const }];

  const findings = [...base, ...more];
  const high = findings.filter((f) => f.severity === 'high').length;
  const status: 'ok' | 'warn' = high >= 2 ? 'warn' : 'ok';

  return {
    status,
    summary: status === 'ok' ? 'Sieht gut aus (Demo).' : 'Es gibt kritische Lücken (Demo).',
    findings,
  };
}
