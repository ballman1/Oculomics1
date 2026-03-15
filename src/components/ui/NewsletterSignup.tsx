import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-xl mb-4">
          <Mail className="text-teal-600" size={22} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Stay current with the field</h2>
        <p className="text-slate-500 mb-6">
          A concise weekly briefing on oculomics research, industry news, funding, and clinical developments. No noise.
        </p>
        {submitted ? (
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-6 py-3 rounded-xl font-medium">
            You're on the list. We'll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-xs text-slate-400 mt-4">No spam. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
