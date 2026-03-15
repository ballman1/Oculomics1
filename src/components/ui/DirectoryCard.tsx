import { Link } from 'react-router-dom';
import { DirectoryEntry } from '../../types';
import { Building2, Database, FlaskConical, GraduationCap, Users, Calendar, Package } from 'lucide-react';

const typeConfig: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
  company: { icon: <Building2 size={18} />, color: 'bg-blue-50 text-blue-600 border-blue-100', label: 'Company' },
  product: { icon: <Package size={18} />, color: 'bg-teal-50 text-teal-600 border-teal-100', label: 'Product' },
  dataset: { icon: <Database size={18} />, color: 'bg-emerald-50 text-emerald-600 border-emerald-100', label: 'Dataset' },
  study: { icon: <FlaskConical size={18} />, color: 'bg-amber-50 text-amber-600 border-amber-100', label: 'Clinical Study' },
  academic: { icon: <GraduationCap size={18} />, color: 'bg-slate-50 text-slate-600 border-slate-100', label: 'Academic Center' },
  consortium: { icon: <Users size={18} />, color: 'bg-orange-50 text-orange-600 border-orange-100', label: 'Consortium' },
  event: { icon: <Calendar size={18} />, color: 'bg-rose-50 text-rose-600 border-rose-100', label: 'Event' },
};

interface DirectoryCardProps {
  entry: DirectoryEntry;
}

export default function DirectoryCard({ entry }: DirectoryCardProps) {
  const config = typeConfig[entry.type];
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className={`inline-flex items-center gap-1.5 text-xs font-medium border px-2.5 py-1 rounded-full ${config.color}`}>
          {config.icon}
          {config.label}
        </div>
        {entry.location && (
          <span className="text-xs text-slate-400">{entry.location}</span>
        )}
      </div>
      <h3 className="font-bold text-slate-900 mb-1.5 text-base">{entry.name}</h3>
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">{entry.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {entry.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}

interface DirectoryCategoryCardProps {
  icon: React.ReactNode;
  label: string;
  count: number;
  href: string;
  color: string;
}

export function DirectoryCategoryCard({ icon, label, count, href, color }: DirectoryCategoryCardProps) {
  return (
    <Link
      to={href}
      className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 ${color}`}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/60">
        {icon}
      </div>
      <div className="text-center">
        <div className="font-bold text-slate-900">{label}</div>
        <div className="text-sm text-slate-500">{count} listed</div>
      </div>
    </Link>
  );
}
