import React, { useState, useMemo } from 'react';
import { Search, ArrowUpDown } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Category, Product } from '../types';
import { motion } from 'motion/react';

interface ShopViewProps {
  initialCategory?: Category;
  onOpenDetail: (product: Product) => void;
}

const CATEGORY_TABS: { id: Category; label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'necklaces', label: 'NECKLACES' },
  { id: 'bracelets', label: 'BRACELETS' },
  { id: 'rings', label: 'RINGS' },
  { id: 'earrings', label: 'EARRINGS' },
  { id: 'sets', label: 'SETS' },
  { id: 'ear-cuffs', label: 'EAR CUFFS' },
];

export const ShopView: React.FC<ShopViewProps> = ({
  initialCategory = 'all',
  onOpenDetail,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured');
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.material.toLowerCase().includes(query) ||
        product.categoryLabel.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#8E98A8] block mb-2">
            Handcrafted Archive
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0B121E] tracking-tight mb-3">
            SHOP THE COLLECTION
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#5C6474] font-light leading-relaxed">
            Every sculptural piece shaped by hand in our Addis Ababa studio. Filter by category, silhouette, or gemstone.
          </p>
        </div>

        {/* Category Tabs & Interactive Controls */}
        <div className="border-y border-[#EBE7DF] py-4 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center space-x-1.5 sm:space-x-3 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {CATEGORY_TABS.map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(tab.id);
                      setVisibleCount(12);
                    }}
                    className={`px-3 py-1.5 text-xs font-sans uppercase tracking-[0.18em] transition-all whitespace-nowrap cursor-pointer rounded-xs ${
                      isActive
                        ? 'bg-[#0B121E] text-[#FAF8F5] font-medium shadow-xs'
                        : 'text-[#5C6474] hover:text-[#0B121E] hover:bg-[#EFECE4]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search & Sort */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-60">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8E98A8]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(12);
                  }}
                  placeholder="Search pieces..."
                  className="w-full bg-[#FAF8F5] border border-[#E0DBD0] pl-8 pr-3 py-1.5 text-xs text-[#0B121E] placeholder-[#8E98A8] focus:outline-hidden focus:border-[#0B121E] transition-colors rounded-xs"
                />
              </div>

              <div className="relative shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#FAF8F5] border border-[#E0DBD0] px-3 py-1.5 text-xs font-sans uppercase tracking-wider text-[#0B121E] focus:outline-hidden focus:border-[#0B121E] cursor-pointer appearance-none pr-7 rounded-xs"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">New Releases</option>
                </select>
                <ArrowUpDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#8E98A8] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-[#8E98A8] mb-6">
          <span>Showing {displayedProducts.length} of {filteredProducts.length} pieces</span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-[#0B121E] underline hover:text-[#C5A880] cursor-pointer"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* Product Grid - 2 columns on mobile for smaller compact card look */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-5 sm:gap-y-10">
            {displayedProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={onOpenDetail}
                index={idx % 8}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#F5F2EB] p-8 border border-dashed border-[#D5CEBE]">
            <p className="font-serif text-2xl text-[#0B121E] mb-2">No pieces found</p>
            <p className="text-xs text-[#5C6474] mb-6">
              Try adjusting your category selection or search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#0B121E] text-[#FAF8F5] text-xs uppercase tracking-widest hover:bg-[#C5A880] hover:text-[#0B121E] transition-colors"
            >
              View All Pieces
            </button>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="inline-flex items-center justify-center px-8 py-3 border border-[#0B121E] text-xs font-semibold uppercase tracking-[0.2em] text-[#0B121E] hover:bg-[#0B121E] hover:text-[#FAF8F5] transition-all cursor-pointer"
            >
              Load More Pieces
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
