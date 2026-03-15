import { Shield, AlertTriangle, CheckCircle, FileText } from 'lucide-react';

const policies = [
  {
    icon: <Shield size={22} className="text-teal-600" />,
    title: 'Evidence vs. marketing',
    body: 'Oculomics Hub explicitly distinguishes between peer-reviewed scientific evidence and commercial claims. Marketing language from vendor submissions is not incorporated into editorial content. Where a company\'s own data is referenced, this is clearly attributed and contextualized against independent evidence.',
  },
  {
    icon: <AlertTriangle size={22} className="text-amber-600" />,
    title: 'Early-stage research identification',
    body: 'All research content is labeled according to our three-level evidence framework: Established, Promising, or Exploratory. Early-stage or preliminary findings are clearly identified as such. We do not amplify single studies as definitive findings. Replication, external validation, and clinical utility evidence are considered separately.',
  },
  {
    icon: <FileText size={22} className="text-blue-600" />,
    title: 'Vendor submissions',
    body: 'Companies and organizations may submit listings for the directory and summaries for editorial consideration. Directory listings are community-contributed and clearly labeled as such. They are not editorial endorsements and are reviewed only for factual plausibility, not clinical validity.',
  },
  {
    icon: <CheckCircle size={22} className="text-emerald-600" />,
    title: 'Medical disclaimer',
    body: 'Oculomics Hub does not provide medical advice, diagnosis, or treatment recommendations. All content is for educational and informational purposes only. Users should consult qualified healthcare professionals for all clinical decisions. Patients should not make health decisions based solely on content published on this site.',
  },
];

const standards = [
  'We cite primary sources wherever possible. Where we reference secondary sources (news, press releases), this is indicated.',
  'We do not publish undisclosed sponsored content. If a content partnership exists, it is disclosed.',
  'We correct errors promptly. Material corrections are noted on affected pages.',
  'We do not accept payment for favorable coverage, ranking, or evidence grading.',
  'AI-assisted tools may be used in content production. All published content is reviewed by a human editor.',
  'Claims from companies about their products or evidence are taken at face value in listings but are not editorially validated.',
  'All claims described as "validated" or "established" in editorial content must have published, peer-reviewed support.',
];

export default function EditorialPolicy() {
  return (
    <>
      <div className="bg-[#0c2340] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4">Editorial Policy</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            How we handle evidence, information, and commercial content
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Our editorial standards exist to protect the integrity of information in a field where distinguishing hype from evidence matters enormously.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          Oculomics is a field where the stakes of misinformation are high. Overstated evidence can lead to inappropriate clinical adoption, misallocated research funding, and patient harm. Oculomics Hub is committed to maintaining the highest practical standards for accuracy, transparency, and evidence grading.
        </p>

        <div className="space-y-6 mb-14">
          {policies.map(policy => (
            <div key={policy.title} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">{policy.icon}</div>
                <h2 className="text-lg font-bold text-slate-900">{policy.title}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{policy.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Additional editorial standards</h2>
          <ul className="space-y-3">
            {standards.map((standard, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                {standard}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#0c2340] rounded-2xl p-8 text-white">
          <h2 className="text-xl font-bold mb-3">Evidence grading framework</h2>
          <p className="text-slate-300 text-sm mb-6">We apply a three-level evidence framework consistently across all editorial content.</p>
          <div className="space-y-4">
            {[
              { level: 'Established', color: 'bg-emerald-500', description: 'Supported by multiple independent peer-reviewed studies, ideally prospective in design, with external validation across diverse populations. May include regulatory clearance. Clinical utility demonstrated or underway.' },
              { level: 'Promising — Early Stage', color: 'bg-amber-500', description: 'Supported by peer-reviewed evidence but lacking full external validation, prospective confirmation, or clinical utility data. Results are reproducible but not yet sufficient for routine clinical recommendation.' },
              { level: 'Exploratory', color: 'bg-slate-400', description: 'Preliminary or hypothesis-generating findings. Limited replication. Association not confirmed or mechanism not established. Should not inform clinical practice. Covered for scientific interest and completeness.' },
            ].map(item => (
              <div key={item.level} className="flex items-start gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${item.color} flex-shrink-0 mt-1.5`} />
                <div>
                  <div className="font-semibold text-white text-sm mb-0.5">{item.level}</div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-slate-400 mt-8 leading-relaxed">
          This policy was last reviewed in early 2026. Questions about our editorial approach can be directed to us via the <a href="/contact" className="text-teal-600 hover:underline">Contact page</a>.
        </p>
      </div>
    </>
  );
}
