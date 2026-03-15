import { CheckCircle, Clock, FlaskConical } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { evidenceItems } from '../../data/featured';

export default function EvidenceSection() {
  return (
    <section className="py-20 bg-[#0c2340]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Evidence Landscape"
          title="What's established, what's promising, and what's exploratory"
          subtitle="Oculomics spans a broad range of evidence. We help you understand what's been clinically validated versus what remains early-stage research."
          light
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-emerald-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="text-emerald-400" size={18} />
              </div>
              <h3 className="font-bold text-white">Established Evidence</h3>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">Clinically validated, FDA-cleared, or supported by robust peer-reviewed evidence and independent replication.</p>
            <ul className="space-y-2.5">
              {evidenceItems.established.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-amber-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <Clock className="text-amber-400" size={18} />
              </div>
              <h3 className="font-bold text-white">Promising — Early Stage</h3>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">Backed by promising research but requiring further validation, larger studies, or regulatory pathway completion before routine clinical use.</p>
            <ul className="space-y-2.5">
              {evidenceItems.promising.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-slate-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center">
                <FlaskConical className="text-slate-400" size={18} />
              </div>
              <h3 className="font-bold text-white">Exploratory</h3>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">Early-stage hypotheses supported by limited data. Scientifically interesting, but not yet substantiated for clinical translation.</p>
            <ul className="space-y-2.5">
              {evidenceItems.exploratory.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
