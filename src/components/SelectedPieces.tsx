import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { motion } from 'motion/react';

interface SelectedPiecesProps {
  onOpenDetail: (product: Product) => void;
  onViewAllGallery: () => void;
}

export const SelectedPieces: React.FC<SelectedPiecesProps> = ({
  onOpenDetail,
  onViewAllGallery,
}) => {
  // Take 4 curated signature pieces
  const selectedProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="relative w-full bg-[#FAF8F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative ambient subtle background highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-[#F2EDE2]/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-[#A68352] mb-2">
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0B121E] tracking-tight">
              Selected Pieces
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#6C7688] font-light mt-1 max-w-lg">
              Each piece is an exploration of organic form and architectural precision, sculpted by hand in Addis Ababa.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAllGallery}
            className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#0B121E] hover:text-[#C5A880] transition-colors cursor-pointer self-start sm:self-auto py-1"
          >
            <span>Explore All Pieces</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </motion.div>

        {/* 4 Product Cards Grid with Staggered Entrance - 2 columns on mobile for smaller sleek cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-7">
          {selectedProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenDetail}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
