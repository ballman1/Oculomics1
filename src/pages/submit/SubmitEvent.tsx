import { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import SubmitFormWrapper from '../../components/ui/SubmitFormWrapper';
import { submitEntry } from '../../services/directoryService';

export default function SubmitEvent() {
  const [form, setForm] = useState({
    eventName: '', organizer: '', eventType: '', eventDate: '', eventDateEnd: '',
    location: '', isVirtual: false, registrationUrl: '', description: '',
    topics: '', targetAudience: '', contactName: '', contactEmail: '', agreedToReview: false,
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
    const result = await submitEntry({ submitterName: form.contactName, submitterEmail: form.contactEmail, submitterOrganization: form.organizer, submissionType: 'event', data: form });
    setLoading(false);
    if (result.success) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 max-w-2xl mx-auto px-4 sm:px-6 text-center pb-20">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-emerald-500" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Event submitted</h2>
        <p className="text-slate-500 leading-relaxed">Thank you. We'll review your event and list it once approved — typically within 3 business days.</p>
      </div>
    );
  }

  return (
    <SubmitFormWrapper
      icon={<Calendar size={20} className="text-orange-600" />}
      iconBg="bg-orange-100"
      title="Submit an Event"
      subtitle="List a conference, workshop, webinar, or consortium meeting in the oculomics events directory."
      breadcrumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Events', href: '/directory/events' }, { label: 'Submit Event' }]}
      sidebarContent={
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-3 text-sm">What we list</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {['Conferences and symposia with oculomics or retinal imaging content.', 'Workshops relevant to clinical translation or AI in eye care.', 'Consortium or affiliated meetings.', 'Events must have a confirmed date and a registration or information URL.'].map(item => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Event Name <span className="text-rose-500">*</span></label>
            <input name="eventName" type="text" required value={form.eventName} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Organizing Body <span className="text-rose-500">*</span></label>
            <input name="organizer" type="text" required value={form.organizer} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Event Type <span className="text-rose-500">*</span></label>
            <select name="eventType" required value={form.eventType} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white focus:border-transparent">
              <option value="">Select…</option>
              {['Annual Conference', 'Conference Symposium', 'Workshop', 'Consortium Meeting', 'Webinar', 'Other'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Primary Audience</label>
            <select name="targetAudience" value={form.targetAudience} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white focus:border-transparent">
              <option value="">Select…</option>
              {['Clinicians', 'Researchers', 'Industry', 'Mixed', 'Investors', 'Regulators'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Start Date <span className="text-rose-500">*</span></label>
            <input name="eventDate" type="date" required value={form.eventDate} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">End Date</label>
            <input name="eventDateEnd" type="date" value={form.eventDateEnd} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Location <span className="text-rose-500">*</span></label>
            <input name="location" type="text" required value={form.location} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="City, Country or 'Virtual / Online'" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Registration / Event URL <span className="text-rose-500">*</span></label>
            <input name="registrationUrl" type="url" required value={form.registrationUrl} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="https://…" />
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <input name="isVirtual" type="checkbox" checked={form.isVirtual} onChange={handleChange} className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
          <label className="text-sm text-slate-600">This event is fully virtual or has a virtual attendance option</label>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Event Description <span className="text-rose-500">*</span></label>
          <textarea name="description" required rows={4} value={form.description} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Topics Covered</label>
          <input name="topics" type="text" value={form.topics} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Comma-separated" />
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
          <label className="text-sm text-slate-600">I confirm this event is legitimate and relevant to oculomics, and agree to editorial review. <span className="text-rose-500">*</span></label>
        </div>
        <button type="submit" disabled={!form.agreedToReview || loading} className="w-full py-3.5 bg-[#0c2340] hover:bg-[#0e2d52] disabled:opacity-50 text-white font-semibold rounded-xl transition-colors">
          {loading ? 'Submitting…' : 'Submit Event'}
        </button>
      </form>
    </SubmitFormWrapper>
  );
}
