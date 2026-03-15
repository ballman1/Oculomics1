import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, Plus } from 'lucide-react';
import DirectoryPageLayout from '../../components/directory/DirectoryPageLayout';
import EvidenceBadge from '../../components/ui/EvidenceBadge';
import SubmissionBadge from '../../components/ui/SubmissionBadge';
import { getCompanies } from '../../services/directoryService';
import { diseaseAreaOptions, modalityOptions, fundingStageOptions } from '../../data/companies';

const ITEMS_PER_PAGE = 9;

const sortOptions = [
  { value: 'name_asc', label: 'Name A–Z' },
  { value: 'name_desc', label: 'Name Z–A' },
  { value: 'founded_desc', label: 'Newest First' },
  { value: 'founded_asc', label: 'Oldest First' },
];

export default function CompaniesDirectory() {
  const companies = getCompanies();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name_asc');
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Record<string, string>>({
    diseaseArea: 'All', modality: 'All', fundingStage: 'All',
  });

  const filtered = useMemo(() => {
    let result = companies.filter(c => {
      if (search && !c.name.toLowerCase().includes(search.toLowerCase()) &&
          !c.shortDescription.toLowerCase().includes(search.toLowerCase()) &&
          !c.tagline.toLowerCase().includes(search.toLowerCase())) return false;
      if (filters.diseaseArea !== 'All' && !c.diseaseFocus.includes(filters.diseaseArea)) return false;
      if (filters.modality !== 'All' && !c.modalities.includes(filters.modality)) return false;
      if (filters.fundingStage !== 'All' && c.fundingStage !== filters.fundingStage) return false;
      return true;
    });
    result.sort((a, b) => {
      if (sort === 'name_asc') return a.name.localeCompare(b.name);
      if (sort === 'name_desc') return b.name.localeCompare(a.name);
      if (sort === 'founded_desc') return (b.foundedYear || 0) - (a.foundedYear || 0);
      if (sort === 'founded_asc') return (a.foundedYear || 0) - (b.foundedYear || 0);
      return 0;
    });
    return result;
  }, [companies, search, filters, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPage(1);
  };

  return (
    <DirectoryPageLayout
      title="Companies & Startups"
      subtitle="Oculomics companies working on AI tools, imaging platforms, screening solutions, and clinical applications."
      label="Companies"
      icon={<Building2 size={20} className="text-blue-600" />}
      accentColor="bg-blue-50"
      resultCount={filtered.length}
      totalCount={companies.length}
      search={search}
      onSearchChange={v => { setSearch(v); setPage(1); }}
      sortValue={sort}
      onSortChange={setSort}
      sortOptions={sortOptions}
      filters={[
        { label: 'Disease Area', key: 'diseaseArea', options: diseaseAreaOptions },
        { label: 'Modality', key: 'modality', options: modalityOptions },
        { label: 'Funding Stage', key: 'fundingStage', options: fundingStageOptions },
      ]}
      activeFilters={filters}
      onFilterChange={handleFilterChange}
      onClearAll={() => setFilters({ diseaseArea: 'All', modality: 'All', fundingStage: 'All' })}
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
      breadcrumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Companies' }]}
      cta={
        <Link to="/submit/company" className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0c2340] text-white font-semibold rounded-xl text-sm hover:bg-[#0e2d52] transition-colors border border-white/10">
          <Plus size={15} /> List Your Company
        </Link>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {paginated.length === 0 ? (
          <div className="col-span-full py-20 text-center text-slate-400">No companies match your filters.</div>
        ) : paginated.map(company => (
          <Link
            key={company.id}
            to={`/directory/companies/${company.slug}`}
            className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 size={18} className="text-slate-400" />
              </div>
              <SubmissionBadge type={company.submissionType} size="sm" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{company.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{company.headquarters} · Est. {company.foundedYear}</p>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">{company.shortDescription}</p>
            <div className="flex flex-wrap gap-1.5">
              <EvidenceBadge level={company.evidenceLevel} size="sm" />
            </div>
            <div className="flex flex-wrap gap-1">
              {company.modalities.slice(0, 2).map(m => (
                <span key={m} className="text-xs bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">{m}</span>
              ))}
              {company.diseaseFocus.slice(0, 1).map(d => (
                <span key={d} className="text-xs bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full">{d}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-50">
              <span className="text-xs text-slate-400">{company.fundingStage}</span>
              <span className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                View profile <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </DirectoryPageLayout>
  );
}
