import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Category } from '../types';
import { motion } from 'motion/react';

interface ShopByFormProps {
  onSelectCategory: (category: Category) => void;
  onViewAll: () => void;
}

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
    <section
      id="collection-section"
      className="w-full bg-linear-to-b from-[#07111F]/3 via-[#FAF8F5] to-[#FAF8F5] border-b border-[#EBE7DF] overflow-hidden"
    >
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
            <div className="inline-flex items-center gap-1.5 text-[10px] font-sans font-medium uppercase tracking-[0.28em] bg-[#07111F] text-[#F5F0E6] px-3 py-1 rounded-full border border-[#D6B878]/35 shadow-xs mb-2.5">
              <Compass className="w-3 h-3 text-[#D6B878]" />
              <span>Curated Silhouettes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#07111F] tracking-tight">
              Shop by Form
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#6C7688] font-light mt-1 max-w-md">
              Discover designs arranged by silhouette — sculpted to complement human geometry and organic movement.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAll}
            className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#07111F] hover:text-[#D6B878] transition-colors cursor-pointer self-start sm:self-auto py-1"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </motion.div>

        {/* Category Cards Grid — Full-Image Transparent Jewelry Category Cards */}
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
                className="group relative w-full aspect-[5/7] rounded-xl sm:rounded-2xl overflow-hidden border border-[#D6B878]/25 hover:border-[#D6B878]/70 shadow-[0_4px_20px_-4px_rgba(7,17,31,0.12)] hover:shadow-[0_20px_40px_-10px_rgba(7,17,31,0.35)] transition-all duration-600 ease-out cursor-pointer select-none bg-[#07111F]"
              >
                {/* Full-Bleed Jewelry Photograph */}
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />

                {/* Subtle Gold Sheen Light Sweep on Hover */}
                <div className="gold-card-sheen" />

                {/* Transparent Dark Navy Gradient Overlay: Top 0 -> Middle 0.10 -> Bottom 0.94 */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-600 ease-out"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(7, 17, 31, 0) 0%, rgba(7, 17, 31, 0.04) 30%, rgba(7, 17, 31, 0.10) 45%, rgba(7, 17, 31, 0.52) 65%, rgba(5, 11, 20, 0.86) 82%, rgba(5, 11, 20, 0.94) 95%, rgba(5, 11, 20, 0.97) 100%)',
                  }}
                />

                {/* Hover Deepening Gradient Layer */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(7, 17, 31, 0) 0%, rgba(7, 17, 31, 0.08) 35%, rgba(5, 11, 20, 0.60) 65%, rgba(5, 11, 20, 0.90) 82%, rgba(5, 11, 20, 0.98) 100%)',
                  }}
                />

                {/* Top Badges (Aligned Consistently) */}
                <div className="absolute top-3 inset-x-3 sm:top-4 sm:inset-x-4 flex items-center justify-between pointer-events-none z-10">
                  {/* Top-Left Number Badge: Transparent Dark Navy with Thin Gold Border */}
                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-[0.2em] bg-[#07111F]/75 text-[#D6B878] px-2.5 py-1 rounded-full backdrop-blur-xs border border-[#D6B878]/40 shadow-xs group-hover:border-[#D6B878]/80 transition-colors duration-300">
                    <span className="text-[#D6B878] text-[8px] sm:text-[9px]">✦</span>
                    <span>0{idx + 1}</span>
                  </span>

                  {/* Top-Right SILHOUETTE Badge: Soft Ivory with Deep Navy Text */}
                  <span className="text-[8px] sm:text-[9px] font-sans font-medium uppercase tracking-[0.22em] bg-[#FAF8F5]/90 text-[#07111F] px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/40 shadow-xs">
                    Silhouette
                  </span>
                </div>

                {/* Bottom Information (Positioned Inside Full-Image Card) */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 lg:p-6 z-10 flex flex-col justify-end text-left pointer-events-none">
                  {/* Category Number: small uppercase champagne gold */}
                  <span className="text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-[0.24em] text-[#D6B878] group-hover:text-[#FFF0D0] transition-colors duration-300 mb-0.5 sm:mb-1 block">
                    CARD 0{idx + 1}
                  </span>

                  {/* Main Category Name: elegant large serif font in warm ivory */}
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-normal text-[#F5F0E6] tracking-tight leading-tight uppercase mb-0.5 sm:mb-1 group-hover:text-white transition-colors duration-300">
                    {cat.label}
                  </h3>

                  {/* Description: soft ivory, smaller sans-serif */}
                  <p className="font-sans text-[11px] sm:text-xs text-[#D4D0C6] font-light leading-relaxed line-clamp-1 mb-2.5 sm:mb-3">
                    {subtitle}
                  </p>

                  {/* Thin Muted Champagne-Gold Horizontal Separator */}
                  <div className="w-full h-[1px] bg-[#D6B878]/30 mb-2.5 sm:mb-3 group-hover:bg-[#D6B878]/60 transition-colors duration-300" />

                  {/* Bottom Information Row: Piece Count & Explore Action */}
                  <div className="flex items-center justify-between gap-2">
                    {/* Piece Count: warm ivory */}
                    <div className="flex items-baseline gap-1 font-sans text-[9px] sm:text-[11px] uppercase tracking-[0.16em] text-[#D4D0C6]">
                      <span className="text-[#B8B3A8]">PIECES</span>
                      <span className="font-medium text-[#F5F0E6]">
                        {count} Designs
                      </span>
                    </div>

                    {/* Explore Action: champagne gold with animated arrow */}
                    <div className="inline-flex items-center gap-1 sm:gap-1.5 font-sans text-[9px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#D6B878] group-hover:text-[#FFF0D0] transition-colors duration-300">
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D6B878] group-hover:text-[#FFF0D0] transition-transform duration-300 group-hover:translate-x-[5px]" />
                    </div>
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
