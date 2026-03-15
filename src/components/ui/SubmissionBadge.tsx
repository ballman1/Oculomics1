import { Shield, Building2, Users } from 'lucide-react';

type SubmissionType = 'editorial' | 'vendor_submitted' | 'community_submitted';

interface Props {
  type: SubmissionType | string;
  size?: 'sm' | 'md';
}

const config: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  editorial: { label: 'Editorial', color: 'bg-teal-50 text-teal-700 border-teal-200', icon: <Shield size={11} /> },
  vendor_submitted: { label: 'Vendor', color: 'bg-blue-50 text-blue-700 border-blue-200', icon: <Building2 size={11} /> },
  community_submitted: { label: 'Community', color: 'bg-slate-100 text-slate-600 border-slate-200', icon: <Users size={11} /> },
};

export default function SubmissionBadge({ type, size = 'sm' }: Props) {
  const cfg = config[type] ?? config.community_submitted;
  return (
    <span className={`inline-flex items-center gap-1 border font-medium rounded-full ${cfg.color} ${size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-xs px-2.5 py-1'}`}>
      {cfg.icon}
      {cfg.label}
    </span>
  );
}
