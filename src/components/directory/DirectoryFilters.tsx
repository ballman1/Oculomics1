import { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface FilterOption {
  label: string;
  key: string;
  options: string[];
}

interface Props {
  filters: FilterOption[];
  activeFilters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
  onClearAll: () => void;
  mode: 'sidebar' | 'mobile-button';
}

function FilterPanel({ filters, activeFilters, onFilterChange, onClearAll }: Omit<Props, 'mode'>) {
  const hasActive = Object.values(activeFilters).some(v => v !== 'All');
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Filters</h3>
        {hasActive && (
          <button onClick={onClearAll} className="text-xs text-teal-600 hover:text-teal-800 font-medium">Clear all</button>
        )}
      </div>
      {filters.map(filter => (
        <div key={filter.key}>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{filter.label}</label>
          <div className="flex flex-col gap-1">
            {filter.options.map(opt => (
              <button
                key={opt}
                onClick={() => onFilterChange(filter.key, opt)}
                className={`text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                  activeFilters[filter.key] === opt
                    ? 'bg-[#0c2340] text-white font-medium'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DirectoryFilters({ filters, activeFilters, onFilterChange, onClearAll, mode }: Props) {
  const [open, setOpen] = useState(false);
  const activeCount = Object.values(activeFilters).filter(v => v !== 'All').length;

  if (mode === 'sidebar') {
    return (
      <div className="hidden lg:block sticky top-24 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
        <FilterPanel filters={filters} activeFilters={activeFilters} onFilterChange={onFilterChange} onClearAll={onClearAll} />
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors"
      >
        <Filter size={15} />
        Filters
        {activeCount > 0 && (
          <span className="bg-[#0c2340] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{activeCount}</span>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <span className="font-bold text-slate-900">Filters</span>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X size={20} />
              </button>
            </div>
            <div className="p-5">
              <FilterPanel filters={filters} activeFilters={activeFilters} onFilterChange={(k, v) => { onFilterChange(k, v); }} onClearAll={() => { onClearAll(); setOpen(false); }} />
            </div>
            <div className="sticky bottom-0 bg-white border-t border-slate-100 p-4">
              <button onClick={() => setOpen(false)} className="w-full py-3 bg-[#0c2340] text-white font-semibold rounded-xl">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
