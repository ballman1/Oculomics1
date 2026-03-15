import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  crumbs: Crumb[];
  variant?: 'light' | 'dark';
}

export default function Breadcrumbs({ crumbs, variant = 'light' }: Props) {
  const textBase = variant === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-700';
  const textCurrent = variant === 'dark' ? 'text-white' : 'text-slate-700';
  const chevronColor = variant === 'dark' ? 'text-slate-600' : 'text-slate-300';

  return (
    <nav className="flex items-center flex-wrap gap-1 text-sm">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight size={14} className={chevronColor} />}
          {crumb.href ? (
            <Link to={crumb.href} className={`transition-colors ${textBase}`}>{crumb.label}</Link>
          ) : (
            <span className={`font-medium ${textCurrent}`}>{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
