import { Stethoscope, BookOpen, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import EvidenceBadge from '../components/ui/EvidenceBadge';
import DisclaimerBlock from '../components/ui/DisclaimerBlock';

const clinicalApplications = [
  { condition: 'Diabetic Retinopathy', evidenceLevel: 'established' as const, description: 'AI-based screening tools are FDA-cleared and in active clinical use. High sensitivity and specificity across multiple platforms.', considerations: 'Appropriate as a triage or adjunct tool. Teleophthalmology workflows are well-established.' },
  { condition: 'Cardiovascular Risk Stratification', evidenceLevel: 'promising' as const, description: 'Multiple large studies demonstrate predictive value of retinal vasculature for MACE. Not yet clinically validated for individual patient management.', considerations: 'Promising as a complement to existing risk scores. External validation across diverse populations is ongoing.' },
  { condition: "Alzheimer's / Neurodegeneration", evidenceLevel: 'promising' as const, description: 'RNFL thinning, OCTA changes, and amyloid-associated features have been reported in early AD. Longitudinal evidence is accumulating.', considerations: 'Pre-competitive stage. Not recommended for diagnostic use outside research settings without further validation.' },
  { condition: 'Chronic Kidney Disease', evidenceLevel: 'promising' as const, description: 'Retinal arteriolar changes correlate with eGFR and proteinuria in several cohort studies. Mechanism plausibly reflects shared microvascular pathology.', considerations: 'Mechanistically coherent but lacking prospective evidence for clinical utility in CKD management.' },
  { condition: 'Retinal Biological Age', evidenceLevel: 'exploratory' as const, description: 'AI models predict retinal age from fundus images. Retinal age gap has been associated with increased mortality in preliminary studies.', considerations: 'Scientifically interesting but not ready for clinical application. Replication and mechanistic clarity required.' },
];

export default function ForDoctors() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-white pt-32 pb-20 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
            <Stethoscope size={13} />
            For Clinicians
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Retinal biomarkers in clinical practice
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            An evidence-graded overview of oculomics applications, their current clinical readiness, and practical considerations for the practicing clinician.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <DisclaimerBlock text="The clinical evidence landscape described here is accurate as of early 2026. Evidence evolves rapidly. Clinicians should consult primary literature and institutional guidelines before adopting new diagnostic tools." />

        <div className="mt-12">
          <SectionHeader label="Clinical Applications" title="Evidence-graded overview" align="left" subtitle="Applications are graded using a three-level framework: Established, Promising, and Exploratory." />
          <div className="mt-8 space-y-5">
            {clinicalApplications.map(app => (
              <div key={app.condition} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-bold text-slate-900 text-lg">{app.condition}</h3>
                  <EvidenceBadge level={app.evidenceLevel} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Evidence summary</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{app.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Clinical considerations</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{app.considerations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="text-teal-600" size={20} />
              <h3 className="font-bold text-slate-900">Questions to evaluate any oculomics tool</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                'Has the algorithm been externally validated in a population similar to my patients?',
                'What is the reference standard? Against what endpoint was performance measured?',
                'What is the sensitivity/specificity and how does it compare to current practice?',
                'Is there evidence of clinical utility — does use of this tool improve outcomes?',
                'Has the tool been evaluated for performance across demographic subgroups?',
                'What is the regulatory status, and does it align with your local jurisdiction?',
              ].map(q => (
                <li key={q} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-amber-600" size={20} />
              <h3 className="font-bold text-slate-900">Common pitfalls in oculomics literature</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {[
                'Retrospective designs that cannot establish causation',
                'Internal validation only — performance may not transfer',
                'Studies in tertiary care populations generalized to primary care',
                'Conflating statistical association with clinical utility',
                'Lack of demographic subgroup analyses',
                'Industry-funded studies without independent replication',
              ].map(q => (
                <li key={q} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-blue-600" size={20} />
            <h3 className="font-bold text-slate-900">Further reading</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: 'Browse the Directory', href: '/directory' },
              { label: 'Latest Research News', href: '/newsroom' },
              { label: 'Submit a Research Summary', href: '/contact' },
            ].map(link => (
              <a key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:text-blue-600 transition-colors text-sm font-medium text-slate-700 group">
                {link.label} <ArrowRight size={15} className="text-slate-400 group-hover:text-blue-500" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title="Stay current with the clinical evidence"
        subtitle="Our newsroom covers the latest oculomics research, regulatory developments, and clinical trial results."
        primaryCta={{ label: 'Browse Newsroom', href: '/newsroom' }}
        secondaryCta={{ label: 'What Is Oculomics', href: '/what-is-oculomics' }}
      />
    </>
  );
}
