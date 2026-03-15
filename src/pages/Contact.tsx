import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const inquiryTypes = [
  'Submit Research for Editorial Consideration',
  'List My Company in the Directory',
  'Media / Press Inquiry',
  'Partnership or Collaboration',
  'Report an Error or Inaccuracy',
  'General Inquiry',
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    inquiryType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <div className="bg-[#0c2340] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Get in touch</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Whether you're submitting research, requesting a directory listing, or have a media inquiry — we'd like to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">What you can reach us about</h2>
              <ul className="space-y-2.5">
                {[
                  { title: 'Research submissions', body: 'Submit a paper or preprint for editorial consideration.' },
                  { title: 'Directory listings', body: 'Request listing of a company, product, study, or dataset.' },
                  { title: 'Media inquiries', body: 'Press and media contact for editorial background, expert commentary.' },
                  { title: 'Corrections', body: 'Report an error or factual inaccuracy in our content.' },
                  { title: 'Partnerships', body: 'Consortia, academic collaborations, or co-publication enquiries.' },
                ].map(item => (
                  <li key={item.title} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                    <div className="font-semibold text-slate-900 text-sm mb-0.5">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.body}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
              <Mail className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <div className="text-sm font-semibold text-slate-900">Response time</div>
                <div className="text-xs text-slate-500 mt-0.5">We aim to respond to all inquiries within 3 business days. Research submissions may take longer to review.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="text-emerald-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message received</h3>
                <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out. We'll review your message and get back to you within 3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Full name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formState.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="Company, university, etc."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Email address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Inquiry type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formState.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white"
                  >
                    <option value="">Select an inquiry type</option>
                    {inquiryTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                    placeholder="Describe your inquiry in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0c2340] hover:bg-[#0e2d52] text-white font-semibold rounded-xl transition-colors"
                >
                  Send Message <Send size={16} />
                </button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting this form, you agree that your information may be stored for the purpose of responding to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
