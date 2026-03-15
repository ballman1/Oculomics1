import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { getStudyBySlug } from '../../services/directoryService';
import EvidenceBadge from '../../components/ui/EvidenceBadge';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

export default function StudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = getStudyBySlug(slug ?? '');

  if (!study) return (
    <div className="pt-40 text-center pb-20">
      <p className="text-slate-500">Study not found.</p>
      <Link to="/directory/studies" className="text-teal-600 text-sm mt-3 inline-block">Back to Studies</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#0c2340] text-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Studies', href: '/directory/studies' }, { label: 'Study' }]} variant="dark" />
          <div className="mt-6">
            <div className="flex items-center gap-3 flex-wrap mb-3">
              <EvidenceBadge level={study.evidenceLevel} />
              <span className="text-xs bg-white/10 text-slate-300 px-3 py-1 rounded-full">{study.studyType}</span>
              {study.sampleSize && <span className="text-xs text-slate-400">n={study.sampleSize.toLocaleString()}</span>}
            </div>
            <h1 className="text-2xl font-bold leading-snug max-w-3xl">{study.title}</h1>
            <p className="text-slate-300 mt-2 text-sm">{study.authors}</p>
            <p className="text-slate-400 text-sm mt-0.5 italic">{study.journal} · {study.year}</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-teal-700 mb-2">Key Finding</p>
          <p className="text-teal-900 font-medium leading-relaxed">{study.keyFinding}</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Abstract Summary</h2>
          <p className="text-slate-600 leading-relaxed">{study.abstractSummary}</p>
        </div>

        {study.limitations && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3">
            <AlertTriangle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">Limitations</p>
              <p className="text-sm text-amber-700 leading-relaxed">{study.limitations}</p>
            </div>
          </div>
        )}

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Study Details</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: 'Study Type', value: study.studyType },
              { label: 'Year', value: study.year.toString() },
              { label: 'Sample Size', value: study.sampleSize?.toLocaleString() },
              { label: 'Journal', value: study.journal },
              { label: 'DOI', value: study.doi },
            ].filter(i => i.value).map(item => (
              <div key={item.label}>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{item.label}</p>
                <p className="text-sm text-slate-700 mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Disease Focus</p>
            <div className="flex flex-wrap gap-1">
              {study.diseaseFocus.map(d => (
                <span key={d} className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full">{d}</span>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Modalities</p>
            <div className="flex flex-wrap gap-1">
              {study.modalities.map(m => (
                <span key={m} className="text-xs bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full">{m}</span>
              ))}
            </div>
          </div>
        </div>

        <Link to="/directory/studies" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
          <ArrowLeft size={14} /> Back to Studies
        </Link>
      </div>
    </div>
  );
}
