import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Database, ArrowRight } from 'lucide-react';
import DirectoryPageLayout from '../../components/directory/DirectoryPageLayout';
import EvidenceBadge from '../../components/ui/EvidenceBadge';
import { getDatasets } from '../../services/directoryService';
import { datasetAccessOptions, datasetModalityOptions, datasetGeographyOptions } from '../../data/datasets';

const accessColors: Record<string, string> = {
  open: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  application_required: 'bg-amber-50 text-amber-700 border-amber-200',
  restricted: 'bg-rose-50 text-rose-700 border-rose-200',
};

const accessLabels: Record<string, string> = {
  open: 'Open Access',
  application_required: 'Application Required',
  restricted: 'Restricted',
};

const sortOptions = [
  { value: 'name_asc', label: 'Name A–Z' },
  { value: 'size_desc', label: 'Largest First' },
];

export default function DatasetsDirectory() {
  const datasets = getDatasets();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name_asc');
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Record<string, string>>({
    access: 'All', modality: 'All', geography: 'All',
  });

  const filtered = useMemo(() => {
    let result = datasets.filter(d => {
      if (search && !d.name.toLowerCase().includes(search.toLowerCase()) &&
          !d.shortDescription.toLowerCase().includes(search.toLowerCase())) return false;
      if (filters.access !== 'All') {
        const map: Record<string, string> = { 'Open': 'open', 'Application Required': 'application_required', 'Restricted': 'restricted' };
        if (d.accessType !== map[filters.access]) return false;
      }
      if (filters.modality !== 'All' && !d.modalities.includes(filters.modality)) return false;
      if (filters.geography !== 'All' && d.geography !== filters.geography) return false;
      return true;
    });
    result.sort((a, b) => {
      if (sort === 'size_desc') return (b.sampleSize || 0) - (a.sampleSize || 0);
      return a.name.localeCompare(b.name);
    });
    return result;
  }, [datasets, search, filters, sort]);

  return (
    <DirectoryPageLayout
      title="Datasets"
      subtitle="Open and controlled-access retinal imaging datasets for oculomics research, benchmarking, and model development."
      label="Datasets"
      icon={<Database size={20} className="text-amber-600" />}
      accentColor="bg-amber-50"
      resultCount={filtered.length}
      totalCount={datasets.length}
      search={search}
      onSearchChange={v => { setSearch(v); setPage(1); }}
      sortValue={sort}
      onSortChange={setSort}
      sortOptions={sortOptions}
      filters={[
        { label: 'Access Type', key: 'access', options: datasetAccessOptions },
        { label: 'Modality', key: 'modality', options: datasetModalityOptions },
        { label: 'Geography', key: 'geography', options: datasetGeographyOptions },
      ]}
      activeFilters={filters}
      onFilterChange={(k, v) => { setFilters(prev => ({ ...prev, [k]: v })); setPage(1); }}
      onClearAll={() => setFilters({ access: 'All', modality: 'All', geography: 'All' })}
      currentPage={page}
      totalPages={Math.ceil(filtered.length / 9)}
      onPageChange={setPage}
      breadcrumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Datasets' }]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.length === 0 ? (
          <div className="col-span-full py-20 text-center text-slate-400">No datasets match your filters.</div>
        ) : filtered.map(dataset => (
          <Link
            key={dataset.id}
            to={`/directory/datasets/${dataset.slug}`}
            className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database size={18} className="text-amber-500" />
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${accessColors[dataset.accessType]}`}>
                {accessLabels[dataset.accessType]}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{dataset.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{dataset.owner}</p>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">{dataset.shortDescription}</p>
            <div className="flex items-center justify-between pt-2 border-t border-slate-50 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <EvidenceBadge level={dataset.evidenceLevel} size="sm" />
                {dataset.sampleSize && <span className="text-xs text-slate-400">n={dataset.sampleSize.toLocaleString()}</span>}
              </div>
              <span className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                View dataset <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </DirectoryPageLayout>
  );
}
