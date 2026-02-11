import ToolForm from '@/components/shared/ToolForm';

export default function IsoGap(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">ISO 42001 Gap Analyzer</h1>
      <ToolForm tool="iso_42001" />
    </div>
  );
}
