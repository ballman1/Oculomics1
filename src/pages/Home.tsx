import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Stethoscope, FlaskConical, TrendingUp, Building2, BookOpen, Eye, Microscope, Brain, Activity, Database } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import EvidenceSection from '../components/home/EvidenceSection';
import AudienceCard from '../components/ui/AudienceCard';
import NewsCard from '../components/ui/NewsCard';
import SectionHeader from '../components/ui/SectionHeader';
import NewsletterSignup from '../components/ui/NewsletterSignup';
import CTASection from '../components/ui/CTASection';
import EvidenceBadge from '../components/ui/EvidenceBadge';
import { newsItems } from '../data/news';
import { featuredCompany, featuredResearch, featuredNews, featuredDataset } from '../data/featured';
import { DirectoryCategoryCard } from '../components/ui/DirectoryCard';

const audiences = [
  {
    icon: <Heart size={22} />,
    audience: 'Patients',
    headline: 'What a retinal scan might reveal about your overall health',
    description: 'Understand what oculomics is, how eye imaging relates to conditions like diabetes and heart disease, and what questions to ask your doctor.',
    cta: 'Learn for patients',
    href: '/for-patients',
    accentColor: 'bg-rose-50 text-rose-500',
  },
  {
    icon: <Stethoscope size={22} />,
    audience: 'Clinicians',
    headline: 'Retinal biomarkers entering the clinical conversation',
    description: 'Review the evidence base for oculomics tools, understand their clinical utility and limitations, and navigate emerging referral and interpretation pathways.',
    cta: 'Clinical overview',
    href: '/for-doctors',
    accentColor: 'bg-blue-50 text-blue-500',
  },
  {
    icon: <FlaskConical size={22} />,
    audience: 'Researchers',
    headline: 'Access, collaborate, and publish in the field',
    description: 'Find datasets, open problems, consortium opportunities, and submission channels for oculomics research.',
    cta: 'Research resources',
    href: '/for-researchers',
    accentColor: 'bg-teal-50 text-teal-600',
  },
  {
    icon: <TrendingUp size={22} />,
    audience: 'Investors',
    headline: 'The oculomics market: landscape, gaps, and growth',
    description: 'An unbiased overview of the emerging oculomics sector — from funded startups and regulatory milestones to market dynamics and due diligence considerations.',
    cta: 'Investor briefing',
    href: '/for-investors',
    accentColor: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: <Building2 size={22} />,
    audience: 'Companies',
    headline: 'Navigate the commercial landscape and be discovered',
    description: 'List your product, access go-to-market intelligence, understand buyer and regulatory pathways, and connect with the oculomics ecosystem.',
    cta: 'Company resources',
    href: '/for-companies',
    accentColor: 'bg-amber-50 text-amber-600',
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Who this is for"
            title="One field. Multiple stakeholders."
            subtitle="Oculomics touches patients, clinicians, scientists, entrepreneurs, and investors alike. Explore content tailored to your perspective."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {audiences.map(a => (
              <AudienceCard key={a.audience} {...a} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-600 mb-3">The Field</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                What is oculomics?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The retina is the only place in the body where blood vessels and neural tissue can be observed non-invasively. This makes it an extraordinary window into systemic health.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                Oculomics is the study of what these retinal features — their structure, vasculature, and how they change over time — can tell us about conditions beyond the eye itself, from cardiovascular disease and diabetes to neurodegeneration and metabolic health.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Eye size={18} />, label: 'Imaging & Biomarkers' },
                  { icon: <Brain size={18} />, label: 'AI & Deep Learning' },
                  { icon: <Activity size={18} />, label: 'Systemic Disease' },
                  { icon: <Microscope size={18} />, label: 'Clinical Translation' },
                ].map(f => (
                  <div key={f.label} className="flex items-center gap-2.5 bg-white rounded-xl border border-slate-100 px-4 py-3 shadow-sm">
                    <span className="text-teal-600">{f.icon}</span>
                    <span className="text-sm font-medium text-slate-700">{f.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/what-is-oculomics" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors group">
                Read the full overview <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg"
                  alt="Retinal imaging"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-300 mb-1">Key insight</p>
                  <p className="text-sm leading-relaxed">The retina shares embryological origin with the brain, making it a potential proxy for cerebral microvascular health.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Featured content"
            title="From across the oculomics ecosystem"
            subtitle="Curated highlights from research, industry, and the clinical community."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center gap-2 mb-3">
                <Building2 size={16} className="text-blue-500" />
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Featured Company</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-1.5">{featuredCompany.name}</h3>
              <p className="text-xs text-slate-500 italic mb-2">"{featuredCompany.tagline}"</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{featuredCompany.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {featuredCompany.tags.map(t => (
                  <span key={t} className="text-xs bg-white border border-slate-200 text-slate-500 px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={16} className="text-teal-500" />
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">Featured Research</span>
              </div>
              <EvidenceBadge level={featuredResearch.evidenceLevel} size="sm" />
              <h3 className="font-bold text-slate-900 mt-2 mb-1.5 text-sm leading-snug line-clamp-3">{featuredResearch.title}</h3>
              <p className="text-xs text-slate-500 mb-2">{featuredResearch.journal}, {featuredResearch.year}</p>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{featuredResearch.summary}</p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center gap-2 mb-3">
                <Activity size={16} className="text-orange-500" />
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Latest News</span>
              </div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-2 py-0.5 rounded-full mb-2">{featuredNews.category}</span>
              <h3 className="font-bold text-slate-900 mb-1.5 text-sm leading-snug">{featuredNews.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-3">{featuredNews.excerpt}</p>
              <span className="text-xs text-slate-400">{featuredNews.date}</span>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center gap-2 mb-3">
                <Database size={16} className="text-emerald-500" />
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Featured Dataset</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-1.5">{featuredDataset.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{featuredDataset.description}</p>
              <div className="space-y-2 text-xs text-slate-500">
                <div><span className="font-medium text-slate-700">Participants:</span> {featuredDataset.participants}</div>
                <div><span className="font-medium text-slate-700">Access:</span> {featuredDataset.access}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {featuredDataset.modalities.map(m => (
                    <span key={m} className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EvidenceSection />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader
              label="Latest news"
              title="What's happening in oculomics"
              align="left"
            />
            <Link to="/newsroom" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors flex-shrink-0 ml-6">
              All news <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.slice(0, 3).map(item => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-6">
            {newsItems.slice(3, 4).map(item => (
              <NewsCard key={item.id} item={item} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Directory"
            title="Explore the oculomics ecosystem"
            subtitle="A structured directory of companies, products, studies, datasets, academic centers, and events."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { icon: <Building2 size={22} className="text-blue-600" />, label: 'Companies', count: 50, href: '/directory', color: 'bg-blue-50 border-blue-100' },
              { icon: <Activity size={22} className="text-teal-600" />, label: 'Products', count: 80, href: '/directory', color: 'bg-teal-50 border-teal-100' },
              { icon: <FlaskConical size={22} className="text-amber-600" />, label: 'Studies', count: 200, href: '/directory', color: 'bg-amber-50 border-amber-100' },
              { icon: <Database size={22} className="text-emerald-600" />, label: 'Datasets', count: 35, href: '/directory', color: 'bg-emerald-50 border-emerald-100' },
              { icon: <BookOpen size={22} className="text-orange-600" />, label: 'Academic Centers', count: 40, href: '/directory', color: 'bg-orange-50 border-orange-100' },
              { icon: <Eye size={22} className="text-rose-600" />, label: 'Consortia', count: 12, href: '/directory', color: 'bg-rose-50 border-rose-100' },
              { icon: <Microscope size={22} className="text-slate-600" />, label: 'Events', count: 8, href: '/directory', color: 'bg-slate-100 border-slate-200' },
            ].map(card => (
              <DirectoryCategoryCard key={card.label} {...card} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/directory" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0c2340] hover:bg-[#0e2d52] text-white font-semibold rounded-xl transition-colors">
              Explore Full Directory <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup />

      <CTASection
        title="Shape the conversation around oculomics"
        subtitle="Submit research for consideration, list your company in the directory, or reach out to discuss editorial collaboration."
        primaryCta={{ label: 'Submit Research', href: '/contact' }}
        secondaryCta={{ label: 'List Your Company', href: '/for-companies' }}
      />
    </>
  );
}
