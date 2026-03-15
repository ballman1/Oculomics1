interface SortOption {
  value: string;
  label: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: SortOption[];
  label?: string;
}

export default function SortSelect({ value, onChange, options, label = 'Sort by' }: Props) {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <label className="text-sm text-slate-500 whitespace-nowrap hidden sm:block">{label}:</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}
