type EvidenceLevel = 'established' | 'promising' | 'exploratory' | 'vendor_claim' | 'pending_review';

interface EvidenceBadgeProps {
  level: EvidenceLevel | string;
  size?: 'sm' | 'md';
}

const config: Record<string, { label: string; color: string; dot: string }> = {
  established: { label: 'Established Evidence', color: 'bg-emerald-100 text-emerald-800 border-emerald-200', dot: 'bg-emerald-500' },
  promising: { label: 'Promising — Early Stage', color: 'bg-amber-100 text-amber-800 border-amber-200', dot: 'bg-amber-500' },
  exploratory: { label: 'Exploratory', color: 'bg-slate-100 text-slate-600 border-slate-200', dot: 'bg-slate-400' },
  vendor_claim: { label: 'Vendor Claim', color: 'bg-orange-100 text-orange-700 border-orange-200', dot: 'bg-orange-400' },
  pending_review: { label: 'Pending Review', color: 'bg-blue-50 text-blue-600 border-blue-200', dot: 'bg-blue-400' },
};

export default function EvidenceBadge({ level, size = 'md' }: EvidenceBadgeProps) {
  const cfg = config[level] ?? config.exploratory;
  return (
    <span className={`inline-flex items-center border font-medium rounded-full ${cfg.color} ${size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-xs px-3 py-1'}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}
