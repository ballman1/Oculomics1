import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ArrowRight, Globe, FileText, Users, TrendingUp, Shield, DollarSign, Target } from 'lucide-react';
import CTASection from '../components/ui/CTASection';
import SectionHeader from '../components/ui/SectionHeader';

const listings = [
  { type: 'Company Profile', description: 'A dedicated listing for your company with description, tags, contact information, and links. Visible to researchers, clinicians, and investors.', free: true, href: '/submit/company' },
  { type: 'Product Listing', description: 'List individual products with detailed specifications, evidence links, and regulatory status information.', free: true, href: '/submit/product' },
  { type: 'Study Registration', description: 'Register clinical trials or observational studies to increase visibility for recruitment and collaboration.', free: true, href: '/submit/research' },
  { type: 'Event Listing', description: 'List oculomics events, webinars, and conference appearances for community discovery.', free: true, href: '/submit/event' },
];

const landscape = [
  { icon: <Shield size={18} className="text-teal-400" />, title: 'Regulatory pathways', body: 'FDA 510(k) is viable for many oculomics tools as accessories to existing cleared devices. De Novo may be required for genuinely novel indications. The EU MDR/AI Act combination creates a more complex compliance framework for European market entry.' },
  { icon: <DollarSign size={18} className="text-teal-400" />, title: 'Reimbursement strategy', body: 'CPT and HCPCS code development is critical. Health technology assessments and QALY modeling are increasingly expected by payers. Category III codes are typically a necessary intermediate step before Category I coverage.' },
  { icon: <Target size={18} className="text-teal-400" />, title: 'Buyer landscape', body: 'Primary buyers are ophthalmology practices, health systems, primary care networks, and telemedicine platforms. Each has different procurement timelines and evidence thresholds.' },
  { icon: <TrendingUp size={18} className="text-teal-400" />, title: 'Competitive dynamics', body: "Several well-funded companies are targeting cardiovascular and neurological applications. First-mover advantages may accrue around proprietary training datasets, regulatory clearances, and clinical partnerships." },
];

const audienceStats = [
  { value: '12,000+', label: 'Monthly unique visitors' },
  { value: '60%', label: 'From research / clinical backgrounds' },
  { value: '25%', label: 'Industry and investor audience' },
  { value: '38', label: 'Countries represented' },
];

export default function ForCompanies() {
  return (
    <>
      <div className="bg-gradient-to-br from-amber-50 to-white pt-32 pb-20 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
            <Building2 size={13} />
            For Companies
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Be found by the people who matter in oculomics
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            List your company, products, and studies in the oculomics directory — and access go-to-market intelligence for navigating this developing commercial landscape.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/submit/company" className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors text-sm">
              Get Listed <ArrowRight size={14} />
            </Link>
            <Link to="/directory/companies" className="inline-flex items-center gap-2 px-5 py-2.5 border border-amber-300 text-amber-700 hover:bg-amber-50 font-semibold rounded-xl transition-colors text-sm">
              Browse Directory
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14">
          {audienceStats.map(stat => (
            <div key={stat.label} className="bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-sm">
              <div className="text-2xl font-bold text-[#0c2340] mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: <Globe size={22} className="text-amber-600" />, title: 'Visibility', body: 'Get discovered by researchers, clinicians, investors, and partners actively looking for oculomics solutions. OculomicsHub reaches a curated, high-intent audience.' },
            { icon: <FileText size={22} className="text-amber-600" />, title: 'Credibility', body: 'A listing on OculomicsHub signals engagement with the evidence-based standards the field is building toward. Inclusion is not guaranteed — we review for accuracy.' },
            { icon: <Users size={22} className="text-amber-600" />, title: 'Connections', body: 'Access to an audience of academic researchers, clinicians, investors, and industry professionals actively engaged with the oculomics field.' },
          ].map(card => (
            <div key={card.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-4">{card.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="mb-14">
          <SectionHeader label="Directory Listings" title="What you can list" align="left" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {listings.map(listing => (
              <div key={listing.type} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900">{listing.type}</h3>
                  {listing.free && <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">Free</span>}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{listing.description}</p>
                <Link to={listing.href} className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                  Submit {listing.type} <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <SectionHeader label="Market Intelligence" title="Commercial landscape considerations" align="left" />
          <p className="text-slate-500 text-sm mt-2 mb-8">Key factors shaping the go-to-market environment for oculomics companies.</p>
          <div className="bg-[#0c2340] rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {landscape.map(item => (
                <div key={item.title}>
                  <div className="flex items-center gap-2.5 mb-2">
                    {item.icon}
                    <h4 className="font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-14">
          <SectionHeader label="Evidence" title="What buyers require" align="left" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { stage: 'Health systems', requirements: ['Peer-reviewed external validation', 'Demographic subgroup performance data', 'Workflow integration evidence', 'Post-market surveillance plan'] },
              { stage: 'Payers / insurers', requirements: ['Prospective clinical utility evidence', 'Health economics analysis', 'QALY or cost-effectiveness data', 'Defined CPT/HCPCS pathway'] },
              { stage: 'Primary care', requirements: ['Simple workflow integration', 'Clear referral criteria', 'Patient-facing materials', 'Low false-positive rate'] },
            ].map(tier => (
              <div key={tier.stage} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">{tier.stage}</h3>
                <ul className="space-y-2">
                  {tier.requirements.map(r => (
                    <li key={r} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle size={12} className="text-teal-500 flex-shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <h3 className="font-bold text-amber-900 mb-1">Ready to list your company?</h3>
            <p className="text-sm text-amber-700">Fill out the submission form and we'll review your listing within 1–2 weeks.</p>
          </div>
          <Link to="/submit/company" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#0c2340] hover:bg-[#0e2d52] text-white font-semibold rounded-xl transition-colors text-sm">
            Get Listed <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <CTASection
        title="Navigate the oculomics commercial landscape"
        subtitle="Understand the competitive dynamics, regulatory environment, and customer landscape before going to market."
        primaryCta={{ label: 'Submit Your Company', href: '/submit/company' }}
        secondaryCta={{ label: 'Browse Directory', href: '/directory' }}
      />
    </>
  );
}
