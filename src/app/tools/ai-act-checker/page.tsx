import ToolForm from '@/components/shared/ToolForm';

export default function AIActChecker(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">EU AI Act Checker</h1>
      <ToolForm tool="eu_ai_act" />
    </div>
  );
}
