import { Link } from 'react-router-dom';
import { FlaskConical, Database, Users, BookOpen, ArrowRight, Globe, Share2, FileText } from 'lucide-react';
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

const methodologicalAreas = [
  { title: 'Fundus photography AI', description: 'Deep learning on color fundus images — the most scalable modality for population-scale screening. Key challenges: image quality variability, demographic bias in training data.', maturity: 'Mature' },
  { title: 'OCT biomarker analysis', description: 'Quantitative analysis of retinal layer thicknesses, ganglion cell complex, and RNFL. Strong reproducibility but significant inter-device variability across manufacturers.', maturity: 'Mature' },
  { title: 'OCTA vascular analysis', description: 'Characterization of retinal capillary networks and flow impairment. High potential for systemic disease but lacks standardized acquisition protocols.', maturity: 'Emerging' },
  { title: 'Widefield imaging', description: 'Ultra-widefield fundus photography capturing peripheral retina. Adds spatial information not captured by standard 45° imaging. Limited dataset availability.', maturity: 'Emerging' },
  { title: 'Multi-modal integration', description: 'Combining retinal modalities with genomics, proteomics, or EHR data. Methodologically complex but potentially transformative for systemic disease prediction.', maturity: 'Early' },
  { title: 'Longitudinal analysis', description: 'Change detection over time as a biomarker of disease progression. Requires standardized acquisition and robust image registration methods.', maturity: 'Early' },
];

const maturityColors: Record<string, string> = {
  Mature: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Emerging: 'bg-amber-50 text-amber-700 border-amber-200',
  Early: 'bg-blue-50 text-blue-700 border-blue-200',
};

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
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/directory/datasets" className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors text-sm">
              Browse Datasets <ArrowRight size={14} />
            </Link>
            <Link to="/submit/research" className="inline-flex items-center gap-2 px-5 py-2.5 border border-teal-300 text-teal-700 hover:bg-teal-50 font-semibold rounded-xl transition-colors text-sm">
              Submit Research
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14">
          {[
            { icon: <Database size={20} className="text-teal-600" />, label: 'Datasets available', value: '35+', bg: 'bg-teal-50' },
            { icon: <FlaskConical size={20} className="text-blue-600" />, label: 'Active clinical trials', value: '80+', bg: 'bg-blue-50' },
            { icon: <BookOpen size={20} className="text-emerald-600" />, label: 'Publications (2024)', value: '1,200+', bg: 'bg-emerald-50' },
            { icon: <Users size={20} className="text-amber-600" />, label: 'Contributing consortia', value: '12', bg: 'bg-amber-50' },
          ].map(stat => (
            <div key={stat.label} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.bg}`}>{stat.icon}</div>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The research landscape</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Oculomics research spans ophthalmology, cardiology, neurology, endocrinology, and computer science. The field benefits from several large public datasets with linked health records, enabling hypothesis generation across multiple disease domains.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Key methodological approaches include deep learning on fundus photographs, quantitative analysis of OCT and OCTA data, and increasingly, integration with multi-omics data. Reproducibility and generalizability remain central challenges.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The UK Biobank retinal imaging sub-study (100,000+ participants) and the UKBB Oculomics Working Group have catalyzed significant research activity, providing a common benchmark dataset for hypothesis generation.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Key resources</h3>
            {[
              { icon: <Globe size={16} className="text-teal-600" />, title: 'UK Biobank Retinal Sub-study', desc: '100,000+ retinal images linked to health records', href: '/directory/datasets' },
              { icon: <Share2 size={16} className="text-blue-600" />, title: 'Consortia & Collaborations', desc: 'Research consortia open for membership or data access', href: '/directory/consortia' },
              { icon: <FileText size={16} className="text-emerald-600" />, title: 'Submission Guidelines', desc: 'How to submit research for editorial consideration', href: '/submission-guidelines' },
              { icon: <FlaskConical size={16} className="text-amber-600" />, title: 'Active Studies Registry', desc: 'Clinical trials and observational studies', href: '/directory/studies' },
            ].map(r => (
              <Link key={r.title} to={r.href} className="group flex items-start gap-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
                <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">{r.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">{r.title}</p>
                  <p className="text-xs text-slate-500">{r.desc}</p>
                </div>
                <ArrowRight size={14} className="text-slate-300 group-hover:text-teal-500 flex-shrink-0 mt-1 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <SectionHeader label="Methodology" title="Research approaches" align="left" />
          <p className="text-slate-500 text-sm mt-2 mb-8">The primary methodological categories in oculomics research, with current maturity assessments.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {methodologicalAreas.map(area => (
              <div key={area.title} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900 text-sm">{area.title}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${maturityColors[area.maturity]}`}>{area.maturity}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{area.description}</p>
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
            <Link to="/directory/datasets" className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-teal-50 hover:border-teal-300 transition-colors group">
              <Database size={32} className="text-slate-300 group-hover:text-teal-400 mb-3 transition-colors" />
              <p className="text-sm text-slate-500 mb-3">Explore all indexed datasets in the directory</p>
              <span className="text-sm font-semibold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1">
                Browse Datasets <ArrowRight size={14} />
              </span>
            </Link>
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

        <div className="bg-[#0c2340] rounded-2xl p-8 text-white mb-10">
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

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
          <h3 className="font-bold text-teal-900 mb-2">Contribute to the evidence base</h3>
          <p className="text-sm text-teal-700 leading-relaxed mb-4">
            OculomicsHub welcomes research submissions for editorial consideration. We review findings and, where appropriate, include them in our newsroom coverage or evidence summaries.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Submission guidelines', href: '/submission-guidelines', primary: true },
              { label: 'Evidence framework', href: '/evidence-framework', primary: false },
            ].map(l => (
              <Link
                key={l.href}
                to={l.href}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-colors ${l.primary ? 'bg-teal-600 hover:bg-teal-700 text-white' : 'border border-teal-300 text-teal-700 hover:bg-teal-100'}`}
              >
                {l.label} <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title="Contribute to the field"
        subtitle="Submit a research summary for editorial consideration, or list your study or consortium in the directory."
        primaryCta={{ label: 'Submit Research', href: '/submit/research' }}
        secondaryCta={{ label: 'Browse Directory', href: '/directory' }}
      />
    </>
  );
}
