import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, MapPin, Plus, Monitor } from 'lucide-react';
import DirectoryPageLayout from '../../components/directory/DirectoryPageLayout';
import { getEvents } from '../../services/directoryService';
import { eventTypeOptions } from '../../data/events';

const sortOptions = [
  { value: 'date_asc', label: 'Date (Soonest)' },
  { value: 'date_desc', label: 'Date (Latest)' },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function DateWidget({ dateStr }: { dateStr: string }) {
  const d = new Date(dateStr);
  const month = d.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase();
  const day = d.getDate();
  return (
    <div className="w-14 h-14 bg-[#0c2340] rounded-xl flex flex-col items-center justify-center flex-shrink-0">
      <span className="text-teal-400 text-xs font-bold tracking-wide">{month}</span>
      <span className="text-white text-xl font-bold leading-none">{day}</span>
    </div>
  );
}

export default function EventsDirectory() {
  const events = getEvents();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('date_asc');
  const [filters, setFilters] = useState<Record<string, string>>({ type: 'All', location: 'All' });

  const filtered = useMemo(() => {
    let result = events.filter(e => {
      if (search && !e.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (filters.type !== 'All' && e.eventType !== filters.type) return false;
      if (filters.location === 'Virtual' && !e.isVirtual) return false;
      if (filters.location === 'In-Person' && e.isVirtual) return false;
      return true;
    });
    result.sort((a, b) => {
      const da = new Date(a.eventDate).getTime();
      const db = new Date(b.eventDate).getTime();
      return sort === 'date_asc' ? da - db : db - da;
    });
    return result;
  }, [events, search, filters, sort]);

  return (
    <DirectoryPageLayout
      title="Events"
      subtitle="Conferences, workshops, and consortium meetings relevant to the oculomics field."
      label="Events"
      icon={<Calendar size={20} className="text-orange-600" />}
      accentColor="bg-orange-50"
      resultCount={filtered.length}
      totalCount={events.length}
      search={search}
      onSearchChange={setSearch}
      sortValue={sort}
      onSortChange={setSort}
      sortOptions={sortOptions}
      filters={[
        { label: 'Event Type', key: 'type', options: eventTypeOptions },
        { label: 'Format', key: 'location', options: ['All', 'In-Person', 'Virtual'] },
      ]}
      activeFilters={filters}
      onFilterChange={(k, v) => setFilters(prev => ({ ...prev, [k]: v }))}
      onClearAll={() => setFilters({ type: 'All', location: 'All' })}
      currentPage={1}
      totalPages={1}
      onPageChange={() => {}}
      breadcrumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Events' }]}
      cta={
        <Link to="/submit/event" className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0c2340] text-white font-semibold rounded-xl text-sm hover:bg-[#0e2d52] transition-colors border border-white/10">
          <Plus size={15} /> Submit Event
        </Link>
      }
    >
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-slate-400">No events match your filters.</div>
        ) : filtered.map(event => (
          <Link
            key={event.id}
            to={`/directory/events/${event.slug}`}
            className="group block bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <DateWidget dateStr={event.eventDate} />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">{event.name}</h3>
                  <span className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all flex-shrink-0">
                    Details <ArrowRight size={12} />
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-3 flex-wrap">
                  <span>{event.organizer}</span>
                  <span className="flex items-center gap-1">
                    {event.isVirtual ? <Monitor size={11} /> : <MapPin size={11} />}
                    {event.location}
                  </span>
                  <span>{formatDate(event.eventDate)}{event.eventDateEnd ? ` – ${formatDate(event.eventDateEnd)}` : ''}</span>
                </p>
                <p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">{event.shortDescription}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="text-xs bg-orange-50 text-orange-700 border border-orange-100 px-2 py-0.5 rounded-full">{event.eventType}</span>
                  {event.isVirtual && <span className="text-xs bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full">Virtual</span>}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </DirectoryPageLayout>
  );
}
