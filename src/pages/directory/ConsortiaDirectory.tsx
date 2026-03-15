import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, Globe } from 'lucide-react';
import DirectoryPageLayout from '../../components/directory/DirectoryPageLayout';
import { getConsortia } from '../../services/directoryService';
import { consortiumFocusOptions } from '../../data/consortia';

const sortOptions = [{ value: 'name_asc', label: 'Name A–Z' }];

const geographyOptions = ['All', 'International', 'United Kingdom', 'United States', 'Europe'];

export default function ConsortiaDirectory() {
  const consortia = getConsortia();
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({ focus: 'All', geography: 'All' });

  const filtered = useMemo(() => {
    return consortia.filter(c => {
      if (search && !c.name.toLowerCase().includes(search.toLowerCase()) &&
          !c.shortDescription.toLowerCase().includes(search.toLowerCase())) return false;
      if (filters.focus !== 'All' && !c.focusAreas.some(f => f.toLowerCase().includes(filters.focus.toLowerCase()))) return false;
      if (filters.geography !== 'All' && c.geography !== filters.geography) return false;
      return true;
    });
  }, [consortia, search, filters]);

  return (
    <DirectoryPageLayout
      title="Consortia & Networks"
      subtitle="International research consortia and industry networks advancing oculomics standards, data sharing, and clinical translation."
      label="Consortia"
      icon={<Users size={20} className="text-rose-600" />}
      accentColor="bg-rose-50"
      resultCount={filtered.length}
      totalCount={consortia.length}
      search={search}
      onSearchChange={setSearch}
      sortValue="name_asc"
      onSortChange={() => {}}
      sortOptions={sortOptions}
      filters={[
        { label: 'Focus Area', key: 'focus', options: consortiumFocusOptions },
        { label: 'Geography', key: 'geography', options: geographyOptions },
      ]}
      activeFilters={filters}
      onFilterChange={(k, v) => setFilters(prev => ({ ...prev, [k]: v }))}
      onClearAll={() => setFilters({ focus: 'All', geography: 'All' })}
      currentPage={1}
      totalPages={1}
      onPageChange={() => {}}
      breadcrumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Consortia' }]}
    >
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-slate-400">No consortia match your filters.</div>
        ) : filtered.map(consortium => (
          <Link
            key={consortium.id}
            to={`/directory/consortia/${consortium.slug}`}
            className="group block bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Users size={20} className="text-rose-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {consortium.name}
                      {consortium.shortName && <span className="text-slate-400 font-normal ml-2">({consortium.shortName})</span>}
                    </h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <Globe size={11} /> {consortium.geography}
                      {consortium.memberCount && <span className="ml-2">· {consortium.memberCount} members</span>}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all flex-shrink-0">
                    View <ArrowRight size={12} />
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2">{consortium.shortDescription}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {consortium.focusAreas.slice(0, 4).map(f => (
                    <span key={f} className="text-xs bg-rose-50 text-rose-700 border border-rose-100 px-2 py-0.5 rounded-full">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </DirectoryPageLayout>
  );
}
