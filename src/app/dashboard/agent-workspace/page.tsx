import { riskAnalyze } from '@/lib/agents/risk-analyzer';

export default async function AgentWorkspacePage() {
  const res = await riskAnalyze({ systemId: 'demo-system', signals: ['bias', 'drift', 'oversight'] });
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Agent Workspace</h1>
      <div className="glass rounded-2xl p-6">
        <div className="text-white/70">Async Agent Output (Mock)</div>
        <pre className="mt-4 text-xs overflow-auto bg-black/40 rounded-xl p-4 border border-white/10">
{JSON.stringify(res, null, 2)}
        </pre>
      </div>
    </div>
  );
}
