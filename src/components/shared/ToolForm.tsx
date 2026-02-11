'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

export default function ToolForm({ tool }: { tool: 'eu_ai_act' | 'iso_42001' }) {
  const [systemName, setSystemName] = useState('Demo-System');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<unknown>(null);

  async function run() {
    setLoading(true);
    try {
      const res = await fetch('/api/tools/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool, systemName }),
      });
      const json = (await res.json()) as unknown;
      setResult(json);
      toast.success('Analyse abgeschlossen');
    } catch {
      toast.error('Fehler bei der Analyse');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="glass rounded-2xl p-6 space-y-3">
        <label className="text-sm text-white/70">Systemname</label>
        <Input value={systemName} onChange={(e) => setSystemName(e.target.value)} />
        <Button onClick={run} disabled={loading}>{loading ? 'Läuft…' : 'Analyse starten'}</Button>
      </div>
      {result ? (
        <pre className="text-xs overflow-auto glass rounded-2xl p-6">{JSON.stringify(result, null, 2)}</pre>
      ) : null}
    </div>
  );
}
