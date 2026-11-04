import React, { useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface HeroProps {
  onExploreCollection: () => void;
}

interface HeroSlide {
  label: string;
  titleWords: string[];
  subtitle: string;
  cta: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    label: 'LUXURY JEWELRY',
    titleWords: ['Shine', 'Differently'],
    subtitle: 'Minimal. Elegant. Timeless.',
    cta: 'Explore Collection',
  },
  {
    label: 'ETHIOPIAN ARTISAN CRAFT',
    titleWords: ['Sculpted', 'by Hand'],
    subtitle: 'Contemporary form with ancient soul.',
    cta: 'Discover Selected Pieces',
  },
  {
    label: 'BESPOKE COMMISSIONS',
    titleWords: ['Your Form,', 'Your Soul'],
    subtitle: 'One-of-a-kind heirlooms crafted for you.',
    cta: 'Start Consultation',
  },
];

// 20 Alternating Gold Sparkles: Group A (10) and Group B (10) taking turns across the left side
interface SparklePoint {
  id: number;
  top: string;
  left: string;
  size: string;
}

const SPARKLES_GROUP_A: SparklePoint[] = [
  { id: 1, top: '16%', left: '12%', size: 'w-4 h-4 sm:w-5 sm:h-5' }, // Upper left ambient
  { id: 2, top: '24%', left: '28%', size: 'w-5 h-5 sm:w-6 sm:h-6' }, // Above label
  { id: 3, top: '34%', left: '44%', size: 'w-5 h-5 sm:w-6 sm:h-6' }, // Top-right of heading
  { id: 4, top: '40%', left: '7%', size: 'w-3.5 h-3.5 sm:w-4.5 sm:h-4.5' }, // Far left of heading
  { id: 5, top: '48%', left: '33%', size: 'w-4 h-4 sm:w-5 sm:h-5' }, // Under heading
  { id: 6, top: '58%', left: '15%', size: 'w-4.5 h-4.5 sm:w-5.5 sm:h-5.5' }, // Left of CTA button
  { id: 7, top: '65%', left: '38%', size: 'w-4 h-4 sm:w-5 sm:h-5' }, // Right of CTA button
  { id: 8, top: '75%', left: '10%', size: 'w-5 h-5 sm:w-6 sm:h-6' }, // Lower left
  { id: 9, top: '82%', left: '26%', size: 'w-3.5 h-3.5 sm:w-4.5 sm:h-4.5' }, // Near scroll down
  { id: 10, top: '30%', left: '55%', size: 'w-4 h-4 sm:w-5 sm:h-5' }, // Center-left transition
];

const SPARKLES_GROUP_B: SparklePoint[] = [
  { id: 11, top: '19%', left: '36%', size: 'w-4.5 h-4.5 sm:w-5.5 sm:h-5.5' }, // Upper mid-left
  { id: 12, top: '28%', left: '14%', size: 'w-4 h-4 sm:w-5 sm:h-5' }, // Above "Shine"
  { id: 13, top: '36%', left: '22%', size: 'w-5 h-5 sm:w-6 sm:h-6' }, // Center of heading
  { id: 14, top: '44%', left: '50%', size: 'w-4 h-4 sm:w-5 sm:h-5' }, // Right of heading
  { id: 15, top: '52%', left: '9%', size: 'w-4 h-4 sm:w-5 sm:h-5' }, // Left of subtitle
  { id: 16, top: '62%', left: '26%', size: 'w-4.5 h-4.5 sm:w-5.5 sm:h-5.5' }, // Below CTA button
  { id: 17, top: '70%', left: '46%', size: 'w-4 h-4 sm:w-5 sm:h-5' }, // Lower mid transition
  { id: 18, top: '74%', left: '19%', size: 'w-4 h-4 sm:w-5 sm:h-5' }, // Lower left ambient
  { id: 19, top: '84%', left: '40%', size: 'w-3.5 h-3.5 sm:w-4.5 sm:h-4.5' }, // Bottom area
  { id: 20, top: '22%', left: '50%', size: 'w-4 h-4 sm:w-5 sm:h-5' }, // Upper transition
];

