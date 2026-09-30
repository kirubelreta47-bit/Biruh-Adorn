/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ShopByForm } from './components/ShopByForm';
import { SelectedPieces } from './components/SelectedPieces';
import { BespokePreview } from './components/BespokePreview';
import { CustomJewelryPage } from './components/CustomJewelryPage';
import { ContactSection } from './components/ContactSection';
import { ShopView } from './components/ShopView';
import { AboutPage } from './components/AboutPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { ActivePage, Category, Product } from './types';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function AppContent() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth scroll tracking
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowScrollTop(latest > 320);
    });
  }, [scrollY]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreShop = () => {
    setSelectedCategory('all');
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDetail = (product: Product) => {
    setActiveProductDetail(product);
  };

  const handleCloseDetail = () => {
    setActiveProductDetail(null);
  };

  const isDarkPage = activePage === 'home';

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#0B121E] relative">
      {/* Luxury Hairline Gold Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#947449] via-[#C5A880] to-[#E8D9C5] z-50 origin-left pointer-events-none"
        style={{ scaleX }}
      />

      {/* Top Header with HOME, SHOP, THE MAKER, ABOUT US, CONTACT US */}
      <Header
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          if (page === 'shop') setSelectedCategory('all');
        }}
        onSelectCategory={handleSelectCategory}
        theme={isDarkPage ? 'dark' : 'light'}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            {/* 1. Hero Section ("Jewelry with Form.") */}
            <Hero onExploreCollection={handleExploreShop} />

            {/* 2. Shop By Form (Necklaces, Bracelets, Rings, Earrings) + Marquee */}
            <ShopByForm
              onSelectCategory={handleSelectCategory}
              onViewAll={handleExploreShop}
            />

            {/* 3. Selected Pieces with Staggered Scroll Animations */}
            <SelectedPieces
              onOpenDetail={handleOpenDetail}
              onViewAllGallery={handleExploreShop}
            />

            {/* 4. Bespoke Service Preview ("YOUR IDEA. YOUR FORM. YOUR JEWELRY.") */}
            <BespokePreview
              onOpenCustomPage={() => {
                setActivePage('custom');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. Contact Us Section */}
            <div id="contact-us-section">
              <ContactSection />
            </div>
          </>
        )}

        {/* Dedicated Shop Catalog Page */}
        {activePage === 'shop' && (
          <ShopView
            initialCategory={selectedCategory}
            onOpenDetail={handleOpenDetail}
          />
        )}

        {/* Dedicated Bespoke / Custom Jewelry Page */}
        {activePage === 'custom' && (
          <CustomJewelryPage
            onExploreShop={handleExploreShop}
            onNavigateContact={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* Dedicated About Us Page (Combined Maker & Studio Ethos) */}
        {(activePage === 'about' || activePage === 'maker') && (
          <AboutPage onExploreShop={handleExploreShop} />
        )}

        {/* Dedicated Contact Us Page */}
        {activePage === 'contact' && (
          <div className="py-4">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      {activeProductDetail && (
        <ProductDetailModal
          product={activeProductDetail}
          onClose={handleCloseDetail}
          onNavigateHome={() => setActivePage('home')}
        />
      )}

      {/* Slide-out Cart Drawer */}
      <CartDrawer />

      {/* Global Clean Contact & Navigation Footer */}
      <Footer
        onNavigate={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCategory={handleSelectCategory}
      />

      {/* Floating Back to Top Button with Micro-Animation */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.3 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#0B121E] text-[#FAF8F5] hover:bg-[#C5A880] hover:text-[#0B121E] shadow-xl border border-[#C5A880]/30 flex items-center justify-center transition-all duration-300 cursor-pointer group"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
