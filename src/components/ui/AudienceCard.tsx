import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface AudienceCardProps {
  icon: React.ReactNode;
  audience: string;
  headline: string;
  description: string;
  cta: string;
  href: string;
  accentColor?: string;
}

export default function AudienceCard({ icon, audience, headline, description, cta, href, accentColor = 'bg-teal-50 text-teal-600' }: AudienceCardProps) {
  return (
    <Link
      to={href}
      className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${accentColor}`}>
        {icon}
      </div>
      <div>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{audience}</span>
        <h3 className="text-lg font-bold text-slate-900 mt-1 leading-snug group-hover:text-teal-700 transition-colors">
          {headline}
        </h3>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed flex-1">{description}</p>
      <div className="flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:gap-2.5 transition-all duration-200">
        {cta} <ArrowRight size={15} />
      </div>
    </Link>
  );
}
