import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, ArrowRight, Plus } from 'lucide-react';
import DirectoryPageLayout from '../../components/directory/DirectoryPageLayout';
import EvidenceBadge from '../../components/ui/EvidenceBadge';
import { getStudies } from '../../services/directoryService';
import { studyDiseaseOptions, studyModalityOptions, studyTypeOptions } from '../../data/studies';

const ITEMS_PER_PAGE = 10;

const sortOptions = [
  { value: 'year_desc', label: 'Newest First' },
  { value: 'year_asc', label: 'Oldest First' },
  { value: 'name_asc', label: 'Title A–Z' },
];

export default function StudiesDirectory() {
  const studies = getStudies();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('year_desc');
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Record<string, string>>({
    disease: 'All', modality: 'All', studyType: 'All',
  });

  const filtered = useMemo(() => {
    let result = studies.filter(s => {
      if (search && !s.title.toLowerCase().includes(search.toLowerCase()) &&
          !s.authors.toLowerCase().includes(search.toLowerCase())) return false;
      if (filters.disease !== 'All' && !s.diseaseFocus.includes(filters.disease)) return false;
      if (filters.modality !== 'All' && !s.modalities.includes(filters.modality)) return false;
      if (filters.studyType !== 'All' && s.studyType !== filters.studyType) return false;
      return true;
    });
    result.sort((a, b) => {
      if (sort === 'year_desc') return b.year - a.year;
      if (sort === 'year_asc') return a.year - b.year;
      return a.title.localeCompare(b.title);
    });
    return result;
  }, [studies, search, filters, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <DirectoryPageLayout
      title="Research Studies"
      subtitle="Peer-reviewed clinical and epidemiological studies on oculomics biomarkers and AI retinal imaging."
      label="Research"
      icon={<FlaskConical size={20} className="text-emerald-600" />}
      accentColor="bg-emerald-50"
      resultCount={filtered.length}
      totalCount={studies.length}
      search={search}
      onSearchChange={v => { setSearch(v); setPage(1); }}
      sortValue={sort}
      onSortChange={setSort}
      sortOptions={sortOptions}
      filters={[
        { label: 'Disease Area', key: 'disease', options: studyDiseaseOptions },
        { label: 'Modality', key: 'modality', options: studyModalityOptions },
        { label: 'Study Type', key: 'studyType', options: studyTypeOptions },
      ]}
      activeFilters={filters}
      onFilterChange={(k, v) => { setFilters(prev => ({ ...prev, [k]: v })); setPage(1); }}
      onClearAll={() => setFilters({ disease: 'All', modality: 'All', studyType: 'All' })}
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
      breadcrumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Studies' }]}
      cta={
        <Link to="/submit/research" className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0c2340] text-white font-semibold rounded-xl text-sm hover:bg-[#0e2d52] transition-colors border border-white/10">
          <Plus size={15} /> Submit Research
        </Link>
      }
    >
      <div className="space-y-4">
        {paginated.length === 0 ? (
          <div className="py-20 text-center text-slate-400">No studies match your filters.</div>
        ) : paginated.map(study => (
          <Link
            key={study.id}
            to={`/directory/studies/${study.slug}`}
            className="group block bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">{study.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{study.authors} · <span className="italic">{study.journal}</span> · {study.year}</p>
              </div>
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <EvidenceBadge level={study.evidenceLevel} size="sm" />
                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{study.studyType}</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-3 line-clamp-2 leading-relaxed">{study.keyFinding}</p>
            <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
              <div className="flex flex-wrap gap-1">
                {study.diseaseFocus.slice(0, 2).map(d => (
                  <span key={d} className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full">{d}</span>
                ))}
                {study.sampleSize && <span className="text-xs text-slate-400">n={study.sampleSize.toLocaleString()}</span>}
              </div>
              <span className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                View study <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </DirectoryPageLayout>
  );
}
