import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getDatasetBySlug } from '../../services/directoryService';
import EvidenceBadge from '../../components/ui/EvidenceBadge';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const accessColors: Record<string, string> = {
  open: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  application_required: 'bg-amber-50 text-amber-700 border-amber-200',
  restricted: 'bg-rose-50 text-rose-700 border-rose-200',
};
const accessLabels: Record<string, string> = {
  open: 'Open Access', application_required: 'Application Required', restricted: 'Restricted',
};

export default function DatasetDetail() {
  const { slug } = useParams<{ slug: string }>();
  const dataset = getDatasetBySlug(slug ?? '');

  if (!dataset) return (
    <div className="pt-40 text-center pb-20">
      <p className="text-slate-500">Dataset not found.</p>
      <Link to="/directory/datasets" className="text-teal-600 text-sm mt-3 inline-block">Back to Datasets</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#0c2340] text-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Datasets', href: '/directory/datasets' }, { label: dataset.name }]} variant="dark" />
          <div className="mt-6 flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <EvidenceBadge level={dataset.evidenceLevel} />
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${accessColors[dataset.accessType]}`}>
                  {accessLabels[dataset.accessType]}
                </span>
              </div>
              <h1 className="text-2xl font-bold">{dataset.name}</h1>
              <p className="text-slate-400 text-sm mt-0.5">{dataset.owner}{dataset.geography ? ` · ${dataset.geography}` : ''}</p>
            </div>
            {dataset.accessUrl && (
              <a href={dataset.accessUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl text-sm transition-colors">
                <ExternalLink size={14} /> Access Dataset
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Description</h2>
          <p className="text-slate-600 leading-relaxed">{dataset.longDescription}</p>
        </div>

        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-teal-700 mb-2">Relevance for Oculomics Research</p>
          <p className="text-teal-800 leading-relaxed text-sm">{dataset.relevance}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 space-y-3">
            <h3 className="font-bold text-slate-900 text-sm">Dataset Details</h3>
            {[
              { label: 'Sample Size', value: dataset.sampleSize?.toLocaleString() },
              { label: 'Owner', value: dataset.owner },
              { label: 'Geography', value: dataset.geography },
              { label: 'Access Type', value: accessLabels[dataset.accessType] },
            ].filter(i => i.value).map(item => (
              <div key={item.label}>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{item.label}</p>
                <p className="text-sm text-slate-700 mt-0.5">{item.value}</p>
              </div>
            ))}
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">Modalities</p>
              <div className="flex flex-wrap gap-1">
                {dataset.modalities.map(m => (
                  <span key={m} className="text-xs bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full">{m}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
            <h3 className="font-bold text-slate-900 text-sm mb-3">Linked Outcomes</h3>
            <ul className="space-y-1.5">
              {dataset.linkedOutcomes.map(o => (
                <li key={o} className="text-sm text-slate-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" /> {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link to="/directory/datasets" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
          <ArrowLeft size={14} /> Back to Datasets
        </Link>
      </div>
    </div>
  );
}
