import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Globe, Users } from 'lucide-react';
import { getConsortiumBySlug } from '../../services/directoryService';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

export default function ConsortiumDetail() {
  const { slug } = useParams<{ slug: string }>();
  const consortium = getConsortiumBySlug(slug ?? '');

  if (!consortium) return (
    <div className="pt-40 text-center pb-20">
      <p className="text-slate-500">Consortium not found.</p>
      <Link to="/directory/consortia" className="text-teal-600 text-sm mt-3 inline-block">Back to Consortia</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#0c2340] text-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Consortia', href: '/directory/consortia' }, { label: consortium.shortName ?? consortium.name }]} variant="dark" />
          <div className="mt-6 flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-bold">{consortium.name}</h1>
              {consortium.shortName && <p className="text-teal-400 font-mono text-sm mt-0.5">{consortium.shortName}</p>}
              <p className="text-slate-400 text-sm mt-1 flex items-center gap-3">
                <span className="flex items-center gap-1"><Globe size={12} /> {consortium.geography}</span>
                {consortium.memberCount && <span className="flex items-center gap-1"><Users size={12} /> {consortium.memberCount} members</span>}
              </p>
            </div>
            {consortium.website && (
              <a href={consortium.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300">
                <ExternalLink size={14} /> Visit website
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3">About</h2>
          <p className="text-slate-600 leading-relaxed whitespace-pre-line">{consortium.longDescription}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {consortium.keyMembers && consortium.keyMembers.length > 0 && (
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Key Members</h3>
              <ul className="space-y-1.5">
                {consortium.keyMembers.map(m => (
                  <li key={m} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" /> {m}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
            <h3 className="font-bold text-slate-900 text-sm mb-3">Focus Areas</h3>
            <div className="flex flex-wrap gap-2">
              {consortium.focusAreas.map(f => (
                <span key={f} className="text-xs bg-rose-50 text-rose-700 border border-rose-100 px-2.5 py-1 rounded-full">{f}</span>
              ))}
            </div>
          </div>
        </div>

        <Link to="/directory/consortia" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
          <ArrowLeft size={14} /> Back to Consortia
        </Link>
      </div>
    </div>
  );
}
