import RiskGraph3D from '@/components/dashboard/RiskGraph3D';
import ComplianceScore from '@/components/dashboard/ComplianceScore';
import QuickActions from '@/components/dashboard/QuickActions';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-white/70">Demo-Daten – alles rendert ohne externe Keys.</p>
        </div>
        <QuickActions />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass rounded-2xl p-4">
          <div className="font-semibold mb-2">Risk Graph 3D</div>
          <div className="h-[420px] w-full">
            <RiskGraph3D />
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <ComplianceScore />
        </div>
      </div>
    </div>
  );
}
