import { Link } from 'react-router-dom';
import { Eye, Twitter, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="bg-[#0a1e36] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
                <Eye className="text-teal-400" size={18} />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Oculomics<span className="text-teal-400">Hub</span></span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              The central reference point for the field of oculomics — connecting research, industry, clinicians, and patients around a shared understanding of what the eye can tell us.
            </p>
            {submitted ? (
              <p className="text-sm text-teal-400 font-medium">You're subscribed. Welcome.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <label htmlFor="footer-email" className="sr-only">Email for newsletter</label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2.5 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 min-w-0"
                />
                <button type="submit" className="px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Learn</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'What Is Oculomics', href: '/what-is-oculomics' },
                { label: 'For Patients', href: '/for-patients' },
                { label: 'For Doctors', href: '/for-doctors' },
                { label: 'For Researchers', href: '/for-researchers' },
                { label: 'Glossary', href: '/glossary' },
              ].map(l => (
                <li key={l.href}><Link to={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Industry</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'For Investors', href: '/for-investors' },
                { label: 'For Companies', href: '/for-companies' },
                { label: 'Directory', href: '/directory' },
                { label: 'Newsroom', href: '/newsroom' },
              ].map(l => (
                <li key={l.href}><Link to={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">About</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Editorial Policy', href: '/editorial-policy' },
                { label: 'Contact', href: '/contact' },
              ].map(l => (
                <li key={l.href}><Link to={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Oculomics Hub. For educational purposes only. Not medical advice.
          </p>
          <p className="text-xs text-slate-600 max-w-xl text-center md:text-right leading-relaxed">
            The information on this site is intended for educational purposes and does not constitute medical advice, diagnosis, or treatment recommendations. Always consult a qualified healthcare professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
