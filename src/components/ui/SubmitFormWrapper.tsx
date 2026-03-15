import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  icon: ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  breadcrumbs: Crumb[];
  children: ReactNode;
  sidebarContent?: ReactNode;
}

export default function SubmitFormWrapper({ icon, iconBg, title, subtitle, breadcrumbs, children, sidebarContent }: Props) {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-[#0c2340] text-white py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-1 text-sm mb-6 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={14} className="text-slate-600" />}
                {crumb.href ? (
                  <Link to={crumb.href} className="text-slate-400 hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
              {icon}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-slate-400 mt-1 leading-relaxed max-w-xl">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className={`grid grid-cols-1 ${sidebarContent ? 'lg:grid-cols-3' : ''} gap-8`}>
          <div className={sidebarContent ? 'lg:col-span-2' : ''}>
            {children}
          </div>
          {sidebarContent && (
            <div className="space-y-4 lg:pt-0">
              {sidebarContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
