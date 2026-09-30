import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Category } from '../types';
import { motion } from 'motion/react';

interface ShopByFormProps {
  onSelectCategory: (category: Category) => void;
  onViewAll: () => void;
}

const MARQUEE_ITEMS = [
  'HANDCRAFTED IN ADDIS ABABA',
  'ETHIOPIAN NATURAL STONES',
  'RECYCLED SOLID BRASS',
  'ARCHITECTURAL SILHOUETTES',
  'COMPLIMENTARY LOCAL DELIVERY',
  'BESPOKE ARTISAN COMMISSIONS',
];

const CATEGORY_SUBTITLES: Record<string, string> = {
  necklaces: 'Natural Highland Stones',
  bracelets: 'Stacked Gemstone Bangles',
  rings: 'Sculptural Wire Coils',
  earrings: 'Sunburst & Arch Drops',
};

export const ShopByForm: React.FC<ShopByFormProps> = ({
  onSelectCategory,
  onViewAll,
}) => {
  return (
    <section className="w-full bg-[#FAF8F5] border-b border-[#EBE7DF] overflow-hidden">
      {/* Luxury Moving Marquee Banner */}
      <div className="w-full bg-[#0B121E] text-[#E8D9C5] py-3 overflow-hidden border-y border-[#1A263C]">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-8 shrink-0 px-4">
            {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-[11px] font-sans tracking-[0.26em] uppercase font-light flex items-center gap-6"
              >
                <span>{item}</span>
                <span className="text-[#C5A880] text-xs">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-[#8E98A8] mb-2">
              <Compass className="w-3 h-3 text-[#C5A880]" />
              <span>Curated Silhouettes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0B121E] tracking-tight">
              Shop by Form
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#6C7688] font-light mt-1 max-w-md">
              Discover designs arranged by silhouette — sculpted to complement human geometry and organic movement.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAll}
            className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#0B121E] hover:text-[#C5A880] transition-colors cursor-pointer self-start sm:self-auto py-1"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </motion.div>

        {/* Category Cards Grid - Matches Selected Pieces Design exactly: 2 columns on mobile, smaller compact cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-7">
          {CATEGORIES.map((cat, idx) => {
            const count = PRODUCTS.filter((p) => p.category === cat.id).length;
            const subtitle = CATEGORY_SUBTITLES[cat.id] || 'Handcrafted Form';

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(idx * 0.06, 0.3),
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative flex flex-col bg-white/80 hover:bg-white rounded-lg sm:rounded-xl border border-[#ECE7DE] hover:border-[#C5A880]/60 shadow-[0_2px_12px_-4px_rgba(11,18,30,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(11,18,30,0.12)] hover:-translate-y-1 sm:hover:-translate-y-1.5 transition-all duration-400 cursor-pointer overflow-hidden select-none"
              >
                {/* Editorial Image Stage */}
                <div className="relative aspect-4/5 w-full bg-[#F4F0E8] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />

                  {/* Soft Ambient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B121E]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-2 left-2 right-2 sm:top-3 sm:inset-x-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] font-sans font-medium uppercase tracking-[0.16em] sm:tracking-[0.24em] bg-[#0B121E]/95 text-[#E8D9C5] px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-xs backdrop-blur-xs border border-[#C5A880]/30">
                      <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#C5A880]" />
                      <span>0{idx + 1}</span>
                    </span>

                    <span className="text-[8px] sm:text-[9px] font-sans font-medium uppercase tracking-[0.14em] sm:tracking-[0.22em] bg-[#FAF8F5]/90 text-[#0B121E] px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-xs backdrop-blur-xs border border-[#E0DBD0]">
                      Silhouette
                    </span>
                  </div>

                  {/* Mobile Tap Cue */}
                  <div className="sm:hidden absolute bottom-2 right-2 z-20">
                    <div className="w-7 h-7 rounded-full bg-[#0B121E]/90 text-[#FAF8F5] backdrop-blur-xs flex items-center justify-center shadow-md">
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                    </div>
                  </div>

                  {/* Floating Action Bar on Desktop (Slides up on Hover) */}
                  <div className="hidden sm:flex absolute bottom-3 inset-x-3 z-20 items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-full h-9 px-3 bg-[#0B121E]/95 text-[#FAF8F5] group-hover:text-[#E8D9C5] backdrop-blur-md rounded-lg text-[11px] font-sans font-medium uppercase tracking-[0.16em] flex items-center justify-center gap-1.5 shadow-md border border-[#1A253A] transition-all duration-200">
                      <span>Explore {cat.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                    </div>
                  </div>
                </div>

                {/* Luxury Typography & Card Metadata Section */}
                <div className="p-2.5 sm:p-5 flex flex-col justify-between flex-1 bg-transparent">
                  <div>
                    {/* Category & Craft Details */}
                    <div className="flex items-center justify-between text-[8px] sm:text-[10px] font-sans uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#8E98A8] mb-1 sm:mb-1.5">
                      <span className="truncate">Form 0{idx + 1}</span>
                      <span className="text-[8px] sm:text-[9px] text-[#A69B88] font-serif italic lowercase tracking-normal shrink-0 hidden sm:inline">
                        handcrafted
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[13px] sm:text-base lg:text-lg text-[#0B121E] font-medium sm:font-normal leading-snug group-hover:text-[#9F7A44] transition-colors duration-200 line-clamp-1">
                      {cat.label}
                    </h3>

                    {/* Subtle Detail */}
                    <p className="text-[9px] sm:text-[11px] font-sans text-[#7A8394] font-light truncate mt-0.5 sm:mt-1">
                      {subtitle}
                    </p>
                  </div>

                  {/* Designs & Explore Link Row */}
                  <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-[#F0ECE2] flex items-baseline justify-between gap-1 sm:gap-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[8px] sm:text-[10px] font-sans uppercase tracking-wider sm:tracking-widest text-[#8E98A8]">
                        Pieces
                      </span>
                      <span className="font-sans text-xs sm:text-base font-semibold text-[#0B121E] tabular-nums tracking-tight">
                        {count > 0 ? `${count} Designs` : 'Curated'}
                      </span>
                    </div>

                    <span className="text-[8px] sm:text-[10px] font-sans text-[#A8987E] group-hover:text-[#0B121E] transition-colors tracking-wider uppercase font-light hidden sm:inline-flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