export const Hero: React.FC<HeroProps> = ({ onExploreCollection }) => {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = HERO_SLIDES[currentSlide];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('collection-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[1100px] bg-[#07111F] text-[#F5F0E6] overflow-hidden flex flex-col justify-between select-none">
      {/* Background Image Container with Cinematic Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/images/hero-velvet.jpg"
          alt="Biruh Adorn Luxury Gold Jewelry on Velvet"
          initial={shouldReduceMotion ? false : { scale: 1 }}
          animate={shouldReduceMotion ? undefined : { scale: [1, 1.05, 1] }}
          transition={{
            duration: 26,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="w-full h-full object-cover object-[75%_center] sm:object-[center_center]"
        />

        {/* Seamless Solid Midnight Navy Gradient Overlay on Left Side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/90 via-45% to-transparent sm:via-50%" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-[#07111F]/50" />

        {/* 20 Alternating Luxury Gold Sparkles: 10 shine long, dim a little, then 10 shine, taking turns */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 pointer-events-none z-1">
            {/* Group A (10 Sparkles): Flares up and shines first */}
            {SPARKLES_GROUP_A.map((sparkle) => (
              <div
                key={`sparkle-a-${sparkle.id}`}
                className={`absolute ${sparkle.size} flex items-center justify-center`}
                style={{ top: sparkle.top, left: sparkle.left }}
              >
                <div className="w-full h-full animate-sparkle-turn-a">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full text-[#FFF8E7]"
                    fill="currentColor"
                  >
                    <path d="M12 0L13.8 9.2L24 12L13.8 14.8L12 24L10.2 14.8L0 12L10.2 9.2L12 0Z" />
                  </svg>
                </div>
              </div>
            ))}

            {/* Group B (10 Sparkles): Dims first, then shines taking turns */}
            {SPARKLES_GROUP_B.map((sparkle) => (
              <div
                key={`sparkle-b-${sparkle.id}`}
                className={`absolute ${sparkle.size} flex items-center justify-center`}
                style={{ top: sparkle.top, left: sparkle.left }}
              >
                <div className="w-full h-full animate-sparkle-turn-b">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full text-[#FFF8E7]"
                    fill="currentColor"
                  >
                    <path d="M12 0L13.8 9.2L24 12L13.8 14.8L12 24L10.2 14.8L0 12L10.2 9.2L12 0Z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Top Spacer so content centers comfortably below the sticky header */}
      <div className="h-20 sm:h-24 relative z-10" />

      {/* Main Hero Content Box (Left-Aligned with Generous Negative Space) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-8 sm:py-12">
        <div className="max-w-xl lg:max-w-2xl min-h-[280px] sm:min-h-[320px] flex flex-col justify-center">
          {/* AnimatePresence mode="wait" ensures inactive slides unmount completely before new slide renders */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Upper Label with Hairline Separator */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.28em] text-gold-shine">
                  {slide.label}
                </span>
                <span className="w-10 sm:w-16 h-[1.5px] bg-linear-to-r from-[#D6B878] via-[#FFF3DB] to-transparent inline-block" />
              </div>

              {/* Single Main Heading */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-[#F5F0E6] mb-4 sm:mb-6">
                {slide.titleWords.map((word, idx) => (
                  <span key={idx} className="inline-block mr-3 sm:mr-4">
                    {word}
                  </span>
                ))}
              </h1>

              {/* Single Subtitle */}
              <p className="font-sans text-sm sm:text-base md:text-lg text-[#D4D0C6] font-light tracking-wide mb-8 sm:mb-10">
                {slide.subtitle}
              </p>

              {/* Single Primary CTA Button with Gold Shine */}
              <div>
                <button
                  type="button"
                  onClick={onExploreCollection}
                  className="group relative inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full gold-btn-shine text-[#07111F] font-sans text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase cursor-pointer"
                >
                  <span className="relative z-10">{slide.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#07111F] relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Controls Bar: Scroll Down Indicator & Interactive Carousel Controls */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pb-6 sm:pb-8 flex items-center justify-between">
        {/* Bottom Left: Scroll Down Indicator with Gentle Movement */}
        <button
          type="button"
          onClick={handleScrollDown}
          className="group inline-flex items-center gap-2 text-[11px] sm:text-xs font-sans tracking-[0.18em] uppercase text-[#B8B3A8] hover:text-[#D6B878] transition-colors cursor-pointer"
        >
          <span>Scroll Down</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#D6B878] transition-transform duration-300 group-hover:translate-y-1 animate-gentle-bounce" />
        </button>

        {/* Bottom Right: Interactive Carousel Indicators */}
        <div className="flex items-center gap-2.5">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className="py-2 cursor-pointer transition-all duration-300"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span
                className={`block transition-all duration-300 ${
                  currentSlide === idx
                    ? 'w-8 sm:w-10 h-[2px] bg-[#D6B878]'
                    : 'w-4 sm:w-5 h-[1.5px] bg-[#B8B3A8]/40 hover:bg-[#B8B3A8]'
                }`}
              />
            </button>
          ))}
          <button
            type="button"
            onClick={handleNextSlide}
            className="p-1 text-[#D6B878] hover:text-[#F5F0E6] text-xs font-serif pl-1 cursor-pointer transition-colors"
            aria-label="Next slide"
            title="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};
