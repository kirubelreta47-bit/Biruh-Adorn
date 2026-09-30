import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { BrandLogo, GoldSwallowDecor } from './BrandLogo';
import { useCart } from '../context/CartContext';
import { BRAND_CONFIG } from '../config/brand';
import { ActivePage, Category } from '../types';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onSelectCategory?: (category: Category) => void;
  theme?: 'dark' | 'light';
}

// Elegant Minimalist Luxury Jewelry Shopping Tote Icon
const LuxuryCartIcon: React.FC<{ className?: string; isLight?: boolean }> = ({
  className = 'w-5 h-5',
  isLight = false,
}) => {
  const strokeColor = isLight ? '#FAF8F5' : '#0B121E';

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Tote Bag Body with elegant tapered corners */}
      <path
        d="M5 8.5L3.8 19C3.6 20.3 4.6 21.5 6 21.5H18C19.4 21.5 20.4 20.3 20.2 19L19 8.5H5Z"
        stroke={strokeColor}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Arching Dual Top Handles */}
      <path
        d="M8.5 8.5V6C8.5 4.07 10.07 2.5 12 2.5C13.93 2.5 15.5 4.07 15.5 6V8.5"
        stroke={strokeColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Center subtle dot accent */}
      <circle cx="12" cy="14" r="1" fill={strokeColor} opacity="0.6" />
    </svg>
  );
};

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  theme = 'dark',
}) => {
  const { totalItems, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 w-full z-40 ${
          isDark
            ? 'bg-[#0B121E]/95 backdrop-blur-md border-b border-[#1A253A]'
            : 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EBE7DF]'
        } ${isDark ? 'text-[#FAF8F5]' : 'text-[#0B121E]'} ${
          isScrolled ? 'shadow-md shadow-black/20' : ''
        } transition-shadow duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22 relative">
            {/* Mobile: Hamburger Button */}
            <div className="flex items-center md:hidden z-10">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-current hover:text-[#C5A880] transition-colors focus:outline-hidden cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Desktop Left: Brand Logo */}
            <div className="hidden md:flex items-center z-10">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className="group focus:outline-hidden cursor-pointer flex items-center text-left"
              >
                <BrandLogo
                  variant={isDark ? 'light' : 'dark'}
                  size="sm"
                  showTagline={false}
                />
              </button>
            </div>

            {/* Desktop Center: Navigation Links (HOME, SHOP, THE MAKER, ABOUT US, CONTACT US) */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className={`text-xs font-sans tracking-[0.18em] uppercase transition-colors relative py-1.5 cursor-pointer ${
                  activePage === 'home'
                    ? isDark
                      ? 'text-[#FAF8F5] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#C5A880]'
                      : 'text-[#0B121E] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0B121E]'
                    : isDark
                    ? 'text-[#A0AAB8] hover:text-[#FAF8F5]'
                    : 'text-[#5C6474] hover:text-[#0B121E]'
                }`}
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop')}
                className={`text-xs font-sans tracking-[0.18em] uppercase transition-colors relative py-1.5 cursor-pointer ${
                  activePage === 'shop'
                    ? isDark
                      ? 'text-[#FAF8F5] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#C5A880]'
                      : 'text-[#0B121E] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0B121E]'
                    : isDark
                    ? 'text-[#A0AAB8] hover:text-[#FAF8F5]'
                    : 'text-[#5C6474] hover:text-[#0B121E]'
                }`}
              >
                Shop
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('custom')}
                className={`text-xs font-sans tracking-[0.18em] uppercase transition-colors relative py-1.5 cursor-pointer ${
                  activePage === 'custom'
                    ? isDark
                      ? 'text-[#FAF8F5] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#C5A880]'
                      : 'text-[#0B121E] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0B121E]'
                    : isDark
                    ? 'text-[#A0AAB8] hover:text-[#FAF8F5]'
                    : 'text-[#5C6474] hover:text-[#0B121E]'
                }`}
              >
                Bespoke
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className={`text-xs font-sans tracking-[0.18em] uppercase transition-colors relative py-1.5 cursor-pointer ${
                  activePage === 'about' || activePage === 'maker'
                    ? isDark
                      ? 'text-[#FAF8F5] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#C5A880]'
                      : 'text-[#0B121E] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0B121E]'
                    : isDark
                    ? 'text-[#A0AAB8] hover:text-[#FAF8F5]'
                    : 'text-[#5C6474] hover:text-[#0B121E]'
                }`}
              >
                About Us
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className={`text-xs font-sans tracking-[0.18em] uppercase transition-colors relative py-1.5 cursor-pointer ${
                  activePage === 'contact'
                    ? isDark
                      ? 'text-[#FAF8F5] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#C5A880]'
                      : 'text-[#0B121E] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0B121E]'
                    : isDark
                    ? 'text-[#A0AAB8] hover:text-[#FAF8F5]'
                    : 'text-[#5C6474] hover:text-[#0B121E]'
                }`}
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile Center: Logo with Crisp Ring Emblem */}
            <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className="group focus:outline-hidden cursor-pointer flex flex-col items-center"
              >
                <BrandLogo
                  variant={isDark ? 'light' : 'dark'}
                  size="md"
                  showTagline={true}
                />
              </button>
            </div>

            {/* Right: Cart Button Only */}
            <div className="flex items-center z-10">
              <button
                type="button"
                onClick={toggleCart}
                className="relative p-2 text-current hover:text-[#C5A880] transition-colors focus:outline-hidden cursor-pointer flex items-center justify-center"
                aria-label={`Shopping Bag (${totalItems} items)`}
                title="View Bag"
              >
                <LuxuryCartIcon
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  isLight={isDark}
                />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-4 h-4 px-1 text-[9px] font-bold font-sans bg-[#C5A880] text-[#0B121E] rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B121E] text-[#FAF8F5] flex flex-col justify-between p-6 sm:p-10 animate-fadeIn overflow-hidden">
          {/* Top Bar: Close Button */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#FAF8F5] hover:text-[#C5A880] transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Centered Logo with Visible Ring & Nav Links */}
          <div className="max-w-md w-full mx-auto flex flex-col items-center">
            {/* Logo */}
            <div className="mb-8">
              <BrandLogo variant="light" size="lg" showTagline={true} />
            </div>

            {/* Menu List: HOME, SHOP, THE MAKER, ABOUT US, CONTACT US */}
            <div className="w-full space-y-2.5">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className={`w-full flex items-center justify-between py-3 border-b border-[#1E293B] text-sm font-sans tracking-widest uppercase transition-colors text-left cursor-pointer ${
                  activePage === 'home' ? 'text-[#C5A880] font-semibold' : 'text-[#FAF8F5]'
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-[#8E98A8]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop')}
                className={`w-full flex items-center justify-between py-3 border-b border-[#1E293B] text-sm font-sans tracking-widest uppercase transition-colors text-left cursor-pointer ${
                  activePage === 'shop' ? 'text-[#C5A880] font-semibold' : 'text-[#FAF8F5]'
                }`}
              >
                <span>Shop</span>
                <ChevronRight className="w-4 h-4 text-[#8E98A8]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('custom')}
                className={`w-full flex items-center justify-between py-3 border-b border-[#1E293B] text-sm font-sans tracking-widest uppercase transition-colors text-left cursor-pointer ${
                  activePage === 'custom' ? 'text-[#C5A880] font-semibold' : 'text-[#FAF8F5]'
                }`}
              >
                <span>Bespoke</span>
                <ChevronRight className="w-4 h-4 text-[#8E98A8]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className={`w-full flex items-center justify-between py-3 border-b border-[#1E293B] text-sm font-sans tracking-widest uppercase transition-colors text-left cursor-pointer ${
                  activePage === 'about' || activePage === 'maker' ? 'text-[#C5A880] font-semibold' : 'text-[#FAF8F5]'
                }`}
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-[#8E98A8]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className={`w-full flex items-center justify-between py-3 border-b border-[#1E293B] text-sm font-sans tracking-widest uppercase transition-colors text-left cursor-pointer ${
                  activePage === 'contact' ? 'text-[#C5A880] font-semibold' : 'text-[#FAF8F5]'
                }`}
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-[#8E98A8]" />
              </button>
            </div>
          </div>

          {/* Bottom Bar: Gold Swallows Corner Ornament */}
          <div className="flex items-end justify-between pt-4 relative">
            <span className="text-[10px] text-[#8E98A8] font-sans uppercase tracking-widest">
              Biruh Adorn · Addis Ababa
            </span>

            {/* Bottom Right Gold Corner Swallows Ornament */}
            <div className="w-12 h-12 opacity-60">
              <GoldSwallowDecor className="w-full h-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
