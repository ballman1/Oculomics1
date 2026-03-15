import { Link } from 'react-router-dom';
import { NewsItem } from '../../types';
import { ArrowRight } from 'lucide-react';

interface NewsCardProps {
  item: NewsItem;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  Research: 'bg-blue-100 text-blue-700',
  Funding: 'bg-emerald-100 text-emerald-700',
  'Product Launch': 'bg-violet-100 text-violet-700',
  Regulation: 'bg-orange-100 text-orange-700',
  Partnership: 'bg-teal-100 text-teal-700',
  Events: 'bg-slate-100 text-slate-600',
};

export default function NewsCard({ item, featured = false }: NewsCardProps) {
  if (featured) {
    return (
      <div className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col md:flex-row">
        <div className="md:w-2/5 h-48 md:h-auto overflow-hidden flex-shrink-0">
          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[item.category] || 'bg-slate-100 text-slate-600'}`}>
                {item.category}
              </span>
              <span className="text-xs text-slate-400">{item.date}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-teal-700 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{item.excerpt}</p>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {item.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      <div className="h-44 overflow-hidden">
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[item.category] || 'bg-slate-100 text-slate-600'}`}>
            {item.category}
          </span>
          <span className="text-xs text-slate-400">{item.date}</span>
        </div>
        <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-teal-700 transition-colors flex-1">
          {item.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">{item.excerpt}</p>
        <Link to="/newsroom" className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700 mt-auto">
          Read more <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
