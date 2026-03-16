import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, BookOpen, Building2, FlaskConical, Database, Newspaper, ArrowRight } from 'lucide-react';
import { newsItems } from '../../data/news';
import { directoryEntries } from '../../data/directory';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  type: 'news' | 'company' | 'product' | 'study' | 'dataset' | 'academic' | 'consortium' | 'event';
}

const typeConfig: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
  news: { label: 'News', icon: <Newspaper size={14} />, color: 'text-blue-600 bg-blue-50' },
  company: { label: 'Company', icon: <Building2 size={14} />, color: 'text-teal-600 bg-teal-50' },
  product: { label: 'Product', icon: <FlaskConical size={14} />, color: 'text-orange-600 bg-orange-50' },
  study: { label: 'Study', icon: <BookOpen size={14} />, color: 'text-emerald-600 bg-emerald-50' },
  dataset: { label: 'Dataset', icon: <Database size={14} />, color: 'text-amber-600 bg-amber-50' },
  academic: { label: 'Academic', icon: <BookOpen size={14} />, color: 'text-rose-600 bg-rose-50' },
  consortium: { label: 'Consortium', icon: <Building2 size={14} />, color: 'text-slate-600 bg-slate-100' },
  event: { label: 'Event', icon: <BookOpen size={14} />, color: 'text-violet-600 bg-violet-50' },
};

function buildResults(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();

  const newsResults: SearchResult[] = newsItems
    .filter(n => n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q) || n.tags.some(t => t.toLowerCase().includes(q)))
    .slice(0, 4)
    .map(n => ({ id: `news-${n.id}`, title: n.title, excerpt: n.excerpt, href: `/newsroom/${n.slug}`, type: 'news' as const }));

  const dirResults: SearchResult[] = directoryEntries
    .filter(e => e.name.toLowerCase().includes(q) || e.description.toLowerCase().includes(q) || e.tags.some(t => t.toLowerCase().includes(q)))
    .slice(0, 6)
    .map(e => ({
      id: `dir-${e.id}`,
      title: e.name,
      excerpt: e.description,
      href: `/directory/${e.type === 'academic' ? 'academic-centers' : e.type + 's'}/${e.id}`,
      type: e.type as SearchResult['type'],
    }));

  return [...newsResults, ...dirResults];
}

function groupResults(results: SearchResult[]): Record<string, SearchResult[]> {
  const groups: Record<string, SearchResult[]> = {};
  for (const r of results) {
    if (!groups[r.type]) groups[r.type] = [];
    groups[r.type].push(r);
  }
  return groups;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const results = query.length >= 2 ? buildResults(query) : [];
  const groups = groupResults(results);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
    }
  }, [isOpen]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
          <Search size={18} className="text-slate-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search news, companies, studies, datasets..."
            className="flex-1 text-base text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-600 transition-colors">
              <X size={16} />
            </button>
          )}
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors ml-1">
            <span className="text-xs font-medium">Esc</span>
          </button>
        </div>

        <div className="max-h-[480px] overflow-y-auto">
          {query.length < 2 ? (
            <div className="px-5 py-8 text-center text-slate-400">
              <Search size={32} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">Start typing to search news, companies, studies, and more</p>
            </div>
          ) : results.length === 0 ? (
            <div className="px-5 py-8 text-center text-slate-400">
              <p className="text-sm font-medium mb-1">No results found</p>
              <p className="text-xs">Try a different search term</p>
            </div>
          ) : (
            <div className="py-2">
              {Object.entries(groups).map(([type, items]) => {
                const config = typeConfig[type] || { label: type, icon: null, color: 'text-slate-600 bg-slate-100' };
                return (
                  <div key={type} className="mb-1">
                    <div className="px-5 py-2 flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${config.color}`}>
                        {config.icon}
                        {config.label}
                      </span>
                    </div>
                    {items.map(result => (
                      <Link
                        key={result.id}
                        to={result.href}
                        onClick={onClose}
                        className="flex items-start gap-3 px-5 py-3 hover:bg-slate-50 transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-slate-900 text-sm group-hover:text-teal-700 transition-colors line-clamp-1">{result.title}</p>
                          <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{result.excerpt}</p>
                        </div>
                        <ArrowRight size={14} className="text-slate-300 group-hover:text-teal-500 flex-shrink-0 mt-1 transition-colors" />
                      </Link>
                    ))}
                  </div>
                );
              })}
              <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs text-slate-400">{results.length} result{results.length !== 1 ? 's' : ''}</p>
                <Link to={`/newsroom?search=${encodeURIComponent(query)}`} onClick={onClose} className="text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1 transition-colors">
                  See all in Newsroom <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
