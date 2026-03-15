export const featuredCompany = {
  name: 'Optain',
  tagline: 'Turning a routine eye scan into a cardiovascular risk report',
  description: 'Optain\'s platform analyzes standard fundus photographs using a proprietary deep learning pipeline to generate cardiovascular risk scores validated across three independent population cohorts.',
  tags: ['AI', 'Cardiovascular', 'Screening'],
  location: 'Cambridge, MA',
  founded: '2019',
  stage: 'Series B',
};

export const featuredResearch = {
  title: 'Retinal Microvascular Features as Predictors of Incident Type 2 Diabetes: A Prospective Analysis of 24,000 Participants',
  authors: 'Zhang Y, Okonkwo R, Müller K, et al.',
  journal: 'The Lancet Digital Health',
  year: 2025,
  summary: 'This large prospective study found that automated measurement of retinal arteriolar caliber and fractal dimension predicted incident T2DM 3–5 years before clinical diagnosis, independent of conventional risk factors.',
  evidenceLevel: 'established' as const,
  tags: ['Diabetes', 'Prospective', 'Prediction'],
};

export const featuredNews = {
  title: 'FDA Clears First AI Retinal Tool for Neuropathy Risk',
  excerpt: 'NeuroRetina Dx receives 510(k) clearance for automated RNFL analysis in diabetic patients, marking a regulatory milestone for the oculomics field.',
  date: 'February 28, 2026',
  category: 'Regulation',
};

export const featuredDataset = {
  name: 'UK Biobank Retinal Imaging Sub-study',
  description: 'Fundus images and macular OCT scans from 67,321 participants with longitudinal linkage to primary care, secondary care, and mortality records.',
  participants: '67,321',
  modalities: ['Fundus Photography', 'Macula OCT'],
  access: 'Application-based',
};

export const evidenceItems = {
  established: [
    'Diabetic retinopathy detection from fundus images (FDA-cleared)',
    'Glaucoma suspect identification via RNFL thinning',
    'Hypertensive retinopathy grading',
    'Age-related macular degeneration detection',
  ],
  promising: [
    'Cardiovascular event risk prediction from retinal vasculature',
    'Early Alzheimer\'s detection via RNFL / OCTA changes',
    'CKD progression prediction from microvascular features',
    'Metabolic syndrome identification',
  ],
  exploratory: [
    'Retinal biological age as a mortality predictor',
    'Mental health correlates in retinal features',
    'Cancer risk stratification via retinal changes',
    'Pharmacological response prediction',
  ],
};
