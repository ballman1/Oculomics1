export type EvidenceLevel = 'established' | 'promising' | 'exploratory' | 'vendor_claim' | 'pending_review';
export type SubmissionType = 'editorial' | 'vendor_submitted' | 'community_submitted';
export type SubmissionStatus = 'pending' | 'approved' | 'rejected' | 'flagged';

export interface EvidenceSummaryData {
  known: string[];
  promising: string[];
  uncertain: string[];
}

export interface Company {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  headquarters: string;
  foundedYear: number;
  website?: string;
  diseaseFocus: string[];
  modalities: string[];
  fundingStage: string;
  evidenceLevel: EvidenceLevel;
  submissionType: SubmissionType;
  evidenceSummary: EvidenceSummaryData;
  editorialNote?: string;
  developmentStage?: string;
  products?: { name: string; slug: string }[];
  publications?: { title: string; journal: string; year: number; url?: string }[];
  partnerships?: string[];
  is_published?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  companyName: string;
  companySlug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  modalities: string[];
  diseaseFocus: string[];
  regulatoryStatus: string;
  evidenceLevel: EvidenceLevel;
  submissionType: SubmissionType;
  targetUsers: string[];
  limitationsNotes?: string;
  evidenceLinks?: { title: string; url?: string }[];
  is_published?: boolean;
}

export interface Study {
  id: string;
  slug: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  studyType: string;
  sampleSize?: number;
  keyFinding: string;
  abstractSummary: string;
  limitations?: string;
  diseaseFocus: string[];
  modalities: string[];
  evidenceLevel: EvidenceLevel;
  doi?: string;
  is_published?: boolean;
}

export interface Dataset {
  id: string;
  slug: string;
  name: string;
  owner: string;
  shortDescription: string;
  longDescription: string;
  sampleSize?: number;
  modalities: string[];
  geography?: string;
  accessType: 'open' | 'restricted' | 'application_required';
  accessUrl?: string;
  linkedOutcomes: string[];
  relevance: string;
  evidenceLevel: EvidenceLevel;
  is_published?: boolean;
}

export interface AcademicCenter {
  id: string;
  slug: string;
  name: string;
  institution: string;
  country: string;
  shortDescription: string;
  longDescription: string;
  researchFocus: string[];
  keyInvestigators: string[];
  activeStudies?: string[];
  website?: string;
  is_published?: boolean;
}

export interface Consortium {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  geography: string;
  shortDescription: string;
  longDescription: string;
  focusAreas: string[];
  memberCount?: number;
  keyMembers?: string[];
  website?: string;
  is_published?: boolean;
}

export interface Event {
  id: string;
  slug: string;
  name: string;
  organizer: string;
  eventDate: string;
  eventDateEnd?: string;
  location: string;
  isVirtual: boolean;
  eventType: string;
  registrationUrl?: string;
  shortDescription: string;
  longDescription: string;
  topics: string[];
  is_published?: boolean;
}

export interface Submission {
  submitterName: string;
  submitterEmail: string;
  submitterOrganization?: string;
  submissionType: string;
  data: Record<string, unknown>;
}

export interface FilterState {
  [key: string]: string;
}
