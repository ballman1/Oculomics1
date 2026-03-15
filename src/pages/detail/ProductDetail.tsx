import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Users } from 'lucide-react';
import { getProductBySlug } from '../../services/directoryService';
import EvidenceBadge from '../../components/ui/EvidenceBadge';
import SubmissionBadge from '../../components/ui/SubmissionBadge';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug ?? '');

  if (!product) return (
    <div className="pt-40 text-center pb-20">
      <p className="text-slate-500">Product not found.</p>
      <Link to="/directory/products" className="text-teal-600 text-sm mt-3 inline-block">Back to Products</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#0c2340] text-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs crumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Products', href: '/directory/products' }, { label: product.name }]} variant="dark" />
          <div className="mt-6">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <SubmissionBadge type={product.submissionType} />
              <EvidenceBadge level={product.evidenceLevel} />
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <Link to={`/directory/companies/${product.companySlug}`} className="text-teal-400 hover:text-teal-300 text-sm mt-1 inline-block">{product.companyName}</Link>
            <p className="text-slate-400 text-sm mt-0.5">{product.category} · {product.regulatoryStatus}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Overview</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{product.longDescription}</p>
            </div>

            {product.limitationsNotes && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3">
                <AlertTriangle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-amber-800 mb-1">Limitations & Cautions</p>
                  <p className="text-sm text-amber-700 leading-relaxed">{product.limitationsNotes}</p>
                </div>
              </div>
            )}

            {product.evidenceLinks && product.evidenceLinks.length > 0 && (
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-3">Evidence Links</h2>
                <ul className="space-y-2">
                  {product.evidenceLinks.map((link, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                      {link.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-5">
            {product.targetUsers && product.targetUsers.length > 0 && (
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <Users size={15} className="text-slate-400" /> Target Users
                </h3>
                <ul className="space-y-1.5">
                  {product.targetUsers.map(u => (
                    <li key={u} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" /> {u}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">Details</h3>
              {[
                { label: 'Category', value: product.category },
                { label: 'Regulatory Status', value: product.regulatoryStatus },
                { label: 'By', value: product.companyName },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{item.label}</p>
                  <p className="text-sm text-slate-700 mt-0.5">{item.value}</p>
                </div>
              ))}
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Modalities</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {product.modalities.map(m => (
                    <span key={m} className="text-xs bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full">{m}</span>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/directory/products" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
              <ArrowLeft size={14} /> Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
