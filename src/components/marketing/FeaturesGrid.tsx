import { Shield, Workflow, Boxes, Radar } from 'lucide-react';

const items = [
  { icon: Shield, title: 'Security-first', desc: 'CSP/Headers + saubere Defaults für Deploy auf Netlify/Vercel.' },
  { icon: Workflow, title: 'Agentische Workflows', desc: 'Async Mock Agents liefern strukturierte Findings.' },
  { icon: Radar, title: 'Risk Monitoring', desc: 'Dummy-Analytics & Risiko-Scoring – ohne externe Keys.' },
  { icon: Boxes, title: '3D Visualisierung', desc: 'Three.js Szene mit @react-three/fiber – stabil & minimal.' },
];

export default function FeaturesGrid() {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {items.map((it) => (
        <div key={it.title} className="glass rounded-2xl p-6">
          <it.icon className="w-6 h-6" />
          <div className="mt-3 text-lg font-semibold">{it.title}</div>
          <p className="text-white/70 mt-2">{it.desc}</p>
        </div>
      ))}
    </section>
  );
}
