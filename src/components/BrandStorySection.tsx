import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { GoldSwallowDecor } from './BrandLogo';

interface BrandStorySectionProps {
  onDiscoverStory: () => void;
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = ({
  onDiscoverStory,
}) => {
  return (
    <section className="relative w-full bg-[#101F33] py-20 sm:py-32 px-5 sm:px-8 lg:px-14 border-b border-[#AC905C]/20 overflow-hidden select-none">
      {/* Decorative Gold Swallow Accent */}
      <div className="absolute top-8 right-8 w-16 h-16 opacity-20 pointer-events-none hidden lg:block">
        <GoldSwallowDecor className="w-full h-full" flipped={true} />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Photography with Rich Emerald Framing */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 p-2.5 sm:p-3 bg-[#0B2B20] border border-[#315A48]/70 shadow-2xl shadow-black/50"
          >
            <div className="relative aspect-4/5 w-full bg-[#07111F] overflow-hidden border border-[#315A48]/50">
              <img
                src="/biruh images/IMG_1537.JPG"
                alt="Artisan Bench Craft at Biruh Adorn Atelier"
                className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
              {/* Ambient Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#D6B878] bg-[#0B2B20]/90 px-3 py-1 border border-[#315A48] backdrop-blur-xs">
                  Handcrafted · Addis Ababa
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Refined Typography & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Upper Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-[#D6B878]">
                Atelier Philosophy
              </span>
              <span className="w-8 h-px bg-[#AC905C]/60" />
            </div>

            {/* Main Heading: "Made to Be Remembered" */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F0E6] tracking-tight leading-[1.1] mb-6">
              Made to Be Remembered
            </h2>

            {/* Subtitle Quote */}
            <p className="font-serif italic text-lg sm:text-xl text-[#D6B878] font-light leading-relaxed mb-6">
              “Every piece tells a story. Discover jewelry created with attention to detail, individuality, and timeless elegance.”
            </p>

            {/* Story Details */}
            <p className="font-sans text-xs sm:text-sm text-[#D4D0C6] font-light leading-relaxed mb-4">
              Founded by Biruh Getnet Aklog in Addis Ababa, Biruh Adorn approaches jewelry as a deliberate architectural extension of the body. Rather than mass manufacture, each ring, bangle, and pendant is sculpted by hand from recycled brass wire and genuine regional stones.
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#D4D0C6] font-light leading-relaxed mb-8">
              We create slow-luxury heirloom pieces meant to be lived in—grounded in Ethiopian craftsmanship, refined with contemporary restraint.
            </p>

            {/* Minimal "Discover Our Story" Link */}
            <div>
              <button
                type="button"
                onClick={onDiscoverStory}
                className="group inline-flex items-center gap-3 text-xs font-sans uppercase tracking-[0.2em] text-[#F5F0E6] hover:text-[#D6B878] transition-colors cursor-pointer py-1.5"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D6B878] transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
