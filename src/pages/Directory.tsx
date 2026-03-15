import { useState } from 'react';
import { Building2, Database, FlaskConical, GraduationCap, Users, Calendar, Package } from 'lucide-react';
import DirectoryCard, { DirectoryCategoryCard } from '../components/ui/DirectoryCard';
import FilterBar from '../components/ui/FilterBar';
import SearchInput from '../components/ui/SearchInput';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import { directoryEntries, directoryTypes } from '../data/directory';

const typeFilters = ['All', 'Companies', 'Datasets', 'Studies', 'Academic Centers', 'Consortia', 'Events'];
const typeMap: Record<string, string> = {
  'Companies': 'company',
  'Datasets': 'dataset',
  'Studies': 'study',
  'Academic Centers': 'academic',
  'Consortia': 'consortium',
  'Events': 'event',
};

export default function Directory() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = directoryEntries.filter(entry => {
    const matchesType = activeFilter === 'All' || entry.type === typeMap[activeFilter];
    const matchesSearch = searchQuery === '' ||
      entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <>
      <div className="bg-[#0c2340] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4">Directory</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Explore the oculomics ecosystem
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            A structured, searchable index of companies, products, studies, datasets, academic centers, consortia, and events in the field.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Browse by category" title="Explore by type" />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { icon: <Building2 size={22} className="text-blue-600" />, label: 'Companies', count: 50, href: '#', color: 'bg-blue-50 border-blue-100' },
              { icon: <Package size={22} className="text-teal-600" />, label: 'Products', count: 80, href: '#', color: 'bg-teal-50 border-teal-100' },
              { icon: <FlaskConical size={22} className="text-amber-600" />, label: 'Studies', count: 200, href: '#', color: 'bg-amber-50 border-amber-100' },
              { icon: <Database size={22} className="text-emerald-600" />, label: 'Datasets', count: 35, href: '#', color: 'bg-emerald-50 border-emerald-100' },
              { icon: <GraduationCap size={22} className="text-orange-600" />, label: 'Academic Centers', count: 40, href: '#', color: 'bg-orange-50 border-orange-100' },
              { icon: <Users size={22} className="text-rose-600" />, label: 'Consortia', count: 12, href: '#', color: 'bg-rose-50 border-rose-100' },
              { icon: <Calendar size={22} className="text-slate-600" />, label: 'Events', count: 8, href: '#', color: 'bg-slate-100 border-slate-200' },
            ].map(card => (
              <DirectoryCategoryCard key={card.label} {...card} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          <FilterBar options={typeFilters} active={activeFilter} onChange={setActiveFilter} />
          <div className="w-full sm:w-64">
            <SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Search directory..." />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-lg font-medium mb-2">No entries found</p>
            <p className="text-sm">Try adjusting your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(entry => (
              <DirectoryCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}

        <div className="mt-12 p-8 bg-slate-50 border border-dashed border-slate-300 rounded-2xl text-center">
          <h3 className="font-bold text-slate-900 mb-2">Is your company or research missing?</h3>
          <p className="text-slate-500 text-sm mb-4">Submit a listing request and we'll review and add it to the directory.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0c2340] hover:bg-[#0e2d52] text-white font-semibold rounded-xl transition-colors text-sm">
            Request a Listing
          </a>
        </div>
      </div>

      <CTASection
        title="List your company, product, or study"
        subtitle="The directory is free to use and submit to. Get discovered by researchers, clinicians, and investors in the field."
        primaryCta={{ label: 'Submit a Listing', href: '/contact' }}
        secondaryCta={{ label: 'View Companies', href: '/for-companies' }}
      />
    </>
  );
}
