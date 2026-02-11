import { NextResponse } from 'next/server';
import { complianceAgent } from '@/lib/agents/compliance-agent';
import { riskAnalyze } from '@/lib/agents/risk-analyzer';

type Body = { tool?: 'eu_ai_act' | 'iso_42001'; systemName?: string };

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Body;
  const tool = body.tool ?? 'eu_ai_act';
  const systemName = body.systemName ?? 'Demo-System';

  const compliance = await complianceAgent({ systemName, regulation: tool === 'eu_ai_act' ? 'EU_AI_ACT' : 'ISO_42001' });
  const risk = await riskAnalyze({ systemId: systemName, signals: ['docs', 'oversight', 'logging'] });

  return NextResponse.json({ ok: true, tool, compliance, risk }, { status: 200 });
}
