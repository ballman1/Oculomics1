import { Heart, Eye, Shield, HelpCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import DisclaimerBlock from '../components/ui/DisclaimerBlock';

const faqs = [
  {
    q: 'Can a retinal scan diagnose conditions like diabetes or heart disease?',
    a: 'Not yet in most clinical settings. While research has shown that AI analysis of retinal images can identify people at elevated risk for certain conditions, this is different from a diagnosis. A risk signal from a retinal scan should lead to further evaluation, not a standalone clinical conclusion. Talk to your doctor about what any screening result means for you.',
  },
  {
    q: 'Is retinal imaging safe?',
    a: 'Yes. Standard fundus photography uses low-intensity visible light and is completely non-invasive. OCT uses near-infrared light and is also safe for routine clinical use. These are well-established imaging modalities used in ophthalmology worldwide.',
  },
  {
    q: 'Will my optometrist or ophthalmologist be using oculomics tools?',
    a: 'Some already do — diabetic retinopathy screening using AI is available in several clinical settings. Broader oculomics applications (e.g., cardiovascular risk from fundus images) are not yet in routine clinical use. The field is developing, and adoption in primary care and ophthalmology settings is likely to increase over the coming years.',
  },
  {
    q: 'Should I ask for a retinal scan for health screening purposes?',
    a: 'This is a conversation to have with your healthcare provider, who can consider your individual health history and risk factors. Oculomics Hub does not make personal medical recommendations. The field is promising but not yet at a stage where population-wide non-ophthalmic retinal screening has been clinically validated or recommended by major health authorities.',
  },
  {
    q: 'Where can I read more about the evidence?',
    a: 'Our Newsroom covers recent research publications and regulatory developments. The Glossary explains key technical terms. For peer-reviewed literature, PubMed and Google Scholar are good starting points using terms like "oculomics," "retinal biomarkers," or "retinal AI."',
  },
];

export default function ForPatients() {
  return (
    <>
      <div className="bg-gradient-to-br from-rose-50 to-white pt-32 pb-20 border-b border-rose-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
            <Heart size={13} />
            For Patients
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            What a retinal scan could mean for your health
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            A plain-language guide to what oculomics is, what the research currently shows, and what questions to ask your doctor.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <DisclaimerBlock />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Eye size={22} className="text-rose-500" />,
              title: 'A window into your body',
              body: 'The retina — the light-sensitive tissue at the back of your eye — contains blood vessels and nerve fibers that reflect your overall circulatory and neurological health. Researchers have found that subtle changes in these structures can be associated with conditions like heart disease, diabetes, and neurodegeneration.',
            },
            {
              icon: <Shield size={22} className="text-rose-500" />,
              title: 'Safe and non-invasive',
              body: 'Retinal imaging uses light — not radiation. Standard eye tests used in optometry and ophthalmology are the same modalities that oculomics research builds upon. There are no injections or invasive procedures involved in the imaging itself.',
            },
            {
              icon: <Heart size={22} className="text-rose-500" />,
              title: 'What\'s being studied',
              body: 'Researchers are investigating whether retinal biomarkers can help detect or predict cardiovascular disease, early diabetes, Alzheimer\'s disease, chronic kidney disease, and metabolic conditions. The evidence varies significantly across these areas — some are much further along than others.',
            },
            {
              icon: <HelpCircle size={22} className="text-rose-500" />,
              title: 'What\'s not yet clinical reality',
              body: 'With the exception of diabetic retinopathy screening (which is well-established), most oculomics applications are still in research or early clinical evaluation. This means they are not yet standard of care and are not widely available as routine tests.',
            },
          ].map(card => (
            <div key={card.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeader label="Your questions answered" title="Common questions from patients" align="left" />
          <div className="mt-8 space-y-5">
            {faqs.map(faq => (
              <details key={faq.q} className="group bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="font-semibold text-slate-900 text-sm leading-relaxed">{faq.q}</span>
                  <ArrowRight size={16} className="text-slate-400 flex-shrink-0 mt-0.5 group-open:rotate-90 transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-slate-50 border border-slate-100 rounded-2xl p-8">
          <h3 className="font-bold text-slate-900 mb-3">Questions to ask your healthcare provider</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {[
              'Are there any AI-assisted retinal screening tools available at this practice?',
              'Given my risk factors, would I be a candidate for any oculomics-based assessments?',
              'If a retinal scan shows a risk signal, what are the next steps?',
              'How do the findings from my eye exam relate to my cardiovascular or metabolic health?',
            ].map(q => (
              <li key={q} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CTASection
        title="Understand the field more deeply"
        subtitle="Read our field overview or browse the glossary to understand the science behind oculomics."
        primaryCta={{ label: 'What Is Oculomics', href: '/what-is-oculomics' }}
        secondaryCta={{ label: 'Browse the Glossary', href: '/glossary' }}
        dark={false}
      />
    </>
  );
}
