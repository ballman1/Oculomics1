import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Package, ArrowRight, Plus } from 'lucide-react';
import DirectoryPageLayout from '../../components/directory/DirectoryPageLayout';
import EvidenceBadge from '../../components/ui/EvidenceBadge';
import SubmissionBadge from '../../components/ui/SubmissionBadge';
import { getProducts } from '../../services/directoryService';
import { productCategoryOptions } from '../../data/products';
import { diseaseAreaOptions, modalityOptions } from '../../data/companies';

const ITEMS_PER_PAGE = 9;

const sortOptions = [
  { value: 'name_asc', label: 'Name A–Z' },
  { value: 'name_desc', label: 'Name Z–A' },
];

export default function ProductsDirectory() {
  const products = getProducts();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name_asc');
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Record<string, string>>({
    category: 'All', diseaseArea: 'All', modality: 'All',
  });

  const filtered = useMemo(() => {
    let result = products.filter(p => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) &&
          !p.shortDescription.toLowerCase().includes(search.toLowerCase())) return false;
      if (filters.category !== 'All' && p.category !== filters.category) return false;
      if (filters.diseaseArea !== 'All' && !p.diseaseFocus.includes(filters.diseaseArea)) return false;
      if (filters.modality !== 'All' && !p.modalities.includes(filters.modality)) return false;
      return true;
    });
    result.sort((a, b) => sort === 'name_desc' ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));
    return result;
  }, [products, search, filters, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPage(1);
  };

  return (
    <DirectoryPageLayout
      title="Products & Tools"
      subtitle="AI diagnostic software, screening platforms, and clinical tools for oculomics applications."
      label="Products"
      icon={<Package size={20} className="text-teal-600" />}
      accentColor="bg-teal-50"
      resultCount={filtered.length}
      totalCount={products.length}
      search={search}
      onSearchChange={v => { setSearch(v); setPage(1); }}
      sortValue={sort}
      onSortChange={setSort}
      sortOptions={sortOptions}
      filters={[
        { label: 'Category', key: 'category', options: productCategoryOptions },
        { label: 'Disease Area', key: 'diseaseArea', options: diseaseAreaOptions },
        { label: 'Modality', key: 'modality', options: modalityOptions },
      ]}
      activeFilters={filters}
      onFilterChange={handleFilterChange}
      onClearAll={() => setFilters({ category: 'All', diseaseArea: 'All', modality: 'All' })}
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
      breadcrumbs={[{ label: 'Directory', href: '/directory' }, { label: 'Products' }]}
      cta={
        <Link to="/submit/product" className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0c2340] text-white font-semibold rounded-xl text-sm hover:bg-[#0e2d52] transition-colors border border-white/10">
          <Plus size={15} /> Submit a Product
        </Link>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {paginated.length === 0 ? (
          <div className="col-span-full py-20 text-center text-slate-400">No products match your filters.</div>
        ) : paginated.map(product => (
          <Link
            key={product.id}
            to={`/directory/products/${product.slug}`}
            className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package size={18} className="text-teal-500" />
              </div>
              <SubmissionBadge type={product.submissionType} size="sm" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{product.name}</h3>
              <Link to={`/directory/companies/${product.companySlug}`} className="text-xs text-teal-600 hover:underline mt-0.5 block" onClick={e => e.stopPropagation()}>
                {product.companyName}
              </Link>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">{product.shortDescription}</p>
            <EvidenceBadge level={product.evidenceLevel} size="sm" />
            <div className="flex flex-wrap gap-1">
              <span className="text-xs bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">{product.category}</span>
              <span className="text-xs bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">{product.regulatoryStatus.split(' ')[0]}</span>
            </div>
            <div className="pt-2 border-t border-slate-50 flex justify-end">
              <span className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                View product <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </DirectoryPageLayout>
  );
}
