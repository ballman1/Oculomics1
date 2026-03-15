import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react';
import { getAcademicCenterBySlug } from '../../services/directoryService';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

export default function AcademicDetail() {
  const { slug } = useParams<{ slug: string }>();
  const center = getAcademicCenterBySlug(slug ?? '');

  if (!center) return (
    <div className="pt-40 text-center pb-20">
      <p className="text-slate-500">Academic centre not found.</p>
      <Link to="/directory/academic-centers" className="text-teal-600 text-sm mt-3 inline-block">Back to Academic Centres</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#0c2340] text-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Academic Centres', href: '/directory/academic-centers' }, { label: center.name }]} variant="dark" />
          <div className="mt-6 flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-bold">{center.name}</h1>
              <p className="text-slate-300 mt-1">{center.institution}</p>
              <p className="text-slate-400 text-sm mt-0.5 flex items-center gap-1">
                <MapPin size={12} /> {center.country}
              </p>
            </div>
            {center.website && (
              <a href={center.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300">
                <ExternalLink size={14} /> Visit website
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3">About</h2>
          <p className="text-slate-600 leading-relaxed whitespace-pre-line">{center.longDescription}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
            <h3 className="font-bold text-slate-900 text-sm mb-3">Key Investigators</h3>
            <ul className="space-y-1.5">
              {center.keyInvestigators.map(inv => (
                <li key={inv} className="text-sm text-slate-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" /> {inv}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
            <h3 className="font-bold text-slate-900 text-sm mb-3">Research Focus</h3>
            <div className="flex flex-wrap gap-2">
              {center.researchFocus.map(f => (
                <span key={f} className="text-xs bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-full">{f}</span>
              ))}
            </div>
          </div>
        </div>

        {center.activeStudies && center.activeStudies.length > 0 && (
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Active Studies</h2>
            <ul className="space-y-2">
              {center.activeStudies.map(s => (
                <li key={s} className="text-sm text-slate-600 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link to="/directory/academic-centers" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
          <ArrowLeft size={14} /> Back to Academic Centres
        </Link>
      </div>
    </div>
  );
}
