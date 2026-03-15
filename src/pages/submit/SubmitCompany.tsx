import { useState } from 'react';
import { Building2, CheckCircle } from 'lucide-react';
import SubmitFormWrapper from '../../components/ui/SubmitFormWrapper';
import { submitEntry } from '../../services/directoryService';

export default function SubmitCompany() {
  const [form, setForm] = useState({
    companyName: '', website: '', summary: '', diseaseFocus: '', modality: '',
    productStage: '', regulatoryStatus: '', publicationLinks: '', contactName: '',
    contactEmail: '', agreedToReview: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await submitEntry({
      submitterName: form.contactName,
      submitterEmail: form.contactEmail,
      submissionType: 'company',
      data: form,
    });
    setLoading(false);
    if (result.success) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 max-w-2xl mx-auto px-4 sm:px-6 text-center pb-20">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-emerald-500" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Submission received</h2>
        <p className="text-slate-500 leading-relaxed">Thank you. Our editorial team will review your company listing and respond within 5 business days.</p>
      </div>
    );
  }

  return (
    <SubmitFormWrapper
      icon={<Building2 size={20} className="text-blue-600" />}
      iconBg="bg-blue-100"
      title="List Your Company"
      subtitle="Submit your oculomics company for listing in the Oculomics Hub directory. All submissions are reviewed by our editorial team."
      breadcrumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Companies', href: '/directory/companies' }, { label: 'List Your Company' }]}
      sidebarContent={
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-3 text-sm">What we list</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {['Companies with products or research directly relevant to oculomics.', 'We list at all stages, from pre-seed research to commercial.', 'All submissions are assessed for evidence quality and accuracy.', 'Vendor submissions are clearly labelled as such.'].map(item => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-teal-500 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company Name <span className="text-rose-500">*</span></label>
            <input name="companyName" type="text" required value={form.companyName} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Website</label>
            <input name="website" type="url" value={form.website} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="https://…" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company Summary <span className="text-rose-500">*</span></label>
          <textarea name="summary" required rows={4} value={form.summary} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" placeholder="Describe what your company does and its relevance to oculomics." />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Disease Focus</label>
            <input name="diseaseFocus" type="text" value={form.diseaseFocus} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="e.g. Cardiovascular, Alzheimer's, DR" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Imaging Modality</label>
            <input name="modality" type="text" value={form.modality} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="e.g. Fundus, OCT, OCTA" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Development Stage</label>
            <select name="productStage" value={form.productStage} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white focus:border-transparent">
              <option value="">Select…</option>
              {['Pre-clinical Research', 'Clinical Trial', 'Regulatory Submission', 'CE Marked / FDA Cleared', 'Commercial'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Regulatory Status</label>
            <input name="regulatoryStatus" type="text" value={form.regulatoryStatus} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="e.g. CE Mark, FDA 510(k), Not yet cleared" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Publication Links (DOIs or URLs)</label>
          <textarea name="publicationLinks" rows={2} value={form.publicationLinks} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" placeholder="One per line" />
        </div>
        <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Contact Name <span className="text-rose-500">*</span></label>
            <input name="contactName" type="text" required value={form.contactName} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Contact Email <span className="text-rose-500">*</span></label>
            <input name="contactEmail" type="email" required value={form.contactEmail} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <input name="agreedToReview" type="checkbox" checked={form.agreedToReview} onChange={handleChange} className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
          <label className="text-sm text-slate-600">I agree to editorial review and understand that submissions may be listed as vendor-submitted. <span className="text-rose-500">*</span></label>
        </div>
        <button type="submit" disabled={!form.agreedToReview || loading} className="w-full py-3.5 bg-[#0c2340] hover:bg-[#0e2d52] disabled:opacity-50 text-white font-semibold rounded-xl transition-colors">
          {loading ? 'Submitting…' : 'Submit Company'}
        </button>
      </form>
    </SubmitFormWrapper>
  );
}
