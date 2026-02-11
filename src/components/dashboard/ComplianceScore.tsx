import { Badge } from '@/components/ui/badge';

export default function ComplianceScore() {
  const score = 82;
  const level = score >= 80 ? 'good' : score >= 60 ? 'ok' : 'bad';
  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold">Compliance Score</div>
      <div className="text-5xl font-black">{score}%</div>
      <Badge variant={level === 'good' ? 'success' : level === 'bad' ? 'danger' : 'default'}>
        {level === 'good' ? 'GREEN' : level === 'ok' ? 'YELLOW' : 'RED'}
      </Badge>
      <p className="text-white/70 text-sm">
        Demo-Score aus Mock-Checks. In echt würdest du hier Evidence/Policies/Logs verknüpfen.
      </p>
    </div>
  );
}
