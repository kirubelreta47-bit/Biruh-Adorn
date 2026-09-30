import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Check, Eye, Sparkles } from 'lucide-react';
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
      className="group relative flex flex-col bg-white/80 hover:bg-white rounded-lg sm:rounded-xl border border-[#ECE7DE] hover:border-[#C5A880]/60 shadow-[0_2px_12px_-4px_rgba(11,18,30,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(11,18,30,0.12)] hover:-translate-y-1 sm:hover:-translate-y-1.5 transition-all duration-400 cursor-pointer overflow-hidden select-none"
    >
      {/* Editorial Image Stage */}
      <div className="relative aspect-4/5 w-full bg-[#F4F0E8] overflow-hidden">
        {/* Main Product Image */}
        <img
          src={product.images[activeImageIdx] || product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
            isHovered ? 'scale-106' : 'scale-100'
          }`}
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Hover Crossfade Alternate Image */}
        {hasMultipleImages && activeImageIdx === 0 && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate angle`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
              isHovered ? 'opacity-100 scale-106' : 'opacity-0 scale-100'
            }`}
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        )}

        {/* Soft Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B121E]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 right-2 sm:top-3 sm:inset-x-3 flex items-center justify-between pointer-events-none z-10">
          <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
            {product.isNew && (
              <span className="inline-flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[9px] font-sans font-medium uppercase tracking-[0.16em] sm:tracking-[0.24em] bg-[#0B121E]/95 text-[#E8D9C5] px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-xs backdrop-blur-xs border border-[#C5A880]/30">
                <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#C5A880]" />
                <span>New</span>
              </span>
            )}
            {product.isFeatured && !product.isNew && (
              <span className="text-[8px] sm:text-[9px] font-sans font-medium uppercase tracking-[0.14em] sm:tracking-[0.22em] bg-[#FAF8F5]/90 text-[#0B121E] px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-xs backdrop-blur-xs border border-[#E0DBD0]">
                Signature
              </span>
            )}
          </div>
        </div>

        {/* Multi-image gallery indicator dots */}
        {hasMultipleImages && (
          <div className="absolute bottom-12 sm:bottom-16 inset-x-0 flex items-center justify-center gap-1 sm:gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-auto">
            {product.images.slice(0, 4).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIdx(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  activeImageIdx === i
                    ? 'w-3.5 sm:w-4 bg-[#FAF8F5] shadow-xs'
                    : 'w-1.5 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5]'
                }`}
                aria-label={`View photo ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Quick Add Floating Button on Mobile Touchscreens (visible without hover) */}
        <div className="sm:hidden absolute bottom-2 right-2 z-20">
          <button
            type="button"
            onClick={handleBagClick}
            className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer ${
              added
                ? 'bg-[#C5A880] text-[#0B121E] scale-105'
                : 'bg-[#0B121E]/90 text-[#FAF8F5] backdrop-blur-xs'
            }`}
            aria-label={`Add ${product.name} to bag`}
          >
            {added ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Floating Atelier Action Bar on Desktop (Slides up on Hover) */}
        <div className="hidden sm:flex absolute bottom-3 inset-x-3 z-20 items-center gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {/* Quick View Button */}
          <button
            type="button"
            onClick={handleQuickViewClick}
            className="flex-1 h-9 px-3 bg-[#FAF8F5]/95 hover:bg-[#0B121E] text-[#0B121E] hover:text-[#FAF8F5] backdrop-blur-md rounded-lg text-[11px] font-sans font-medium uppercase tracking-[0.16em] flex items-center justify-center gap-1.5 shadow-md border border-[#E0DBD0] hover:border-[#0B121E] transition-all duration-200 cursor-pointer"
            aria-label={`Quick view ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          {/* Quick Add to Bag Button */}
          <button
            type="button"
            onClick={handleBagClick}
            className={`h-9 px-3 rounded-lg text-[11px] font-sans font-medium uppercase tracking-[0.16em] flex items-center justify-center gap-1.5 shadow-md transition-all duration-200 cursor-pointer shrink-0 ${
              added
                ? 'bg-[#C5A880] text-[#0B121E] scale-102 font-semibold'
                : 'bg-[#0B121E] hover:bg-[#C5A880] text-[#FAF8F5] hover:text-[#0B121E]'
            }`}
            aria-label={`Add ${product.name} to bag`}
            title={added ? 'Added to bag' : 'Add to bag'}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Bag</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Luxury Typography & Card Metadata Section */}
      <div className="p-2.5 sm:p-5 flex flex-col justify-between flex-1 bg-transparent">
        <div>
          {/* Category & Craft Details */}
          <div className="flex items-center justify-between text-[8px] sm:text-[10px] font-sans uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#8E98A8] mb-1 sm:mb-1.5">
            <span className="truncate">{product.categoryLabel}</span>
            <span className="text-[8px] sm:text-[9px] text-[#A69B88] font-serif italic lowercase tracking-normal shrink-0 hidden sm:inline">
              handcrafted
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-[13px] sm:text-base lg:text-lg text-[#0B121E] font-medium sm:font-normal leading-snug group-hover:text-[#9F7A44] transition-colors duration-200 line-clamp-1">
            {product.name}
          </h3>

          {/* Subtle Material Detail */}
          <p className="text-[9px] sm:text-[11px] font-sans text-[#7A8394] font-light truncate mt-0.5 sm:mt-1">
            {materialSummary}
          </p>
        </div>

        {/* Price & Artisan Guarantee */}
        <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-[#F0ECE2] flex items-baseline justify-between gap-1 sm:gap-2">
          <div className="flex items-baseline gap-0.5 sm:gap-1">
            <span className="text-[8px] sm:text-[10px] font-sans uppercase tracking-wider sm:tracking-widest text-[#8E98A8]">
              ETB
            </span>
            <span className="font-sans text-xs sm:text-base font-semibold text-[#0B121E] tabular-nums tracking-tight">
              {product.price.toLocaleString()}
            </span>
          </div>

          <span className="text-[8px] sm:text-[10px] font-sans text-[#A8987E] group-hover:text-[#0B121E] transition-colors tracking-wider uppercase font-light hidden sm:inline">
            View →
          </span>
        </div>
      </div>
    </motion.div>
  );
};
