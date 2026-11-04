import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';
import { BrandLogo, GoldSwallowDecor } from './BrandLogo';
import { BRAND_CONFIG } from '../config/brand';
import { ActivePage, Category } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onSelectCategory?: (category: Category) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050B14] text-[#F5F0E6] pt-16 pb-12 border-t border-[#AC905C]/20 relative overflow-hidden select-none">
      {/* Top Left Gold Corner Swallows Ornament */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 opacity-20 pointer-events-none">
        <GoldSwallowDecor className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#203B5C]/60 items-start">
          {/* Col 1: Brand Logo & Ethos (Spans 5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-hidden cursor-pointer mb-4 group"
            >
              <BrandLogo variant="light" size="md" showTagline={true} layout="horizontal" />
            </button>
            <p className="font-sans text-xs text-[#B8B3A8] font-light max-w-sm leading-relaxed mb-6">
              Handcrafted contemporary fine jewelry with architectural form. Shaped by hand at our studio bench in Addis Ababa, Ethiopia.
            </p>

            {/* Social Media Link */}
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#D6B878] hover:text-[#E8CD96] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#D6B878]" />
              <span>@{BRAND_CONFIG.instagramHandle}</span>
            </a>
          </div>

          {/* Col 2: Navigation (Spans 2 cols) */}
          <div className="md:col-span-2">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#D6B878] block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-sans tracking-wide text-[#B8B3A8]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  Shop Collection
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('custom')}
                  className="hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  Bespoke Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories (Spans 2 cols) */}
          <div className="md:col-span-2">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#D6B878] block mb-4">
              Silhouettes
            </span>
            <ul className="space-y-2.5 text-xs font-sans tracking-wide text-[#B8B3A8]">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory('necklaces');
                    else onNavigate('shop');
                  }}
                  className="hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  Necklaces
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory('bracelets');
                    else onNavigate('shop');
                  }}
                  className="hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  Bracelets &amp; Cuffs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory('rings');
                    else onNavigate('shop');
                  }}
                  className="hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  Wire Coil Rings
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory('earrings');
                    else onNavigate('shop');
                  }}
                  className="hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  Drop Earrings
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact (Spans 3 cols) */}
          <div className="md:col-span-3">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#D6B878] block mb-4">
              Atelier
            </span>
            <div className="text-xs text-[#B8B3A8] space-y-2 font-light">
              <p className="text-[#F5F0E6] font-medium">Addis Ababa &amp; Bahir Dar, Ethiopia</p>
              <p>{BRAND_CONFIG.phone}</p>
              <p>{BRAND_CONFIG.email}</p>
              <p className="text-[11px] text-[#D6B878] pt-1">
                Complimentary delivery within Addis Ababa
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#D6B878] hover:text-[#E8CD96] transition-colors cursor-pointer"
                >
                  <span>Back to top</span>
                  <ArrowUp className="w-3.5 h-3.5 text-[#D6B878]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#B8B3A8] font-light">
          <span>Designed in Ethiopia · © 2025 Biruh Adorn</span>
          <span className="font-serif italic text-[#D6B878]">Empowering Jewelry</span>
        </div>
      </div>
    </footer>
  );
};
