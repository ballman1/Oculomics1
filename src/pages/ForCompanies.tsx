import { Building2, CheckCircle, ArrowRight, Globe, FileText, Users } from 'lucide-react';
import CTASection from '../components/ui/CTASection';
import SectionHeader from '../components/ui/SectionHeader';

const listings = [
  { type: 'Company Profile', description: 'A dedicated listing for your company with description, tags, contact information, and links. Visible to researchers, clinicians, and investors.', free: true },
  { type: 'Product Listing', description: 'List individual products with detailed specifications, evidence links, and regulatory status information.', free: true },
  { type: 'Study Registration', description: 'Register clinical trials or observational studies to increase visibility for recruitment and collaboration.', free: true },
  { type: 'Dataset Listing', description: 'List proprietary or access-controlled datasets available for research collaboration.', free: true },
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
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: <Globe size={22} className="text-amber-600" />, title: 'Visibility', body: 'Get discovered by researchers, clinicians, investors, and partners actively looking for oculomics solutions.' },
            { icon: <FileText size={22} className="text-amber-600" />, title: 'Credibility', body: 'A listing on Oculomics Hub signals engagement with the evidence-based standards the field is building toward.' },
            { icon: <Users size={22} className="text-amber-600" />, title: 'Connections', body: 'Access to the Oculomics Hub audience: a mix of academic researchers, clinicians, investors, and industry professionals.' },
          ].map(card => (
            <div key={card.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-4">{card.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <SectionHeader label="Directory Listings" title="What you can list" align="left" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {listings.map(listing => (
            <div key={listing.type} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900">{listing.type}</h3>
                {listing.free && <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">Free</span>}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{listing.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-[#0c2340] rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Commercial landscape considerations</h3>
          <p className="text-slate-300 text-sm mb-6">Key factors shaping the go-to-market environment for oculomics companies.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              { title: 'Regulatory pathways', body: 'FDA 510(k) is viable for many oculomics tools as accessories to existing cleared devices. De Novo may be required for genuinely novel indications.' },
              { title: 'Reimbursement strategy', body: 'CPT and HCPCS code development is critical. Health technology assessments and QALY modeling are increasingly expected by payers.' },
              { title: 'Buyer landscape', body: 'Primary buyers are ophthalmology practices, health systems, primary care networks, and telemedicine platforms. Each has different procurement timelines and evidence thresholds.' },
              { title: 'Evidence requirements', body: 'Health system buyers increasingly require peer-reviewed external validation evidence, not just internal performance data.' },
            ].map(item => (
              <div key={item.title}>
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle size={14} className="text-teal-400" />
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-5">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="font-bold text-slate-900 mb-2">Ready to list your company?</h3>
          <p className="text-slate-500 mb-6 text-sm">Fill out the contact form and we'll guide you through the listing process.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0c2340] hover:bg-[#0e2d52] text-white font-semibold rounded-xl transition-colors">
            Get Listed <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <CTASection
        title="Navigate the oculomics commercial landscape"
        subtitle="Understand the competitive dynamics, regulatory environment, and customer landscape before going to market."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'Browse Competitors', href: '/directory' }}
      />
    </>
  );
}
