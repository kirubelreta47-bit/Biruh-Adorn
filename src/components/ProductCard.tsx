import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Check, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product) => void;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetail,
  index = 0,
}) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const handleBagClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenDetail(product);
  };

  const hasMultipleImages = product.images.length > 1;

  // Extract a brief material summary
  const materialSummary = product.material
    ? product.material.split('&')[0].trim()
    : 'Handcrafted';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.3),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onClick={() => onOpenDetail(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImageIdx(0);
      }}
      className="group relative w-full aspect-[5/7] rounded-xl sm:rounded-2xl overflow-hidden border border-[#D6B878]/25 hover:border-[#D6B878]/70 shadow-[0_4px_20px_-4px_rgba(7,17,31,0.12)] hover:shadow-[0_20px_40px_-10px_rgba(7,17,31,0.35)] transition-all duration-600 ease-out cursor-pointer select-none bg-[#07111F]"
    >
      {/* Full-Bleed Jewelry Photograph */}
      <img
        src={product.images[activeImageIdx] || product.images[0]}
        alt={product.name}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out ${isHovered ? 'scale-[1.04]' : 'scale-100'
          }`}
        loading="lazy"
      />

      {/* Hover Crossfade Alternate Image */}
      {hasMultipleImages && activeImageIdx === 0 && (
        <img
          src={product.images[1]}
          alt={`${product.name} alternate angle`}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${isHovered ? 'opacity-100 scale-[1.04]' : 'opacity-0 scale-100'
            }`}
          loading="lazy"
        />
      )}

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
        {/* Top-Left Badge: New or Signature */}
        <div>
          {product.isNew ? (
            <span className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] font-sans font-medium uppercase tracking-[0.2em] bg-[#07111F]/75 text-[#D6B878] px-2.5 py-1 rounded-full backdrop-blur-xs border border-[#D6B878]/40 shadow-xs group-hover:border-[#D6B878]/80 transition-colors duration-300">
              <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#D6B878] animate-pulse" />
              <span className="text-gold-shine font-semibold">New</span>
            </span>
          ) : product.isFeatured ? (
            <span className="text-[8px] sm:text-[9px] font-sans font-medium uppercase tracking-[0.2em] bg-[#FAF8F5]/90 text-[#07111F] px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/40 shadow-xs">
              Signature
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] font-sans font-medium uppercase tracking-[0.2em] bg-[#07111F]/75 text-[#D6B878] px-2.5 py-1 rounded-full backdrop-blur-xs border border-[#D6B878]/40 shadow-xs">
              ✦ 0{index + 1}
            </span>
          )}
        </div>

        {/* Top-Right Badge: Category Silhouette Tag */}
        <span className="text-[8px] sm:text-[9px] font-sans font-medium uppercase tracking-[0.22em] bg-[#FAF8F5]/90 text-[#07111F] px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/40 shadow-xs">
          {product.categoryLabel}
        </span>
      </div>

      {/* Multi-image gallery indicator dots */}
      {hasMultipleImages && (
        <div className="absolute bottom-24 sm:bottom-28 inset-x-0 flex items-center justify-center gap-1 sm:gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-auto">
          {product.images.slice(0, 4).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIdx(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${activeImageIdx === i
                ? 'w-3.5 sm:w-4 bg-[#D6B878] shadow-xs'
                : 'w-1.5 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5]'
                }`}
              aria-label={`View photo ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Bottom Information (Positioned Inside Full-Image Card) */}
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 lg:p-6 z-10 flex flex-col justify-end text-left pointer-events-none">
        {/* Category Number / Material Line: small uppercase champagne gold */}
        <span className="text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-[0.24em] text-[#D6B878] group-hover:text-[#FFF0D0] transition-colors duration-300 mb-0.5 sm:mb-1 block truncate">
          {product.categoryLabel} · Handcrafted
        </span>

        {/* Product Name: elegant large serif font in warm ivory */}
        <h3 className="font-serif text-lg sm:text-2xl lg:text-[24px] font-normal text-[#F5F0E6] tracking-tight leading-tight uppercase mb-0.5 sm:mb-1 group-hover:text-white transition-colors duration-300 line-clamp-1">
          {product.name}
        </h3>

        {/* Subtle Material Detail: soft ivory, smaller sans-serif */}
        <p className="font-sans text-[11px] sm:text-xs text-[#D4D0C6] font-light leading-relaxed line-clamp-1 mb-2.5 sm:mb-3">
          {materialSummary}
        </p>

        {/* Thin Muted Champagne-Gold Horizontal Separator */}
        <div className="w-full h-[1px] bg-[#D6B878]/30 mb-2.5 sm:mb-3 group-hover:bg-[#D6B878]/60 transition-colors duration-300" />

        {/* Bottom Information Row: Price & Interactive Actions */}
        <div className="flex items-center justify-between gap-2">
          {/* Price: warm ivory */}
          <div className="flex items-baseline gap-1 font-sans text-[9px] sm:text-[11px] uppercase tracking-[0.16em] text-[#D4D0C6]">
            <span className="text-[#B8B3A8]">ETB</span>
            <span className="text-xs sm:text-base font-semibold text-[#F5F0E6] tabular-nums tracking-tight">
              {product.price.toLocaleString()}
            </span>
          </div>

          {/* Interactive Actions: View and Quick Add to Bag */}
          <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
            {/* Quick View Link */}
            <button
              type="button"
              onClick={handleQuickViewClick}
              className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-sans font-semibold tracking-widest uppercase text-[#D6B878] hover:text-[#FFF0D0] transition-colors duration-300 cursor-pointer py-1"
              aria-label={`Quick view ${product.name}`}
            >
              <span>VIEW</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D6B878] group-hover:translate-x-[4px] transition-transform duration-300" />
            </button>

            {/* Quick Add Bag Button */}
            <button
              type="button"
              onClick={handleBagClick}
              className={`px-2 py-1 sm:px-2.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-[0.16em] flex items-center gap-1 transition-all duration-300 cursor-pointer shadow-xs ${added
                ? 'gold-btn-shine text-[#07111F] font-semibold scale-102'
                : 'bg-[#07111F]/90 hover:bg-gold-shine text-[#FAF8F5] hover:text-[#07111F] border border-[#203B5C]/80 hover:border-[#D6B878]'
                }`}
              aria-label={`Add ${product.name} to bag`}
              title={added ? 'Added to bag' : 'Add to bag'}
            >
              {added ? (
                <>
                  <Check className="w-3 h-3 text-[#07111F]" />
                  <span className="hidden sm:inline">Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-3 h-3" />
                  <span className="hidden sm:inline">Bag</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
