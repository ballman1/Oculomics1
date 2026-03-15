import { useState } from 'react';
import NewsCard from '../components/ui/NewsCard';
import FilterBar from '../components/ui/FilterBar';
import SearchInput from '../components/ui/SearchInput';
import SectionHeader from '../components/ui/SectionHeader';
import NewsletterSignup from '../components/ui/NewsletterSignup';
import { newsItems, newsCategories } from '../data/news';

export default function Newsroom() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = newsItems.filter(item => {
    const matchesCategory = activeFilter === 'All' || item.category === activeFilter;
    const matchesSearch = searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="bg-[#0c2340] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4">Newsroom</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            What's happening in oculomics
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Research findings, funding announcements, regulatory developments, partnerships, and events from across the field.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          <FilterBar options={newsCategories} active={activeFilter} onChange={setActiveFilter} />
          <div className="w-full sm:w-64">
            <SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Search news..." />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-lg font-medium mb-2">No results found</p>
            <p className="text-sm">Try adjusting your search or filter.</p>
          </div>
        ) : (
          <>
            {filtered.length > 0 && (
              <div className="mb-8">
                <NewsCard item={filtered[0]} featured />
              </div>
            )}
            {filtered.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.slice(1).map(item => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <NewsletterSignup />
    </>
  );
}
