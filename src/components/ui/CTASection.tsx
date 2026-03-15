import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
}

export default function CTASection({ title, subtitle, primaryCta, secondaryCta, dark = true }: CTASectionProps) {
  return (
    <section className={`py-20 ${dark ? 'bg-[#0c2340]' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg mb-8 ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryCta.href}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-colors duration-200"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              to={secondaryCta.href}
              className={`inline-flex items-center justify-center px-8 py-3.5 border font-semibold rounded-xl transition-colors duration-200 ${dark ? 'border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white' : 'border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900'}`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
