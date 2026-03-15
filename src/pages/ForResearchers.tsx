import { FlaskConical, Database, Users, BookOpen, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import { directoryEntries } from '../data/directory';

const openProblems = [
  'Standardizing retinal biomarker measurement across imaging platforms and manufacturers',
  'Prospective validation of AI-derived risk scores against hard clinical endpoints',
  'Characterizing demographic variation in retinal features and its impact on model generalizability',
  'Longitudinal tracking of retinal changes as disease progression markers',
  'Integrating retinal data with other omics layers (genomics, proteomics, metabolomics)',
  'Developing interpretable AI that can surface mechanistically meaningful features',
  'Establishing minimum reporting standards for oculomics studies',
];

export default function ForResearchers() {
  const datasets = directoryEntries.filter(e => e.type === 'dataset');
  const studies = directoryEntries.filter(e => e.type === 'study');

  return (
    <>
      <div className="bg-gradient-to-br from-teal-50 to-white pt-32 pb-20 border-b border-teal-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
            <FlaskConical size={13} />
            For Researchers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Resources, datasets, and open problems in oculomics research
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            A starting point for academic and industry researchers interested in contributing to or building on the oculomics evidence base.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The research landscape</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Oculomics research spans ophthalmology, cardiology, neurology, endocrinology, and computer science. The field benefits from several large public datasets with linked health records, enabling hypothesis generation across multiple disease domains.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Key methodological approaches include deep learning on fundus photographs, quantitative analysis of OCT and OCTA data, and increasingly, integration with multi-omics data. Reproducibility and generalizability remain central challenges.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: <Database size={20} />, label: 'Datasets available', value: '35+', color: 'bg-teal-50 text-teal-600' },
              { icon: <FlaskConical size={20} />, label: 'Active clinical trials', value: '80+', color: 'bg-blue-50 text-blue-600' },
              { icon: <BookOpen size={20} />, label: 'Publications (2024)', value: '1,200+', color: 'bg-emerald-50 text-emerald-600' },
              { icon: <Users size={20} />, label: 'Contributing consortia', value: '12', color: 'bg-amber-50 text-amber-600' },
            ].map(stat => (
              <div key={stat.label} className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <SectionHeader label="Data Resources" title="Key datasets" align="left" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {datasets.map(dataset => (
              <div key={dataset.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Database size={16} className="text-emerald-600" />
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Dataset</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{dataset.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{dataset.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {dataset.tags.map(tag => (
                    <span key={tag} className="text-xs bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <Database size={32} className="text-slate-300 mb-3" />
              <p className="text-sm text-slate-500 mb-3">Explore all indexed datasets in the directory</p>
              <a href="/directory" className="text-sm font-semibold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1">
                Browse Datasets <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <SectionHeader label="Ongoing Research" title="Active studies" align="left" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {studies.map(study => (
              <div key={study.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FlaskConical size={16} className="text-amber-600" />
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">Clinical Study</span>
                  {study.location && <span className="text-xs text-slate-400 ml-auto">{study.location}</span>}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{study.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{study.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map(tag => (
                    <span key={tag} className="text-xs bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0c2340] rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Open problems in the field</h3>
          <p className="text-slate-300 text-sm mb-6">Areas where the field needs more rigorous research, better methodology, or broader validation.</p>
          <ul className="space-y-3">
            {openProblems.map((problem, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CTASection
        title="Contribute to the field"
        subtitle="Submit a research summary for editorial consideration, or list your study or consortium in the directory."
        primaryCta={{ label: 'Submit Research', href: '/contact' }}
        secondaryCta={{ label: 'Browse Directory', href: '/directory' }}
      />
    </>
  );
}
