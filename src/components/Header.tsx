import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronRight } from 'lucide-react';
import { BrandLogo, GoldSwallowDecor } from './BrandLogo';
import { useCart } from '../context/CartContext';
import { ActivePage, Category } from '../types';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onSelectCategory?: (category: Category) => void;
  onOpenSearch?: () => void;
  theme?: 'dark' | 'light';
}

// Minimalist Luxury Jewelry Shopping Tote Icon matching reference
const LuxuryCartIcon: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => {
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
        stroke="#F5F0E6"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Arching Top Handle */}
      <path
        d="M8.5 8.5V6C8.5 4.07 10.07 2.5 12 2.5C13.93 2.5 15.5 4.07 15.5 6V8.5"
        stroke="#F5F0E6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="14" r="0.9" fill="#D4AF69" />
    </svg>
  );
};

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onOpenSearch,
}) => {
  const { totalItems, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; page: ActivePage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Shop', page: 'shop' },
    { label: 'Bespoke', page: 'custom' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const showSolidNav = isScrolled || activePage !== 'home';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-500 ${showSolidNav
            ? 'bg-[#020B12]/95 backdrop-blur-md border-b border-[#D4AF69]/20 py-3.5 shadow-lg shadow-black/45'
            : 'bg-[#020B12]/65 backdrop-blur-[3px] border-b border-[#D4AF69]/18 py-4 sm:py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 xl:px-16">
          <div className="flex items-center justify-between">
            {/* Mobile: Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-1.5 text-[#F5F0E6] hover:text-[#D4AF69] transition-colors focus:outline-hidden cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" strokeWidth={1.4} />
              </button>
            </div>

            {/* Left: Brand Logo & Name (Clean Slightly Larger Editorial Styling) */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className="group focus:outline-hidden cursor-pointer flex items-center text-left"
              >
                <BrandLogo
                  variant="light"
                  size="md"
                  showTagline={false}
                  layout="horizontal"
                />
              </button>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-9 xl:space-x-12">
              {navItems.map((item) => {
                const isActive =
                  activePage === item.page ||
                  (item.page === 'about' && activePage === 'maker');

                return (
                  <button
                    key={item.page}
                    type="button"
                    onClick={() => handleNavClick(item.page)}
                    className={`group relative py-1 text-[14px] font-sans tracking-[0.06em] transition-colors cursor-pointer ${isActive
                        ? 'text-[#F5F0E6] font-medium'
                        : 'text-[#F5F0E6]/80 hover:text-[#F5F0E6]'
                      }`}
                  >
                    <span>{item.label}</span>
                    {/* Animated Champagne Gold Underline */}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-linear-to-r from-[#D4AF69] via-[#F2DCA6] to-[#D4AF69] transition-all duration-300 ${isActive
                          ? 'w-full opacity-100 shadow-[0_0_8px_rgba(212,175,105,0.65)]'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                        }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Right: Search Icon + Bag Icon */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => {
                  if (onOpenSearch) {
                    onOpenSearch();
                  } else {
                    handleNavClick('shop');
                  }
                }}
                className="p-1.5 text-[#F5F0E6]/90 hover:text-[#D4AF69] transition-colors focus:outline-hidden cursor-pointer"
                aria-label="Search collection"
                title="Search collection"
              >
                <Search className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" strokeWidth={1.5} />
              </button>

              {/* Shopping Bag Icon with Champagne Counter */}
              <button
                type="button"
                onClick={toggleCart}
                className="relative p-1.5 text-[#F5F0E6] hover:text-[#D4AF69] transition-colors focus:outline-hidden cursor-pointer flex items-center justify-center"
                aria-label={`Shopping Bag (${totalItems} items)`}
                title="View Bag"
              >
                <LuxuryCartIcon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-1 flex items-center justify-center min-w-4 h-4 px-1 text-[9px] font-bold font-sans bg-[#D4AF69] text-[#020B12] rounded-full shadow-[0_0_8px_rgba(212,175,105,0.5)]">
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
        <div className="fixed inset-0 z-50 bg-[#020B12] text-[#F5F0E6] flex flex-col justify-between p-6 sm:p-10 animate-fadeIn overflow-hidden">
          {/* Top Bar: Close Button */}
          <div className="flex items-center justify-between border-b border-[#D4AF69]/20 pb-4">
            <BrandLogo variant="light" size="sm" showTagline={false} />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#F5F0E6] hover:text-[#D4AF69] transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" strokeWidth={1.4} />
            </button>
          </div>

          {/* Centered Navigation Menu */}
          <div className="max-w-md w-full mx-auto flex flex-col py-8 space-y-4">
            {navItems.map((item) => {
              const isActive =
                activePage === item.page ||
                (item.page === 'about' && activePage === 'maker');

              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full flex items-center justify-between py-3.5 border-b border-white/10 text-sm font-sans tracking-[0.14em] uppercase transition-colors text-left cursor-pointer ${isActive ? 'text-[#D4AF69] font-medium' : 'text-[#F5F0E6]/85 hover:text-[#D4AF69]'
                    }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF69]" />
                </button>
              );
            })}
          </div>

          {/* Bottom Bar: Gold Swallow Accent */}
          <div className="flex items-center justify-between pt-6 border-t border-[#D4AF69]/20">
            <span className="text-[11px] text-[#A0AAB8] font-sans tracking-[0.15em] uppercase">
              Biruh Adorn · Addis Ababa
            </span>
            <div className="w-10 h-10 opacity-60">
              <GoldSwallowDecor className="w-full h-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
