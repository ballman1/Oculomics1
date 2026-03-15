import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Eye, Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Learn', children: [
    { label: 'What Is Oculomics', href: '/what-is-oculomics' },
    { label: 'For Patients', href: '/for-patients' },
    { label: 'For Doctors', href: '/for-doctors' },
    { label: 'For Researchers', href: '/for-researchers' },
    { label: 'Glossary', href: '/glossary' },
  ]},
  { label: 'Industry', children: [
    { label: 'For Investors', href: '/for-investors' },
    { label: 'For Companies', href: '/for-companies' },
    { label: 'Directory', href: '/directory' },
  ]},
  { label: 'Newsroom', href: '/newsroom' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || mobileOpen ? 'bg-white shadow-sm border-b border-slate-100' : 'bg-white/90 backdrop-blur-md border-b border-white/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 bg-[#0c2340] rounded-lg flex items-center justify-center">
              <Eye className="text-teal-400" size={18} />
            </div>
            <span className="font-bold text-[#0c2340] text-lg tracking-tight">Oculomics<span className="text-teal-500">Hub</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map(item => (
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                    className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-50">
                      {item.children.map(child => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === item.href ? 'text-teal-600 bg-teal-50' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Submit Research
            </Link>
            <Link
              to="/for-companies"
              className="px-4 py-2 bg-[#0c2340] hover:bg-[#0e2d52] text-white text-sm font-semibold rounded-xl transition-colors"
            >
              List Your Company
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-1">
          {navItems.map(item => (
            item.children ? (
              <div key={item.label}>
                <div className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-400">{item.label}</div>
                {item.children.map(child => (
                  <Link key={child.href} to={child.href} className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors">
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.label} to={item.href!} className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors">
                {item.label}
              </Link>
            )
          ))}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <Link to="/contact" className="block w-full text-center px-4 py-3 border border-slate-200 text-sm font-semibold text-slate-700 rounded-xl hover:bg-slate-50 transition-colors">
              Submit Research
            </Link>
            <Link to="/for-companies" className="block w-full text-center px-4 py-3 bg-[#0c2340] text-white text-sm font-semibold rounded-xl hover:bg-[#0e2d52] transition-colors">
              List Your Company
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
