import { useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import SubmitFormWrapper from '../../components/ui/SubmitFormWrapper';
import { submitEntry } from '../../services/directoryService';

export default function SubmitResearch() {
  const [form, setForm] = useState({
    title: '', authors: '', journal: '', year: '', abstract: '', diseaseArea: '',
    modality: '', doi: '', conflictDisclosure: '', isPeerReviewed: false,
    contactName: '', contactEmail: '', agreedToReview: false,
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
    const result = await submitEntry({ submitterName: form.contactName, submitterEmail: form.contactEmail, submissionType: 'research', data: form });
    setLoading(false);
    if (result.success) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 max-w-2xl mx-auto px-4 sm:px-6 text-center pb-20">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-emerald-500" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Research submitted</h2>
        <p className="text-slate-500 leading-relaxed">Thank you. Our editorial team will review and add qualifying studies to the research directory.</p>
      </div>
    );
  }

  return (
    <SubmitFormWrapper
      icon={<BookOpen size={20} className="text-emerald-600" />}
      iconBg="bg-emerald-100"
      title="Submit Research"
      subtitle="Suggest a peer-reviewed study or preprint for inclusion in the Oculomics Hub research directory."
      breadcrumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Studies', href: '/directory/studies' }, { label: 'Submit Research' }]}
      sidebarContent={
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-3 text-sm">Submission criteria</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {['Peer-reviewed studies in journals or preprints on established servers.', 'Directly relevant to retinal biomarkers for systemic disease.', 'Must have a DOI, PubMed ID, or preprint URL.', 'Conflict of interest disclosure required.'].map(item => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Study Title <span className="text-rose-500">*</span></label>
          <input name="title" type="text" required value={form.title} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Authors <span className="text-rose-500">*</span></label>
            <input name="authors" type="text" required value={form.authors} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Surname A, Surname B, et al." />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Journal / Preprint Server <span className="text-rose-500">*</span></label>
            <input name="journal" type="text" required value={form.journal} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Year <span className="text-rose-500">*</span></label>
            <input name="year" type="number" required min="2000" max="2030" value={form.year} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">DOI or Link <span className="text-rose-500">*</span></label>
            <input name="doi" type="text" required value={form.doi} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="10.xxxx/xxxx or URL" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Abstract / Summary <span className="text-rose-500">*</span></label>
          <textarea name="abstract" required rows={5} value={form.abstract} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Disease Area</label>
            <input name="diseaseArea" type="text" value={form.diseaseArea} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Imaging Modality</label>
            <input name="modality" type="text" value={form.modality} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Conflict of Interest Disclosure</label>
          <textarea name="conflictDisclosure" rows={2} value={form.conflictDisclosure} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" placeholder="e.g. 'Author X is an employee of Company Y.' or 'None declared.'" />
        </div>
        <div className="flex items-center gap-2.5">
          <input name="isPeerReviewed" type="checkbox" checked={form.isPeerReviewed} onChange={handleChange} className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
          <label className="text-sm text-slate-600">This study has been peer-reviewed and published (not preprint-only)</label>
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
          <label className="text-sm text-slate-600">I confirm the information is accurate and agree to editorial review. <span className="text-rose-500">*</span></label>
        </div>
        <button type="submit" disabled={!form.agreedToReview || loading} className="w-full py-3.5 bg-[#0c2340] hover:bg-[#0e2d52] disabled:opacity-50 text-white font-semibold rounded-xl transition-colors">
          {loading ? 'Submitting…' : 'Submit Research'}
        </button>
      </form>
    </SubmitFormWrapper>
  );
}
