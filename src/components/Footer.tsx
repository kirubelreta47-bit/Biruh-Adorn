import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BrandLogo, GoldSwallowDecor } from './BrandLogo';
import { BRAND_CONFIG } from '../config/brand';
import { ActivePage, Category } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onSelectCategory?: (category: Category) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0B121E] text-[#FAF8F5] pt-12 pb-8 border-t border-[#1E293B] relative overflow-hidden">
      {/* Top Left Gold Corner Swallows */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 sm:w-14 h-10 sm:h-14 opacity-50 pointer-events-none">
        <GoldSwallowDecor className="w-full h-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concise Footer Grid: Brand, Navigation, Studio Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#1E293B] items-start">
          {/* Col 1: Brand (Spans 6 cols) */}
          <div className="md:col-span-6 flex flex-col items-start">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-hidden cursor-pointer mb-3"
            >
              <BrandLogo variant="light" size="sm" showTagline={true} />
            </button>
            <p className="font-sans text-xs text-[#A0AAB8] font-light max-w-sm leading-relaxed">
              Handcrafted contemporary fine jewelry with architectural form. Shaped by hand in Addis Ababa, Ethiopia.
            </p>
          </div>

          {/* Col 2: Navigation Links (Spans 3 cols) */}
          <div className="md:col-span-3">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-sans tracking-wider uppercase text-[#D2CEBE]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('custom')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Bespoke
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio Details (Spans 3 cols) */}
          <div className="md:col-span-3">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
              Studio
            </span>
            <div className="text-xs text-[#A0AAB8] space-y-1.5 font-light">
              <p className="text-[#FAF8F5] font-medium">Addis Ababa &amp; Bahir Dar, Ethiopia</p>
              <p>{BRAND_CONFIG.phone}</p>
              <p>{BRAND_CONFIG.email}</p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#C5A880] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  <span>Back to top</span>
                  <ArrowUp className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Clean Copyright Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] text-[#8E98A8] font-light">
          <span>Designed in Ethiopia · © 2025 Biruh Adorn</span>
          <span>Empowering Jewelry</span>
        </div>
      </div>

      {/* Bottom Right Gold Corner Swallows */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 sm:w-14 h-10 sm:h-14 opacity-50 pointer-events-none">
        <GoldSwallowDecor className="w-full h-full" flipped={true} />
      </div>
    </footer>
  );
};
