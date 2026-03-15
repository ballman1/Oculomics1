import { Consortium } from '../types/directory';

export const consortiaData: Consortium[] = [
  {
    id: '1',
    slug: 'eyebiomarker-consortium',
    name: 'EyeBiomarker Consortium',
    shortName: 'EBC',
    geography: 'International',
    shortDescription: 'International consortium of 42 academic and clinical institutions establishing standardised methods and a prospective registry for retinal biomarker research.',
    longDescription: 'The EyeBiomarker Consortium (EBC) was founded in 2021 to address the fragmentation and lack of standardisation that has hampered clinical translation of oculomics biomarkers. The consortium operates through five working groups covering imaging standardisation, data sharing, statistical methodology, regulatory strategy, and patient & public involvement.\n\nThe EBC\'s core project is a prospective registry enrolling 50,000 patients across 42 sites in 18 countries, with standardised imaging protocols, data collection, and linked outcome follow-up. The registry will serve as the reference dataset for validation studies and as a resource for algorithm development.',
    focusAreas: ['Biomarker Standardisation', 'Prospective Registry', 'Regulatory Strategy', 'Data Sharing', 'Patient Engagement'],
    memberCount: 42,
    keyMembers: ['UCL Institute of Ophthalmology', 'Singapore Eye Research Institute', 'Doheny Eye Institute', 'CERA Melbourne', 'Charité Berlin', 'Erasmus Medical Center'],
    website: 'https://eyebiomarker.example.org',
    is_published: true,
  },
  {
    id: '2',
    slug: 'riai',
    name: 'Retinal Imaging AI Initiative',
    shortName: 'RIAI',
    geography: 'International',
    shortDescription: 'Open benchmarking initiative for retinal AI tools, providing standardised evaluation datasets, performance benchmarks, and a voluntary certification framework.',
    longDescription: 'The Retinal Imaging AI Initiative (RIAI) was established to create the infrastructure for transparent, reproducible evaluation of AI tools for retinal imaging. The initiative publishes annual benchmark results across 12 clinical tasks, maintains reference datasets, and is developing a certification framework to support regulatory submissions and procurement decisions.\n\nRIAI operates as an open initiative with academic leadership, industry participation on a fee basis, and observer status for regulatory agencies including FDA and EMA. The initiative\'s benchmark suite is increasingly referenced in FDA guidance for AI-based retinal imaging devices.',
    focusAreas: ['AI Benchmarking', 'Performance Standards', 'Certification', 'Open Data', 'Regulatory Support'],
    memberCount: 28,
    keyMembers: ['UCL', 'Stanford Vision Lab', 'Google Health', 'Topcon Healthcare', 'Heidelberg Engineering', 'EyePACS'],
    website: 'https://riai.example.org',
    is_published: true,
  },
  {
    id: '3',
    slug: 'octn',
    name: 'Oculomics Clinical Translation Network',
    shortName: 'OCTN',
    geography: 'United Kingdom',
    shortDescription: 'UK NHS-academic network facilitating the clinical translation and NICE evaluation of oculomics technologies, with links to NIHR and NHS England.',
    longDescription: 'The Oculomics Clinical Translation Network (OCTN) was established by a group of UK academic medical centres and NHS trusts to accelerate the clinical adoption of validated oculomics technologies through the NHS. OCTN coordinates NIHR-funded clinical trials, provides infrastructure for NHS pilot studies, and engages with NICE and NHS England on coverage and commissioning pathways.\n\nThe network\'s current priority areas are cardiovascular risk oculomics, diabetic retinopathy AI integration, and neurological biomarker development. OCTN also runs the Oculomics Clinical Fellowship Programme, training the next generation of clinician-scientists in the field.',
    focusAreas: ['NHS Integration', 'NICE Evaluation', 'Clinical Trials', 'NIHR Funding', 'Clinical Training'],
    memberCount: 18,
    keyMembers: ['Moorfields Eye Hospital', 'Manchester Royal Eye Hospital', 'Oxford Eye Hospital', 'NHS England', 'NIHR'],
    website: 'https://octn.example.nhs.uk',
    is_published: true,
  },
];

export const consortiumFocusOptions = ['All', 'Standardisation', 'AI Benchmarking', 'Clinical Translation', 'Data Sharing', 'Regulatory', 'Patient Engagement'];
