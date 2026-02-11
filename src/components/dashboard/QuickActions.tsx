import Link from 'next/link';

export default function QuickActions() {
  return (
    <div className="flex gap-3 flex-wrap">
      <Link href="/tools/ai-act-checker" className="btn-ghost">Quick EU Check</Link>
      <Link href="/tools/iso-gap-analyzer" className="btn-ghost">ISO Gap</Link>
      <Link href="/pricing" className="btn-primary">Upgrade</Link>
    </div>
  );
}
