import { useParams, Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft, BookOpen, Package, Building2 } from 'lucide-react';
import { getCompanyBySlug } from '../../services/directoryService';
import EvidenceBadge from '../../components/ui/EvidenceBadge';
import EvidenceSummary from '../../components/ui/EvidenceSummary';
import SubmissionBadge from '../../components/ui/SubmissionBadge';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

export default function CompanyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const company = getCompanyBySlug(slug ?? '');

  if (!company) {
    return (
      <div className="pt-40 text-center pb-20">
        <p className="text-slate-500">Company not found.</p>
        <Link to="/directory/companies" className="text-teal-600 text-sm mt-3 inline-block">Back to Companies</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#0c2340] text-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs
            crumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Companies', href: '/directory/companies' }, { label: company.name }]}
            variant="dark"
          />
          <div className="mt-6 flex items-start gap-5 flex-wrap">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Building2 size={28} className="text-white/70" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <SubmissionBadge type={company.submissionType} />
                <EvidenceBadge level={company.evidenceLevel} />
              </div>
              <h1 className="text-3xl font-bold">{company.name}</h1>
              <p className="text-slate-300 mt-1">{company.tagline}</p>
              <p className="text-slate-400 text-sm mt-1">{company.headquarters} · Founded {company.foundedYear} · {company.fundingStage}</p>
            </div>
            {company.website && (
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors">
                <ExternalLink size={14} /> Visit website
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-3">About</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{company.longDescription}</p>
            </div>

            {company.products && company.products.length > 0 && (
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Package size={18} className="text-slate-400" /> Products
                </h2>
                <div className="space-y-3">
                  {company.products.map(p => (
                    <Link key={p.slug} to={`/directory/products/${p.slug}`} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-teal-50 transition-colors group">
                      <span className="font-medium text-slate-800 group-hover:text-teal-700">{p.name}</span>
                      <ArrowLeft size={14} className="text-slate-400 rotate-180 group-hover:text-teal-600" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {company.publications && company.publications.length > 0 && (
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BookOpen size={18} className="text-slate-400" /> Key Publications
                </h2>
                <div className="space-y-4">
                  {company.publications.map((pub, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-1 bg-teal-200 rounded-full flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-slate-800">{pub.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5 italic">{pub.journal} · {pub.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-4">Evidence Summary</h3>
              {company.evidenceSummary && <EvidenceSummary data={company.evidenceSummary} />}
            </div>

            {company.editorialNote && (
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-teal-700 mb-2">Editorial Note</p>
                <p className="text-sm text-teal-800 leading-relaxed">{company.editorialNote}</p>
              </div>
            )}

            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">Details</h3>
              {[
                { label: 'Development Stage', value: company.developmentStage },
                { label: 'Funding Stage', value: company.fundingStage },
                { label: 'Headquarters', value: company.headquarters },
                { label: 'Founded', value: company.foundedYear?.toString() },
              ].filter(i => i.value).map(item => (
                <div key={item.label}>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{item.label}</p>
                  <p className="text-sm text-slate-700 mt-0.5">{item.value}</p>
                </div>
              ))}
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Disease Focus</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {company.diseaseFocus.map(d => (
                    <span key={d} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full">{d}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Modalities</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {company.modalities.map(m => (
                    <span key={m} className="text-xs bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full">{m}</span>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/directory/companies" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
              <ArrowLeft size={14} /> Back to Companies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
