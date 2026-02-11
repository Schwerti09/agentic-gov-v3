import { complianceAgent } from '@/lib/agents/compliance-agent';
import { Badge } from '@/components/ui/badge';

export default async function ComplianceCenterPage() {
  const report = await complianceAgent({ systemName: 'Demo-LLM-Assist', regulation: 'EU_AI_ACT' });
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Compliance Center</h1>
      <div className="glass rounded-2xl p-6 space-y-3">
        <div className="flex items-center gap-3">
          <Badge variant={report.status === 'ok' ? 'success' : 'danger'}>{report.status.toUpperCase()}</Badge>
          <div className="text-white/70">{report.summary}</div>
        </div>
        <ul className="list-disc pl-6 text-white/80">
          {report.findings.map((f) => <li key={f.id}><span className="font-semibold">{f.title}:</span> {f.detail}</li>)}
        </ul>
      </div>
    </div>
  );
}
