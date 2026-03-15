import { GlossaryTerm } from '../types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Biological Age',
    definition: 'An estimate of an individual\'s age based on physiological and molecular markers, as distinct from chronological age. Retinal biomarkers have been proposed as inputs to biological age estimation models.',
    relatedTerms: ['Retinal Age Gap', 'Aging Biomarker'],
    category: 'B',
  },
  {
    term: 'Biomarker',
    definition: 'A measurable indicator of a biological state or condition. In oculomics, retinal biomarkers include structural features (e.g., RNFL thickness), vascular metrics (e.g., vessel caliber), and textural patterns derived from imaging.',
    relatedTerms: ['Retinal Biomarker', 'Imaging Biomarker'],
    category: 'B',
  },
  {
    term: 'Clinical Utility',
    definition: 'The extent to which a diagnostic test improves patient outcomes or guides clinical decision-making when used in practice. Demonstrating clinical utility requires evidence beyond analytical and clinical validity, typically through interventional trials.',
    relatedTerms: ['Clinical Validity', 'Analytical Validity'],
    category: 'C',
  },
  {
    term: 'Clinical Validity',
    definition: 'The ability of a test to accurately and reliably identify or predict a disorder or condition of interest. For oculomics, clinical validity requires demonstration in well-characterized patient populations with defined endpoints.',
    category: 'C',
  },
  {
    term: 'Deep Learning',
    definition: 'A class of machine learning algorithms based on multi-layer neural networks. Deep learning has become the dominant approach for analyzing retinal images, enabling automated detection and classification of complex patterns.',
    relatedTerms: ['AI', 'Neural Network', 'Machine Learning'],
    category: 'D',
  },
  {
    term: 'External Validation',
    definition: 'Testing of a predictive model or algorithm on a dataset that was not used during model development, ideally from a different institution or geographic context. External validation is a critical threshold for assessing generalizability.',
    relatedTerms: ['Generalizability', 'Internal Validation'],
    category: 'E',
  },
  {
    term: 'Fundus Photography',
    definition: 'A specialized imaging technique that captures the posterior segment of the eye, including the retina, optic disc, macula, and vasculature. Fundus photographs are widely used in oculomics research and are increasingly accessible at scale.',
    relatedTerms: ['OCT', 'OCTA', 'Retinal Imaging'],
    category: 'F',
  },
  {
    term: 'Generalizability',
    definition: 'The degree to which findings from one study or model apply to other settings, populations, or time periods. A persistent challenge in oculomics, particularly for AI models trained on specific equipment or demographics.',
    category: 'G',
  },
  {
    term: 'Macula',
    definition: 'The central region of the retina responsible for high-acuity central vision. The macula contains a high density of cone photoreceptors and is a primary site of analysis in many oculomics applications.',
    relatedTerms: ['Fovea', 'Retina', 'OCT'],
    category: 'M',
  },
  {
    term: 'OCT (Optical Coherence Tomography)',
    definition: 'A non-invasive imaging modality that uses low-coherence light to capture micrometer-resolution cross-sectional images of retinal layers. OCT is standard of care in ophthalmology and provides rich structural data for oculomics research.',
    relatedTerms: ['OCTA', 'Fundus Photography', 'RNFL'],
    category: 'O',
  },
  {
    term: 'OCTA (Optical Coherence Tomography Angiography)',
    definition: 'An extension of OCT that captures depth-resolved maps of retinal and choroidal blood flow without contrast injection. OCTA enables quantification of capillary density and vascular metrics relevant to systemic disease.',
    relatedTerms: ['OCT', 'Vasculature', 'Perfusion'],
    category: 'O',
  },
  {
    term: 'Oculomics',
    definition: 'The field of study focused on extracting systemic health information from ocular images and biomarkers. Oculomics leverages the anatomical accessibility and imaging richness of the eye—particularly the retina—to detect, monitor, or predict conditions beyond the eye itself.',
    relatedTerms: ['Retinal Biomarker', 'Fundus Photography', 'OCT'],
    category: 'O',
  },
  {
    term: 'Optic Disc',
    definition: 'The point in the retina where the optic nerve fibers converge and exit the eye. The optic disc is visible in fundus photography and is a site of interest in glaucoma research as well as certain systemic diseases.',
    relatedTerms: ['RNFL', 'Optic Nerve', 'Glaucoma'],
    category: 'O',
  },
  {
    term: 'Retinal Age Gap',
    definition: 'The difference between an individual\'s predicted retinal age (based on imaging) and their chronological age. A positive gap (retina appears older than actual age) has been associated with increased mortality risk in preliminary studies.',
    relatedTerms: ['Biological Age', 'Aging', 'Deep Learning'],
    category: 'R',
  },
  {
    term: 'Retinal Biomarker',
    definition: 'A quantifiable characteristic derived from retinal imaging that reflects a biological state. Retinal biomarkers may be structural, vascular, or functional, and can relate to local ocular conditions or systemic disease states.',
    relatedTerms: ['Biomarker', 'Oculomics', 'OCT'],
    category: 'R',
  },
  {
    term: 'RNFL (Retinal Nerve Fiber Layer)',
    definition: 'The innermost layer of the retina, composed of axons from retinal ganglion cells. RNFL thickness is measurable by OCT and is used as a marker in glaucoma and neurological conditions including multiple sclerosis and Alzheimer\'s disease.',
    relatedTerms: ['OCT', 'Neurodegeneration', 'Optic Disc'],
    category: 'R',
  },
  {
    term: 'Sensitivity',
    definition: 'The proportion of individuals with a condition who are correctly identified by a test as positive. In oculomics screening contexts, high sensitivity is often prioritized to minimize missed diagnoses.',
    relatedTerms: ['Specificity', 'AUC', 'Clinical Validity'],
    category: 'S',
  },
  {
    term: 'Specificity',
    definition: 'The proportion of individuals without a condition who are correctly identified by a test as negative. High specificity reduces false positives, which is particularly important when downstream testing is invasive or costly.',
    relatedTerms: ['Sensitivity', 'PPV', 'Clinical Validity'],
    category: 'S',
  },
  {
    term: 'Vessel Tortuosity',
    definition: 'A measure of the curvature or winding of retinal blood vessels. Elevated vessel tortuosity has been associated with hypertension, arterial stiffness, and other systemic vascular conditions in oculomics research.',
    relatedTerms: ['Vasculature', 'Hypertension', 'OCTA'],
    category: 'V',
  },
  {
    term: 'Vessel Caliber',
    definition: 'The diameter of retinal blood vessels, typically measured in terms of arteriolar or venular width. Changes in vessel caliber have been associated with hypertension, diabetic retinopathy, and cardiovascular risk.',
    relatedTerms: ['Vessel Tortuosity', 'Vasculature', 'Hypertension'],
    category: 'V',
  },
];
