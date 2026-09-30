import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { GoldSwallowDecor } from './BrandLogo';

interface HeroProps {
  onExploreCollection: () => void;
}

const HERO_SLIDES = [
  {
    image: '/biruh images/IMG_1537.JPG',
    label: 'HANDCRAFTED IN ADDIS ABABA',
    titleLine1: 'Jewelry',
    titleLine2: 'with Soul.',
    cta: 'Explore Collection',
  },
  {
    image: '/biruh images/IMG_0466.JPG',
    label: 'SIGNATURE PIECES',
    titleLine1: 'Adornment',
    titleLine2: 'as Power.',
    cta: 'Discover Selected Pieces',
  },
  {
    image: '/biruh images/IMG_1973.JPG',
    label: 'ETHIOPIAN ARTISAN CRAFT',
    titleLine1: 'Sculpted',
    titleLine2: 'by Hand.',
    cta: 'Explore Rings & Cuffs',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreCollection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full h-[calc(100vh-5rem)] sm:h-[calc(100vh-6rem)] min-h-[580px] bg-[#0B121E] text-[#FAF8F5] overflow-hidden flex flex-col justify-center">
      {/* Top Left Gold Swallows Ornament */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 w-10 sm:w-16 h-10 sm:h-16 pointer-events-none opacity-80">
        <GoldSwallowDecor className="w-full h-full" />
      </div>

      {/* Background Image Container filling full height */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt="Biruh Adorn Jewelry Campaign"
          className="w-full h-full object-cover object-[center_30%] sm:object-[center_25%] transition-all duration-700 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B121E]/95 via-[#0B121E]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B121E] via-transparent to-[#0B121E]/40" />
      </div>

      {/* Content Box */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 py-12 sm:py-20 w-full">
        <div className="max-w-xl">
          {/* Small Label */}
          <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#C5A880] block mb-3 sm:mb-4">
            {slide.label}
          </span>

          {/* Responsive Typography */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.04] sm:leading-[1.02] tracking-tight text-[#FAF8F5] mb-6 sm:mb-8 text-balance">
            {slide.titleLine1}<br />
            {slide.titleLine2}
          </h1>

          {/* CTA */}
          <div>
            <button
              type="button"
              onClick={onExploreCollection}
              className="group inline-flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-sans font-light tracking-[0.15em] text-[#FAF8F5] hover:text-[#C5A880] active:scale-95 transition-all cursor-pointer py-1"
            >
              <span>{slide.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Left Slider Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-5 sm:left-14 z-20 flex items-center gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`p-1.5 cursor-pointer flex items-center justify-center`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span
              className={`block transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? 'w-2.5 h-2.5 bg-[#FAF8F5]'
                  : 'w-1.5 h-1.5 bg-[#FAF8F5]/40 hover:bg-[#FAF8F5]/70'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
