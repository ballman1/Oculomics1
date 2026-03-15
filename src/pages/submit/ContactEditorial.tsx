import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import SubmitFormWrapper from '../../components/ui/SubmitFormWrapper';
import { submitEntry } from '../../services/directoryService';

const contactReasons = [
  'Report an error or inaccuracy',
  'Request a correction to a listing',
  'Question about editorial policy',
  'Dispute an evidence rating',
  'General editorial inquiry',
  'Media / press inquiry',
  'Other',
];

export default function ContactEditorial() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', reason: '', subject: '', message: '', pageUrl: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await submitEntry({ submitterName: form.name, submitterEmail: form.email, submitterOrganization: form.organization, submissionType: 'editorial_contact', data: form });
    setLoading(false);
    if (result.success) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 max-w-2xl mx-auto px-4 sm:px-6 text-center pb-20">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-emerald-500" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Message received</h2>
        <p className="text-slate-500 leading-relaxed">Thank you for contacting the editorial team. We aim to respond within 3 business days.</p>
      </div>
    );
  }

  const showPageUrl = ['Report an error or inaccuracy', 'Request a correction to a listing', 'Dispute an evidence rating'].includes(form.reason);

  return (
    <SubmitFormWrapper
      icon={<Mail size={20} className="text-slate-600" />}
      iconBg="bg-slate-100"
      title="Contact Editorial Team"
      subtitle="Report errors, request corrections, or send editorial inquiries to the Oculomics Hub team."
      breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Contact Editorial' }]}
      sidebarContent={
        <>
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm mb-3">Editorial commitments</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {['We correct factual errors promptly, usually within 24–48 hours.', 'Corrections are noted transparently on affected pages.', 'All evidence ratings follow our published grading framework.', 'We respond to substantive editorial queries within 3 business days.'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-teal-500 flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3">
            <AlertCircle size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-700 leading-relaxed">
              This form is for editorial inquiries only. For new submissions, use the appropriate directory submission form.
            </p>
          </div>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name <span className="text-rose-500">*</span></label>
            <input name="name" type="text" required value={form.name} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address <span className="text-rose-500">*</span></label>
            <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Organization / Affiliation</label>
          <input name="organization" type="text" value={form.organization} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Reason for Contact <span className="text-rose-500">*</span></label>
          <select name="reason" required value={form.reason} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white focus:border-transparent">
            <option value="">Select a reason…</option>
            {contactReasons.map(r => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Subject <span className="text-rose-500">*</span></label>
          <input name="subject" type="text" required value={form.subject} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
        </div>
        {showPageUrl && (
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Page URL (if applicable)</label>
            <input name="pageUrl" type="text" value={form.pageUrl} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="e.g. /directory/companies/optain" />
          </div>
        )}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message <span className="text-rose-500">*</span></label>
          <textarea name="message" required rows={6} value={form.message} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" placeholder="For error reports, include the current text and what the correct information should be." />
        </div>
        <button type="submit" disabled={loading} className="w-full py-3.5 bg-[#0c2340] hover:bg-[#0e2d52] disabled:opacity-50 text-white font-semibold rounded-xl transition-colors">
          {loading ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </SubmitFormWrapper>
  );
}
