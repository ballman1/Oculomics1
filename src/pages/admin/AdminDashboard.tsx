import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Clock, Flag, Building2, Package, BookOpen, Database, GraduationCap, Users, Calendar, Eye, Mail } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { getAdminStats } from '../../services/directoryService';

interface SubmissionRow {
  id: string;
  submission_type: string;
  submitter_name: string;
  submitter_email: string;
  submitter_organization: string | null;
  status: string;
  created_at: string;
  data: Record<string, unknown>;
}

const typeIcons: Record<string, React.ReactNode> = {
  company: <Building2 size={14} />, product: <Package size={14} />, research: <BookOpen size={14} />,
  dataset: <Database size={14} />, event: <Calendar size={14} />, academic: <GraduationCap size={14} />,
  consortium: <Users size={14} />, editorial_contact: <Mail size={14} />,
};

const typeColors: Record<string, string> = {
  company: 'bg-blue-50 text-blue-700 border-blue-100',
  product: 'bg-teal-50 text-teal-700 border-teal-100',
  research: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  dataset: 'bg-amber-50 text-amber-700 border-amber-100',
  event: 'bg-orange-50 text-orange-700 border-orange-100',
  academic: 'bg-slate-100 text-slate-700 border-slate-200',
  consortium: 'bg-rose-50 text-rose-700 border-rose-100',
  editorial_contact: 'bg-slate-100 text-slate-600 border-slate-200',
};

const statusConfig: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  pending: { label: 'Pending', color: 'bg-amber-50 text-amber-700 border-amber-200', icon: <Clock size={12} /> },
  approved: { label: 'Approved', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: <CheckCircle size={12} /> },
  rejected: { label: 'Rejected', color: 'bg-rose-50 text-rose-700 border-rose-200', icon: <XCircle size={12} /> },
  flagged: { label: 'Flagged', color: 'bg-orange-50 text-orange-700 border-orange-200', icon: <Flag size={12} /> },
};

const mockSubmissions: SubmissionRow[] = [
  { id: '1', submission_type: 'company', submitter_name: 'Dr. Sarah Chen', submitter_email: 'sarah@visionai.com', submitter_organization: 'VisionAI Diagnostics', status: 'pending', created_at: new Date(Date.now() - 2 * 3600000).toISOString(), data: { companyName: 'VisionAI Diagnostics', summary: 'AI-powered retinal screening for diabetic eye disease.' } },
  { id: '2', submission_type: 'research', submitter_name: 'Prof. James Harrington', submitter_email: 'j.harrington@ucl.ac.uk', submitter_organization: 'UCL', status: 'pending', created_at: new Date(Date.now() - 5 * 3600000).toISOString(), data: { title: 'Retinal microvasculature as a biomarker for Alzheimer\'s disease risk' } },
  { id: '3', submission_type: 'event', submitter_name: 'Maria Kowalski', submitter_email: 'maria@ophtho.eu', submitter_organization: 'EuroOphtho', status: 'pending', created_at: new Date(Date.now() - 12 * 3600000).toISOString(), data: { eventName: 'Retinal Biomarkers Symposium 2027' } },
  { id: '4', submission_type: 'product', submitter_name: 'Tom Watkins', submitter_email: 't.watkins@optiscan.io', submitter_organization: 'OptiScan Technologies', status: 'pending', created_at: new Date(Date.now() - 18 * 3600000).toISOString(), data: { productName: 'OptiScan DR-Pro' } },
  { id: '5', submission_type: 'editorial_contact', submitter_name: 'Anonymous Researcher', submitter_email: 'anon@uni.edu', submitter_organization: null, status: 'pending', created_at: new Date(Date.now() - 86400000).toISOString(), data: { reason: 'Dispute an evidence rating', subject: 'Evidence grade for Optain is incorrect' } },
  { id: '6', submission_type: 'company', submitter_name: 'Lisa Park', submitter_email: 'lisa@retinahealth.co', submitter_organization: 'RetinaHealth Co.', status: 'approved', created_at: new Date(Date.now() - 3 * 86400000).toISOString(), data: { companyName: 'RetinaHealth Co.' } },
  { id: '7', submission_type: 'research', submitter_name: 'Dr. Felix Müller', submitter_email: 'f.muller@charite.de', submitter_organization: 'Charité Berlin', status: 'approved', created_at: new Date(Date.now() - 4 * 86400000).toISOString(), data: { title: 'Hypertensive retinopathy grading using automated fundus analysis' } },
  { id: '8', submission_type: 'product', submitter_name: 'Sales Team', submitter_email: 'sales@spam.io', submitter_organization: 'SpamCo', status: 'rejected', created_at: new Date(Date.now() - 5 * 86400000).toISOString(), data: { productName: 'Generic Vision Tool' } },
  { id: '9', submission_type: 'company', submitter_name: 'Unknown', submitter_email: 'test@test.com', submitter_organization: null, status: 'flagged', created_at: new Date(Date.now() - 2 * 86400000).toISOString(), data: { companyName: 'Test Company — suspicious duplicate' } },
];

function formatRelativeTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  return 'Just now';
}

function getLabel(data: Record<string, unknown>): string {
  return (data.companyName ?? data.title ?? data.eventName ?? data.productName ?? data.subject ?? 'Untitled') as string;
}

export default function AdminDashboard() {
  const stats = getAdminStats();
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected' | 'flagged'>('pending');
  const [submissions, setSubmissions] = useState<SubmissionRow[]>(mockSubmissions);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [liveData, setLiveData] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase.from('submissions').select('*').order('created_at', { ascending: false });
        if (!error && data && data.length > 0) { setSubmissions(data as SubmissionRow[]); setLiveData(true); }
      } catch { /* fallback to mock */ }
    })();
  }, []);

  async function updateStatus(id: string, newStatus: string) {
    setActionLoading(true);
    if (liveData) {
      const { error } = await supabase.from('submissions').update({ status: newStatus }).eq('id', id);
      if (!error) {
        setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
        setSelectedId(null);
      }
    } else {
      setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
      setSelectedId(null);
    }
    setActionLoading(false);
  }

  const filtered = submissions.filter(s => s.status === activeTab);
  const selected = submissions.find(s => s.id === selectedId);

  const statCards = [
    { key: 'pending', label: 'Pending', icon: <Clock size={20} />, color: 'text-amber-600', bg: 'bg-amber-50' },
    { key: 'approved', label: 'Approved', icon: <CheckCircle size={20} />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { key: 'rejected', label: 'Rejected', icon: <XCircle size={20} />, color: 'text-rose-600', bg: 'bg-rose-50' },
    { key: 'flagged', label: 'Flagged', icon: <Flag size={20} />, color: 'text-orange-600', bg: 'bg-orange-50' },
  ] as const;

  const directoryStats = [
    { label: 'Companies', value: stats.totalCompanies, icon: <Building2 size={16} /> },
    { label: 'Products', value: stats.totalProducts, icon: <Package size={16} /> },
    { label: 'Studies', value: stats.totalStudies, icon: <BookOpen size={16} /> },
    { label: 'Datasets', value: stats.totalDatasets, icon: <Database size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[#0c2340] text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <p className="text-slate-400 text-sm mt-0.5">Oculomics Hub — Editorial Review Queue</p>
          </div>
          <span className={`text-xs px-3 py-1 rounded-full border flex items-center gap-1.5 ${liveData ? 'text-emerald-400 border-emerald-700' : 'text-slate-400 border-slate-700'}`}>
            {liveData && <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />}
            {liveData ? 'Live Supabase data' : 'Mock data (Supabase empty)'}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map(card => (
            <button
              key={card.key}
              onClick={() => setActiveTab(card.key)}
              className={`bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-left hover:shadow-md transition-shadow ${activeTab === card.key ? 'ring-2 ring-[#0c2340]' : ''}`}
            >
              <div className={`w-10 h-10 ${card.bg} rounded-xl flex items-center justify-center mb-3 ${card.color}`}>{card.icon}</div>
              <div className="text-2xl font-bold text-slate-900">{submissions.filter(s => s.status === card.key).length}</div>
              <div className="text-sm text-slate-500 mt-0.5">{card.label}</div>
            </button>
          ))}
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">Directory Contents</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {directoryStats.map(s => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">{s.icon}</div>
                <div><div className="text-lg font-bold text-slate-900">{s.value}</div><div className="text-xs text-slate-400">{s.label}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="border-b border-slate-100 flex">
                {statCards.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => { setActiveTab(tab.key); setSelectedId(null); }}
                    className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${activeTab === tab.key ? 'text-[#0c2340] border-b-2 border-[#0c2340]' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    {tab.label}
                    <span className={`ml-1.5 text-xs rounded-full px-1.5 py-0.5 ${activeTab === tab.key ? 'bg-[#0c2340] text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {submissions.filter(s => s.status === tab.key).length}
                    </span>
                  </button>
                ))}
              </div>
              <div className="divide-y divide-slate-50">
                {filtered.length === 0 ? (
                  <div className="py-16 text-center text-slate-400 text-sm">No {activeTab} submissions</div>
                ) : filtered.map(sub => (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedId(sub.id === selectedId ? null : sub.id)}
                    className={`w-full text-left px-5 py-4 hover:bg-slate-50 transition-colors flex items-center gap-4 ${selectedId === sub.id ? 'bg-slate-50' : ''}`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border text-xs ${typeColors[sub.submission_type] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                      {typeIcons[sub.submission_type]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm text-slate-900 truncate">{getLabel(sub.data)}</span>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border capitalize ${typeColors[sub.submission_type] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                          {sub.submission_type.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 truncate">
                        {sub.submitter_name} · {sub.submitter_email}{sub.submitter_organization ? ` · ${sub.submitter_organization}` : ''} · {formatRelativeTime(sub.created_at)}
                      </div>
                    </div>
                    <Eye size={14} className={`flex-shrink-0 ${selectedId === sub.id ? 'text-teal-500' : 'text-slate-300'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-6 lg:self-start">
            {selected ? (
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full border flex items-center gap-1 ${statusConfig[selected.status]?.color}`}>
                      {statusConfig[selected.status]?.icon} {statusConfig[selected.status]?.label}
                    </span>
                    <span className="text-xs text-slate-400">{formatRelativeTime(selected.created_at)}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 leading-snug">{getLabel(selected.data)}</h3>
                  <p className="text-xs text-slate-500 mt-1 capitalize">{selected.submission_type.replace('_', ' ')} submission</p>
                </div>
                <div className="p-5 space-y-3 text-sm">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-400 block mb-1">Submitter</span>
                    <p className="text-slate-700">{selected.submitter_name}</p>
                    <p className="text-slate-500 text-xs">{selected.submitter_email}</p>
                    {selected.submitter_organization && <p className="text-slate-500 text-xs">{selected.submitter_organization}</p>}
                  </div>
                  {Object.entries(selected.data).slice(0, 4).map(([key, val]) =>
                    typeof val === 'string' && val ? (
                      <div key={key}>
                        <span className="text-xs font-bold uppercase tracking-wide text-slate-400 block mb-1">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
                        </span>
                        <p className="text-slate-700 text-sm line-clamp-3">{val}</p>
                      </div>
                    ) : null
                  )}
                </div>
                {(selected.status === 'pending' || selected.status === 'flagged') && (
                  <div className="p-5 border-t border-slate-100 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => updateStatus(selected.id, 'approved')}
                      disabled={actionLoading}
                      className="py-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <CheckCircle size={14} /> {selected.status === 'flagged' ? 'Clear flag' : 'Approve'}
                    </button>
                    <button
                      onClick={() => updateStatus(selected.id, 'rejected')}
                      disabled={actionLoading}
                      className="py-2 bg-rose-50 hover:bg-rose-100 disabled:opacity-50 text-rose-600 border border-rose-200 text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <XCircle size={14} /> Reject
                    </button>
                  </div>
                )}
                {selected.status === 'approved' && (
                  <div className="p-5 border-t border-slate-100 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => updateStatus(selected.id, 'flagged')}
                      disabled={actionLoading}
                      className="py-2 bg-orange-50 hover:bg-orange-100 disabled:opacity-50 text-orange-600 border border-orange-200 text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Flag size={14} /> Flag
                    </button>
                    <button
                      onClick={() => updateStatus(selected.id, 'rejected')}
                      disabled={actionLoading}
                      className="py-2 bg-rose-50 hover:bg-rose-100 disabled:opacity-50 text-rose-600 border border-rose-200 text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <XCircle size={14} /> Reject
                    </button>
                  </div>
                )}
                {selected.status === 'rejected' && (
                  <div className="p-5 border-t border-slate-100">
                    <button
                      onClick={() => updateStatus(selected.id, 'pending')}
                      disabled={actionLoading}
                      className="w-full py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Clock size={14} /> Restore to Pending
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 text-center text-slate-400">
                <Eye size={28} className="mx-auto mb-3 opacity-40" />
                <p className="text-sm">Select a submission to review</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
