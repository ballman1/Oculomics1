import { CheckCircle, TrendingUp, HelpCircle } from 'lucide-react';
import { EvidenceSummaryData } from '../../types/directory';

interface Props {
  data: EvidenceSummaryData;
}

export default function EvidenceSummary({ data }: Props) {
  return (
    <div className="space-y-4">
      {data.known.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={14} className="text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-wide text-emerald-700">Known / Established</span>
          </div>
          <ul className="space-y-1.5">
            {data.known.map((item, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      {data.promising.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={14} className="text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-wide text-amber-700">Promising</span>
          </div>
          <ul className="space-y-1.5">
            {data.promising.map((item, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      {data.uncertain.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle size={14} className="text-slate-400" />
            <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Uncertain / Unproven</span>
          </div>
          <ul className="space-y-1.5">
            {data.uncertain.map((item, i) => (
              <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
