export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  tags: string[];
}

export interface DirectoryEntry {
  id: string;
  name: string;
  type: 'company' | 'product' | 'study' | 'dataset' | 'academic' | 'consortium' | 'event';
  description: string;
  tags: string[];
  location?: string;
  founded?: string;
  url?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
  category?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  abstract: string;
  evidenceLevel: 'established' | 'promising' | 'exploratory';
  tags: string[];
}

export interface AudienceCard {
  id: string;
  audience: string;
  headline: string;
  description: string;
  cta: string;
  href: string;
  icon: string;
}
