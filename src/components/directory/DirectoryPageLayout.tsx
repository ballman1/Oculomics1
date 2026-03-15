import { ReactNode } from 'react';
import { Search } from 'lucide-react';
import Breadcrumbs from '../ui/Breadcrumbs';
import DirectoryFilters from './DirectoryFilters';
import SortSelect from './SortSelect';
import Pagination from '../ui/Pagination';

interface FilterOption {
  label: string;
  key: string;
  options: string[];
}

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  title: string;
  subtitle: string;
  label: string;
  icon: ReactNode;
  accentColor: string;
  resultCount: number;
  totalCount: number;
  search: string;
  onSearchChange: (v: string) => void;
  sortValue: string;
  onSortChange: (v: string) => void;
  sortOptions: { value: string; label: string }[];
  filters: FilterOption[];
  activeFilters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
  onClearAll: () => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
  breadcrumbs: Crumb[];
  cta?: ReactNode;
  children: ReactNode;
}

export default function DirectoryPageLayout({
  title, subtitle, label, icon, accentColor,
  resultCount, totalCount,
  search, onSearchChange,
  sortValue, onSortChange, sortOptions,
  filters, activeFilters, onFilterChange, onClearAll,
  currentPage, totalPages, onPageChange,
  breadcrumbs, cta, children,
}: Props) {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#0c2340] text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, ...breadcrumbs]} variant="dark" />
          <div className="mt-6 flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${accentColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                {icon}
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-1">{label}</div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-slate-400 text-sm mt-1 max-w-xl">{subtitle}</p>
              </div>
            </div>
            {cta}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <div className="relative flex-1 min-w-48">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search…"
              value={search}
              onChange={e => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
            />
          </div>
          <SortSelect value={sortValue} onChange={onSortChange} options={sortOptions} />
          <DirectoryFilters filters={filters} activeFilters={activeFilters} onFilterChange={onFilterChange} onClearAll={onClearAll} mode="mobile-button" />
        </div>

        <div className="flex gap-6">
          {filters.length > 0 && (
            <div className="w-52 flex-shrink-0">
              <DirectoryFilters filters={filters} activeFilters={activeFilters} onFilterChange={onFilterChange} onClearAll={onClearAll} mode="sidebar" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="text-sm text-slate-400 mb-4">
              Showing <span className="font-semibold text-slate-700">{resultCount}</span> of <span className="font-semibold text-slate-700">{totalCount}</span> results
            </div>
            {children}
            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
