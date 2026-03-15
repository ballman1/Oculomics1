import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, MapPin } from 'lucide-react';
import DirectoryPageLayout from '../../components/directory/DirectoryPageLayout';
import { getAcademicCenters } from '../../services/directoryService';
import { academicCountryOptions, academicFocusOptions } from '../../data/academic';

const sortOptions = [
  { value: 'name_asc', label: 'Name A–Z' },
  { value: 'institution_asc', label: 'Institution A–Z' },
];

export default function AcademicDirectory() {
  const centers = getAcademicCenters();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name_asc');
  const [filters, setFilters] = useState<Record<string, string>>({ country: 'All', focus: 'All' });

  const filtered = useMemo(() => {
    let result = centers.filter(c => {
      if (search && !c.name.toLowerCase().includes(search.toLowerCase()) &&
          !c.institution.toLowerCase().includes(search.toLowerCase())) return false;
      if (filters.country !== 'All' && c.country !== filters.country) return false;
      if (filters.focus !== 'All' && !c.researchFocus.some(f => f.toLowerCase().includes(filters.focus.toLowerCase()))) return false;
      return true;
    });
    result.sort((a, b) => sort === 'institution_asc' ? a.institution.localeCompare(b.institution) : a.name.localeCompare(b.name));
    return result;
  }, [centers, search, filters, sort]);

  return (
    <DirectoryPageLayout
      title="Academic Centres"
      subtitle="University research groups and academic medical centres leading oculomics research worldwide."
      label="Academic"
      icon={<GraduationCap size={20} className="text-slate-600" />}
      accentColor="bg-slate-100"
      resultCount={filtered.length}
      totalCount={centers.length}
      search={search}
      onSearchChange={setSearch}
      sortValue={sort}
      onSortChange={setSort}
      sortOptions={sortOptions}
      filters={[
        { label: 'Country', key: 'country', options: academicCountryOptions },
        { label: 'Research Focus', key: 'focus', options: academicFocusOptions },
      ]}
      activeFilters={filters}
      onFilterChange={(k, v) => setFilters(prev => ({ ...prev, [k]: v }))}
      onClearAll={() => setFilters({ country: 'All', focus: 'All' })}
      currentPage={1}
      totalPages={1}
      onPageChange={() => {}}
      breadcrumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Academic Centres' }]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.length === 0 ? (
          <div className="col-span-full py-20 text-center text-slate-400">No centres match your filters.</div>
        ) : filtered.map(center => (
          <Link
            key={center.id}
            to={`/directory/academic-centers/${center.slug}`}
            className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
              <GraduationCap size={18} className="text-slate-500" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{center.name}</h3>
              <p className="text-sm text-slate-500 mt-0.5">{center.institution}</p>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                <MapPin size={11} /> {center.country}
              </p>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">{center.shortDescription}</p>
            <div className="flex flex-wrap gap-1">
              {center.researchFocus.slice(0, 3).map(f => (
                <span key={f} className="text-xs bg-slate-50 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full">{f}</span>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-50 flex justify-end">
              <span className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                View centre <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </DirectoryPageLayout>
  );
}
