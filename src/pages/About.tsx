import { Eye, Shield, BookOpen, Users } from 'lucide-react';
import CTASection from '../components/ui/CTASection';

export default function About() {
  return (
    <>
      <div className="bg-[#0c2340] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4">About</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            A neutral hub for a field that matters
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Oculomics Hub was built to serve the entire oculomics ecosystem — not any single commercial or institutional interest.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="prose prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Oculomics is an emerging field with real scientific promise — and real risk of being overrun by hype before its evidence base matures. Oculomics Hub exists to provide a clear-eyed, evidence-aware perspective on what the field has demonstrated, what it is working toward, and where the gaps remain.
          </p>
          <p className="text-slate-500 leading-relaxed mb-10">
            We serve patients who want to understand what retinal imaging might mean for their health, clinicians who need to evaluate the evidence before adopting new tools, researchers looking for datasets and collaboration opportunities, investors assessing the landscape, and companies navigating a complex commercial environment. We aim to be useful to all of them — while being captured by none of them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {[
            {
              icon: <Shield size={22} className="text-teal-600" />,
              title: 'Editorial independence',
              body: 'Oculomics Hub is not funded by, affiliated with, or editorially directed by any company in the oculomics space. Commercial listings are clearly labeled as such and are separate from editorial content.',
            },
            {
              icon: <BookOpen size={22} className="text-teal-600" />,
              title: 'Evidence awareness',
              body: 'We distinguish between what is clinically validated, what is promising but unproven, and what is exploratory. We do not amplify marketing claims as scientific findings.',
            },
            {
              icon: <Eye size={22} className="text-teal-600" />,
              title: 'Field-wide scope',
              body: 'We cover the full oculomics ecosystem — basic research, clinical translation, regulatory pathways, commercial development, and patient implications — without privileging any one part.',
            },
            {
              icon: <Users size={22} className="text-teal-600" />,
              title: 'Multi-stakeholder service',
              body: 'Our content is designed for multiple audiences: patients, clinicians, researchers, investors, and industry. We tailor depth and language accordingly without changing the underlying facts.',
            },
          ].map(card => (
            <div key={card.title} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4">{card.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our mission</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            To serve as the neutral, educational, and evidence-aware central hub for the field of oculomics — helping everyone who interacts with the field make better-informed decisions.
          </p>
          <p className="text-slate-500 leading-relaxed">
            We believe that the eye's potential as a window to systemic health is genuine and scientifically important. We also believe that realizing that potential requires rigorous standards, honest communication about what is and isn't known, and a shared commitment to evidence-based practice. Oculomics Hub is our contribution to building that culture.
          </p>
        </div>

        <div className="bg-[#0c2340] rounded-2xl p-8 text-white">
          <h2 className="text-xl font-bold mb-4">How the site is maintained</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div>
              <h3 className="font-semibold text-white mb-2">Editorial content</h3>
              <p>News, research summaries, and educational content are written and reviewed by our editorial team. We apply consistent evidence-grading standards and do not publish unverified claims.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Directory listings</h3>
              <p>Companies, products, and studies can submit listings. These are reviewed for basic accuracy and clearly labeled as community-submitted. They are not editorial endorsements.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Research submissions</h3>
              <p>Researchers can submit papers for editorial consideration. We do not guarantee coverage, and our coverage is not peer review. We provide summaries with appropriate context and limitations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Medical disclaimer</h3>
              <p>All content is for educational purposes only. Nothing on this site constitutes medical advice, diagnosis, or treatment recommendations.</p>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Explore Oculomics Hub"
        subtitle="Start with the field overview, browse the directory, or dive into the latest news."
        primaryCta={{ label: 'What Is Oculomics', href: '/what-is-oculomics' }}
        secondaryCta={{ label: 'Browse Directory', href: '/directory' }}
      />
    </>
  );
}
