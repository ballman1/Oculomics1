import { TrendingUp, DollarSign, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';

const marketSignals = [
  { title: 'Addressable screening market', description: 'Diabetic retinopathy screening alone represents a global market of $3B+. Broader oculomics applications — cardiovascular, neurological — extend the addressable market substantially if clinical validation is achieved.', positive: true },
  { title: 'Regulatory precedent established', description: 'FDA 510(k) clearances for AI-based retinal tools (IDx-DR, others) demonstrate viable regulatory pathways. Each clearance lowers perceived regulatory risk for subsequent applications.', positive: true },
  { title: 'Infrastructure leverage', description: 'Retinal imaging hardware is already deployed across ophthalmology clinics, optometry practices, and telehealth platforms globally. New software can leverage existing infrastructure without capital-intensive hardware rollouts.', positive: true },
  { title: 'Reimbursement is underdeveloped', description: 'Outside of established diabetic retinopathy screening, oculomics tools lack defined reimbursement codes in most jurisdictions. This is a significant near-term commercial risk.', positive: false },
  { title: 'Clinical validation is the critical bottleneck', description: 'Many associations between retinal features and systemic conditions have been demonstrated in observational studies, but few have been validated in prospective trials with hard clinical endpoints. Demonstrating clinical utility — not just statistical association — is the threshold most payers and health systems require.', positive: false },
  { title: 'Competitive landscape is early but crowding', description: 'Several well-funded startups are targeting cardiovascular and neurological applications. First-mover advantages may accrue around proprietary training datasets and clinical partnerships.', positive: false },
];

const fundingHistory = [
  { company: 'Optain', round: 'Series B', amount: '$42M', year: '2025', focus: 'Cardiovascular risk' },
  { company: 'Mitra Biotech (Oculomics Division)', round: 'Series A', amount: '$18M', year: '2024', focus: 'Metabolic health' },
  { company: 'RetinalAI', round: 'Seed', amount: '$6M', year: '2023', focus: 'OCT analytics' },
  { company: 'NeuroRetina Dx', round: 'Series A', amount: '$22M', year: '2024', focus: 'Neuropathy' },
];

export default function ForInvestors() {
  return (
    <>
      <div className="bg-gradient-to-br from-emerald-50 to-white pt-32 pb-20 border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
            <TrendingUp size={13} />
            For Investors
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Oculomics as an investment category
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            An evidence-grounded overview of the oculomics landscape — market signals, investment trends, risks, and due diligence considerations.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 flex items-start gap-3">
          <AlertTriangle className="text-amber-500 flex-shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-amber-800">This content is for informational purposes only and does not constitute investment advice. Market data and funding figures are approximate and based on publicly available information as of early 2026.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {[
            { value: '$3B+', label: 'Current retinal AI market (DR screening)', sublabel: 'Projected to $8B by 2030' },
            { value: '15+', label: 'Funded oculomics startups', sublabel: 'Series A and above' },
            { value: '$250M+', label: 'Estimated total investment', sublabel: 'VC funding since 2020' },
          ].map(stat => (
            <div key={stat.label} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center">
              <div className="text-3xl font-bold text-[#0c2340] mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-700">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="mb-14">
          <SectionHeader label="Market Analysis" title="Signals — positive and negative" align="left" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {marketSignals.map(signal => (
              <div key={signal.title} className={`bg-white rounded-2xl border shadow-sm p-6 ${signal.positive ? 'border-l-4 border-l-emerald-400' : 'border-l-4 border-l-amber-400'}`}>
                <div className="flex items-center gap-2 mb-2">
                  {signal.positive ? <CheckCircle size={16} className="text-emerald-500" /> : <AlertTriangle size={16} className="text-amber-500" />}
                  <h3 className="font-bold text-slate-900">{signal.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <SectionHeader label="Recent Funding" title="Notable recent investments" align="left" />
          <div className="mt-6 overflow-hidden bg-white border border-slate-100 rounded-2xl shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wide">Company</th>
                  <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wide">Round</th>
                  <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wide">Amount</th>
                  <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wide">Year</th>
                  <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wide">Focus</th>
                </tr>
              </thead>
              <tbody>
                {fundingHistory.map((row, i) => (
                  <tr key={row.company} className={i < fundingHistory.length - 1 ? 'border-b border-slate-50' : ''}>
                    <td className="px-5 py-4 font-semibold text-slate-900">{row.company}</td>
                    <td className="px-5 py-4 text-slate-600">{row.round}</td>
                    <td className="px-5 py-4 font-semibold text-emerald-600">{row.amount}</td>
                    <td className="px-5 py-4 text-slate-600">{row.year}</td>
                    <td className="px-5 py-4 text-slate-500">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">Figures are illustrative and drawn from public disclosures. All data should be independently verified.</p>
        </div>

        <div className="bg-[#0c2340] rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Due diligence framework</h3>
          <p className="text-slate-300 text-sm mb-6">Key questions for evaluating oculomics investment opportunities.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'What is the quality and independence of the clinical validation evidence?',
              'Has the algorithm been externally validated across demographic subgroups?',
              'What is the regulatory pathway and current status in key markets?',
              'What are the reimbursement dynamics — is there a code or a pathway?',
              'What is the defensibility of the training dataset and IP position?',
              'What is the clinical workflow integration plan and customer acquisition strategy?',
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title="Explore the oculomics ecosystem"
        subtitle="Browse companies, products, and clinical studies in the directory. Stay current with funding news in the newsroom."
        primaryCta={{ label: 'Company Directory', href: '/directory' }}
        secondaryCta={{ label: 'Latest Funding News', href: '/newsroom' }}
      />
    </>
  );
}
