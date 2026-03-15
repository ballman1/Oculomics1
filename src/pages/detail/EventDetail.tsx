import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MapPin, Monitor } from 'lucide-react';
import { getEventBySlug } from '../../services/directoryService';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function DateWidget({ dateStr }: { dateStr: string }) {
  const d = new Date(dateStr);
  const month = d.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase();
  const day = d.getDate();
  const year = d.getFullYear();
  return (
    <div className="w-20 h-20 bg-[#0c2340] border border-white/10 rounded-2xl flex flex-col items-center justify-center flex-shrink-0">
      <span className="text-teal-400 text-xs font-bold tracking-wide">{month}</span>
      <span className="text-white text-3xl font-bold leading-none">{day}</span>
      <span className="text-slate-400 text-xs">{year}</span>
    </div>
  );
}

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event = getEventBySlug(slug ?? '');

  if (!event) return (
    <div className="pt-40 text-center pb-20">
      <p className="text-slate-500">Event not found.</p>
      <Link to="/directory/events" className="text-teal-600 text-sm mt-3 inline-block">Back to Events</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-[#0c2340] text-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Events', href: '/directory/events' }, { label: event.name }]} variant="dark" />
          <div className="mt-6 flex items-start gap-5 flex-wrap">
            <DateWidget dateStr={event.eventDate} />
            <div className="flex-1">
              <span className="text-xs bg-orange-400/20 text-orange-300 border border-orange-400/30 px-2.5 py-1 rounded-full mb-2 inline-block">{event.eventType}</span>
              <h1 className="text-2xl font-bold">{event.name}</h1>
              <p className="text-slate-400 text-sm mt-1">{event.organizer}</p>
              <p className="text-slate-400 text-sm mt-0.5 flex items-center gap-2">
                {event.isVirtual ? <Monitor size={13} /> : <MapPin size={13} />}
                {event.location}
              </p>
            </div>
            {event.registrationUrl && (
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl text-sm transition-colors">
                <ExternalLink size={14} /> Register / Learn More
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3">About This Event</h2>
          <p className="text-slate-600 leading-relaxed whitespace-pre-line">{event.longDescription}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 space-y-3">
            <h3 className="font-bold text-slate-900 text-sm">Event Details</h3>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Date</p>
              <p className="text-sm text-slate-700 mt-0.5">
                {formatDate(event.eventDate)}
                {event.eventDateEnd && ` – ${formatDate(event.eventDateEnd)}`}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Location</p>
              <p className="text-sm text-slate-700 mt-0.5">{event.location}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Format</p>
              <p className="text-sm text-slate-700 mt-0.5">{event.isVirtual ? 'Virtual / Online' : 'In-Person'}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Type</p>
              <p className="text-sm text-slate-700 mt-0.5">{event.eventType}</p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
            <h3 className="font-bold text-slate-900 text-sm mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {event.topics.map(t => (
                <span key={t} className="text-xs bg-orange-50 text-orange-700 border border-orange-100 px-2.5 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <Link to="/directory/events" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
          <ArrowLeft size={14} /> Back to Events
        </Link>
      </div>
    </div>
  );
}
