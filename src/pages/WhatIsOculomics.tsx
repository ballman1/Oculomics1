import { Eye, Brain, Activity, Camera, Microscope, Users, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import DisclaimerBlock from '../components/ui/DisclaimerBlock';

const sections = [
  {
    icon: <Eye size={24} />,
    title: 'The eye as a diagnostic window',
    content: 'The retina is unique in human anatomy. It is the only part of the central nervous system that can be directly visualized without surgery or radiation. Blood vessels, neural tissue, and supporting cells are all accessible through standard ophthalmological imaging — providing a non-invasive view into the state of the body\'s micro-circulation and neural health.\n\nThis accessibility, combined with advances in digital imaging and artificial intelligence, has given rise to oculomics: the systematic extraction of systemic health information from the eye.',
  },
  {
    icon: <Brain size={24} />,
    title: 'The retina and systemic disease',
    content: 'The retinal vasculature is anatomically continuous with the systemic circulation, and retinal neurons share embryological origin with the brain. This means that changes in retinal blood vessels and neural layers often reflect broader systemic pathology.\n\nResearchers have identified associations between retinal features and conditions including cardiovascular disease, Type 2 diabetes, hypertension, chronic kidney disease, neurodegenerative diseases (Alzheimer\'s, Parkinson\'s, multiple sclerosis), and metabolic syndrome. The degree of evidence varies substantially across these associations.',
  },
  {
    icon: <Camera size={24} />,
    title: 'Imaging modalities in oculomics',
    content: 'The field draws primarily on four imaging modalities:\n\n• Fundus Photography: A two-dimensional image of the retinal surface capturing vasculature, optic disc, and macula. Widely available and the basis for most large-scale oculomics datasets.\n\n• Optical Coherence Tomography (OCT): Provides high-resolution cross-sectional images of retinal layers, enabling measurement of structural changes such as RNFL thickness.\n\n• OCT Angiography (OCTA): An extension of OCT that maps retinal blood flow without contrast injection, enabling quantification of capillary density and perfusion.\n\n• Scanning Laser Ophthalmoscopy (SLO): Provides high-contrast en-face retinal imaging with applications in optic nerve and vascular analysis.',
  },
  {
    icon: <Microscope size={24} />,
    title: 'Biomarkers and AI',
    content: 'Oculomics biomarkers range from manually measured parameters (e.g., vessel caliber, RNFL thickness) to complex AI-derived features that humans cannot directly observe.\n\nDeep learning models trained on fundus photographs can predict sex, age, blood pressure, HbA1c, and cardiovascular risk with accuracy that has surprised the field. The mechanisms behind some of these associations are not yet fully understood — a point that remains scientifically important and clinically relevant.\n\nReproducibility, generalizability across imaging equipment and demographics, and clinical utility remain active areas of research.',
  },
  {
    icon: <Activity size={24} />,
    title: 'Clinical translation',
    content: 'Translating oculomics research into clinical tools requires navigating analytical validity, clinical validity, and clinical utility — three distinct and progressively demanding thresholds.\n\nAs of 2025, a small number of oculomics-adjacent tools have received FDA clearance (notably in diabetic retinopathy detection). The broader oculomics field — screening for cardiovascular risk, neurodegeneration, or kidney disease via retinal imaging — is still primarily in the research and early clinical evaluation phase.\n\nRegulatory, reimbursement, and workflow integration challenges represent significant but navigable barriers to broader clinical adoption.',
  },
  {
    icon: <Users size={24} />,
    title: 'Who does this matter for?',
    content: 'Oculomics has different implications depending on your role:\n\nPatients: The potential for a non-invasive eye scan to contribute to earlier detection of serious conditions.\n\nClinicians: New tools that could complement existing risk stratification — but require careful evaluation before adoption.\n\nResearchers: A field with rich public datasets, open methodological challenges, and growing funding.\n\nInvestors: An emerging sector with a relatively small number of well-funded startups and a large addressable market.\n\nCompanies: A developing commercial landscape with regulatory, reimbursement, and adoption challenges to navigate.',
  },
];

export default function WhatIsOculomics() {
  return (
    <>
      <div className="bg-[#0c2340] py-24 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4">Field Overview</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">What is Oculomics?</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            A field-level introduction to oculomics: what it is, what the evidence shows, how imaging and AI intersect, and what the realistic promise and limitations are.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <DisclaimerBlock />

        <div className="mt-12 prose prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed">
            Oculomics is the scientific and clinical field focused on extracting information about systemic health — conditions and states beyond the eye itself — from ocular imaging data. The term is a portmanteau of <em>ocular</em> and <em>omics</em>, reflecting its data-driven, biomarker-centric approach.
          </p>
          <p className="text-slate-500 leading-relaxed mt-4">
            The field has grown substantially over the past decade, accelerated by three converging forces: the widespread adoption of digital retinal imaging, the availability of large population-level datasets with linked health records, and the rapid development of deep learning algorithms capable of identifying subtle patterns in imaging data.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.content.split('\n\n').map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed whitespace-pre-line">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="text-emerald-600" size={20} />
              <h3 className="font-bold text-emerald-900">Genuine promise</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                'Non-invasive data collection at scale',
                'Imaging already integrated into clinical workflows',
                'Retina reflects both neural and vascular health',
                'AI can detect patterns invisible to the human eye',
                'Potential for population-level screening economics',
              ].map(p => (
                <li key={p} className="flex items-start gap-2 text-sm text-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-amber-600" size={20} />
              <h3 className="font-bold text-amber-900">Real limitations</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                'Many associations lack clinical utility evidence',
                'Generalizability across demographics is unproven',
                'Mechanisms behind AI predictions often unexplained',
                'Regulatory and reimbursement pathways are nascent',
                'Risk of hype outpacing the evidence base',
              ].map(l => (
                <li key={l} className="flex items-start gap-2 text-sm text-amber-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-2">Explore further</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: 'For Patients', href: '/for-patients' },
              { label: 'For Researchers', href: '/for-researchers' },
              { label: 'Browse the Glossary', href: '/glossary' },
            ].map(link => (
              <a key={link.label} href={link.href} className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 hover:border-teal-300 hover:text-teal-600 transition-colors text-sm font-medium text-slate-700 group">
                {link.label} <ArrowRight size={15} className="text-slate-400 group-hover:text-teal-500" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title="Explore oculomics from your perspective"
        subtitle="Whether you're a patient, clinician, researcher, or investor, there's a tailored starting point for you."
        primaryCta={{ label: 'Choose your path', href: '/' }}
        secondaryCta={{ label: 'Browse the Directory', href: '/directory' }}
      />
    </>
  );
}
