interface FilterBarProps {
  options: string[];
  active: string;
  onChange: (option: string) => void;
}

export default function FilterBar({ options, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(option => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
            active === option
              ? 'bg-[#0c2340] text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
