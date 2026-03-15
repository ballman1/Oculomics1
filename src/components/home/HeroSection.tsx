import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#0c2340] overflow-hidden min-h-[92vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full -translate-x-1/2 translate-y-1/3" />
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide">
            <Eye size={13} />
            The field at the intersection of ophthalmology, AI, and systemic medicine
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            What can your eye<br />
            <span className="text-teal-400">tell us about your health?</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
            Oculomics Hub is the central reference point for the emerging field of oculomics — where retinal imaging meets systemic disease detection, AI-driven biomarkers, and population-scale health insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/what-is-oculomics"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all duration-200 text-base group"
            >
              Explore the Field
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/directory"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold rounded-xl transition-all duration-200 text-base"
            >
              Browse Directory
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 mt-14 pt-10 border-t border-white/10">
            {[
              { value: '200+', label: 'Research studies indexed' },
              { value: '50+', label: 'Companies profiled' },
              { value: '7', label: 'Systemic disease domains' },
              { value: '12+', label: 'Imaging modalities covered' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-teal-400">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
