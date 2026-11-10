import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface HeroProps {
  onExploreCollection: () => void;
}

interface HeroSlide {
  label: string;
  titleLight: string;
  titleGold: string;
  subtitle: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    label: 'LUXURY JEWELRY',
    titleLight: 'Shine',
    titleGold: 'Differently',
    subtitle: 'Minimal. Elegant. Timeless.',
  },
  {
    label: 'ETHIOPIAN ARTISAN CRAFT',
    titleLight: 'Sculpted',
    titleGold: 'by Hand',
    subtitle: 'Contemporary form with ancient soul.',
  },
  {
    label: 'BESPOKE COMMISSIONS',
    titleLight: 'Your Form,',
    titleGold: 'Your Soul',
    subtitle: 'One-of-a-kind heirlooms crafted for you.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreCollection }) => {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically advance through hero messaging with slow luxury pacing
  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full h-svh min-h-[600px] lg:h-screen lg:min-h-[640px] bg-[#020B12] text-[#F5F0E6] overflow-hidden flex flex-col justify-between select-none">
      {/* Studio Macro Backdrop & Atmospheric Lighting Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#020B12]">
        {/* High-Resolution Gold Clover Necklace on Dark Navy & Teal-Lit Velvet */}
        <div className="absolute top-0 inset-x-0 h-[48%] md:inset-0 md:h-full overflow-hidden">
          <motion.img
            src="/images/hero-luxury-clover.jpg"
            alt="Biruh Adorn Champagne Gold Four-Leaf Clover Necklace on Dark Velvet"
            initial={shouldReduceMotion ? false : { scale: 1 }}
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.025, 1] }}
            transition={{
              duration: 28,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="w-full h-full object-cover object-[76%_48%] md:object-[40%_center] brightness-[1.06] contrast-[1.03]"
          />

          {/* Mobile Bottom-Up Feather Fade into Almost-Black Midnight Navy (#020B12) */}
          <div
            className="md:hidden absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(2, 11, 18, 0.35) 0%, rgba(2, 11, 18, 0.05) 26%, rgba(2, 11, 18, 0.22) 60%, rgba(2, 11, 18, 0.94) 90%, #020B12 100%)',
            }}
          />
        </div>

        {/* Desktop Left-to-Right Seamless #020B12 Gradient Behind Content */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, #020B12 0%, rgba(2, 11, 18, 0.96) 28%, rgba(2, 11, 18, 0.65) 45%, rgba(2, 11, 18, 0.14) 62%, transparent 78%)',
          }}
        />

        {/* Subtle Top/Bottom Vignette Framing */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(2, 11, 18, 0.55) 0%, transparent 18%, transparent 78%, rgba(2, 11, 18, 0.88) 100%)',
          }}
        />

        {/* Deep Electric Teal (#087E83) Atmospheric Ambient Glows Behind Jewelry & Middle */}
        <div
          className="hidden md:block absolute right-[20%] top-[22%] w-[460px] h-[460px] rounded-full blur-[115px] pointer-events-none opacity-40"
          style={{ background: 'radial-gradient(circle, #087E83 0%, transparent 70%)' }}
        />
        <div
          className="hidden md:block absolute left-[44%] top-[12%] w-[360px] h-[360px] rounded-full blur-[100px] pointer-events-none opacity-32"
          style={{ background: 'radial-gradient(circle, #087E83 0%, transparent 68%)' }}
        />

        {/* Subtle Dimmed Champagne Gold (#D4AF69) Warm Ambient Glow Under CTA Zone */}
        <div
          className="hidden md:block absolute left-[7%] bottom-[21%] w-[320px] h-[170px] rounded-full blur-[85px] pointer-events-none opacity-12"
          style={{ background: 'radial-gradient(circle, #D4AF69 0%, transparent 70%)' }}
        />

        {/* Flowing Velvet-Like Curved Shapes, Electric Teal Light Streaks & Sweeping Gold Hairline */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-1"
          viewBox="0 0 1440 820"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {/* Electric Teal Glowing Rim Curve */}
            <linearGradient id="tealCurveGrad" x1="25%" y1="65%" x2="64%" y2="0%">
              <stop offset="0%" stopColor="#087E83" stopOpacity="0" />
              <stop offset="32%" stopColor="#087E83" stopOpacity="0.45" />
              <stop offset="66%" stopColor="#19ACB2" stopOpacity="0.8" />
              <stop offset="92%" stopColor="#087E83" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#087E83" stopOpacity="0" />
            </linearGradient>

            {/* Illuminated Velvet Fold Soft Wash */}
            <radialGradient id="tealVelvetPool" cx="55%" cy="38%" r="42%">
              <stop offset="0%" stopColor="#087E83" stopOpacity="0.18" />
              <stop offset="55%" stopColor="#087E83" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#020B12" stopOpacity="0" />
            </radialGradient>

            {/* Champagne Gold Sweeping Curve from Left Edge Toward Lower Center */}
            <linearGradient id="goldSweepGrad" x1="0%" y1="45%" x2="58%" y2="96%">
              <stop offset="0%" stopColor="#D4AF69" stopOpacity="0.32" />
              <stop offset="28%" stopColor="#F9E9C2" stopOpacity="0.95" />
              <stop offset="54%" stopColor="#D4AF69" stopOpacity="0.72" />
              <stop offset="84%" stopColor="#D4AF69" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#087E83" stopOpacity="0" />
            </linearGradient>

            <filter id="tealBlur" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
            <filter id="tealSoftFill" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="24" />
            </filter>
            <filter id="goldGlowFilter" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Large Curved Dark-Teal Velvet Wash in Mid-Right */}
          <ellipse cx="780" cy="310" rx="420" ry="260" fill="url(#tealVelvetPool)" />

          {/* Seamless Electric Teal Atmospheric Velvet Edge Arch Behind "Differently" */}
          <path
            d="M350 515 C 545 465, 725 265, 895 -10"
            stroke="rgba(8, 126, 131, 0.28)"
            strokeWidth="38"
            strokeLinecap="round"
            filter="url(#tealSoftFill)"
          />
          <path
            d="M350 515 C 545 465, 725 265, 895 -10"
            stroke="url(#tealCurveGrad)"
            strokeWidth="3"
            filter="url(#tealBlur)"
          />
          <path
            d="M350 515 C 545 465, 725 265, 895 -10"
            stroke="url(#tealCurveGrad)"
            strokeWidth="1.15"
          />

          {/* Faint Lower Curved Velvet-Fold Teal Contour */}
          <path
            d="M-10 448 C 115 628, 315 688, 595 724 C 710 738, 785 776, 845 830"
            stroke="rgba(8, 126, 131, 0.28)"
            strokeWidth="1.25"
          />

          {/* Thin Curved Champagne-Gold Line Sweeping From Left Edge Toward Lower Middle */}
          <path
            d="M-10 390 C 82 586, 222 648, 480 676 C 635 693, 725 735, 810 830"
            stroke="url(#goldSweepGrad)"
            strokeWidth="1.45"
            strokeLinecap="round"
            filter="url(#goldGlowFilter)"
          />
        </svg>

        {/* Mobile Subtle Atmospheric Curved Teal Glow & Sweeping Gold Line */}
        <svg
          className="md:hidden absolute inset-0 w-full h-full pointer-events-none z-1"
          viewBox="0 0 390 844"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="mobTealGrad" x1="0%" y1="45%" x2="95%" y2="22%">
              <stop offset="0%" stopColor="#087E83" stopOpacity="0" />
              <stop offset="48%" stopColor="#149EA4" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#087E83" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="mobGoldGrad" x1="0%" y1="70%" x2="88%" y2="95%">
              <stop offset="0%" stopColor="#D4AF69" stopOpacity="0.35" />
              <stop offset="35%" stopColor="#F5E1B0" stopOpacity="0.9" />
              <stop offset="85%" stopColor="#D4AF69" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#087E83" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M-10 385 C 115 370, 235 340, 395 305"
            stroke="url(#mobTealGrad)"
            strokeWidth="1.2"
          />
          <path
            d="M-10 555 C 22 678, 135 712, 355 772"
            stroke="url(#mobGoldGrad)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>

        {/* Only ONE Subtle Gold Sparkle Near Left Edge — Visible on All Screens & Slowly Twinkling */}
        <div
          className="flex absolute left-4 top-[35.5%] sm:left-[2.8%] lg:left-[3.4%] sm:top-[37%] z-2 w-6 h-6 sm:w-7 sm:h-7 items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div
            className={`absolute inset-0 rounded-full blur-md ${
              shouldReduceMotion ? 'opacity-45' : 'animate-hero-star-halo'
            }`}
            style={{ background: 'radial-gradient(circle, #D4AF69 0%, transparent 70%)' }}
          />
          <svg
            viewBox="0 0 24 24"
            className={`relative w-5 h-5 text-[#EAD095] ${
              shouldReduceMotion
                ? 'drop-shadow-[0_0_8px_rgba(212,175,105,0.85)]'
                : 'animate-hero-star-twinkle'
            }`}
            fill="currentColor"
          >
            <path d="M12 1L13.6 10.4L23 12L13.6 13.6L12 23L10.4 13.6L1 12L10.4 10.4L12 1Z" />
          </svg>
        </div>
      </div>

      {/* Top Spacer Below Fixed Navbar (+ Balanced Mobile Necklace Showcase Window) */}
      <div className="h-[27vh] min-h-[165px] max-h-[225px] md:h-24 md:min-h-0 md:max-h-none relative z-10 shrink-0" />

      {/* Main Hero Content Box — Centered Naturally on All Screens */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full my-auto py-4 md:py-8">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col justify-center">
          {/* Smooth concurrent vertical glide: exiting copy slowly rises upward while next rises cleanly */}
          <div className="relative min-h-[175px] sm:min-h-[210px] md:min-h-[235px] mb-6 sm:mb-8">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentSlide}
                className="absolute inset-0 flex flex-col justify-center"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 1.5,
                          delay: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                }
                exit={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        y: -34,
                        transition: {
                          duration: 1.1,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                }
              >
                {/* Small Eyebrow Text + Thin Champagne Gold Separator */}
                <div className="flex items-center gap-3.5 sm:gap-4 mb-3.5 sm:mb-5">
                  <span className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.28em] text-[#D4AF69]/90">
                    {slide.label}
                  </span>
                  <span className="w-12 sm:w-20 h-[1px] bg-linear-to-r from-[#D4AF69]/85 via-[#D4AF69]/40 to-transparent inline-block" />
                </div>

                {/* Large Prominent Serif Headline: Seamless Warm Ivory -> Champagne Gold Gradient */}
                <h1 className="hero-headline-gradient font-serif text-[2.85rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem] font-normal leading-[1.03] tracking-tight mb-3.5 sm:mb-5 w-fit max-w-full">
                  {slide.titleLight} {slide.titleGold}
                </h1>

                {/* Supporting Text */}
                <p className="font-sans text-sm sm:text-base md:text-[17px] text-[#D4D0C6]/90 font-light tracking-wide">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Persistent Dimmed Champagne-Gold Pill CTA Button */}
          <div>
            <button
              type="button"
              onClick={onExploreCollection}
              className="group hero-cta-pill inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 rounded-full text-[#020B12] font-sans text-xs sm:text-[12.5px] font-semibold tracking-[0.15em] uppercase cursor-pointer"
            >
              <span className="relative z-10">Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#020B12] relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Breathing Spacer */}
      <div className="h-8 sm:h-10 relative z-10 shrink-0" />
    </section>
  );
};
