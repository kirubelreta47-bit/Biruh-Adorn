import React from 'react';
import { ArrowRight, Sparkles, Gem, HeartHandshake } from 'lucide-react';
import { GoldSwallowDecor } from './BrandLogo';

interface AboutPageProps {
  onExploreShop: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onExploreShop }) => {
  return (
    <div className="w-full bg-[#FAF8F5] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#EBE7DF]">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Main Section Header: Named "About Us" */}
        <div className="text-center">
          <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#8E98A8] block mb-2">
            Atelier Story &amp; Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0B121E] tracking-tight mb-3">
            About Us
          </h1>
          <p className="font-serif text-base sm:text-lg text-[#8C6D46] italic font-light">
            “Empowering Jewelry” · Handcrafted in Addis Ababa, Ethiopia
          </p>
        </div>

        {/* 1. TOP SECTION: THE MAKER */}
        <div className="bg-[#FFFFFF] border border-[#E2DDD3] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs rounded-xl">
          {/* Subtle Corner Swallow Decor */}
          <div className="absolute top-4 right-4 w-10 h-10 opacity-30 pointer-events-none">
            <GoldSwallowDecor className="w-full h-full" flipped={true} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* Visual Portrait / Packaging / Artisan Work Image */}
            <div className="md:col-span-5 relative aspect-4/5 w-full bg-[#162032] overflow-hidden rounded-lg shadow-sm">
              <img
                src="/biruh images/IMG_5051.JPG"
                alt="Biruh Getnet Aklog - Designer and Maker"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B121E]/30 via-transparent to-transparent" />
            </div>

            {/* Profile & Biography */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C5A880] block mb-1">
                Founder &amp; Lead Artisan
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B121E] font-medium tracking-tight mb-1.5">
                Biruh Getnet Aklog
              </h2>
              
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#8E98A8] font-medium mb-5">
                Designer &amp; Maker · Addis Ababa
              </p>

              <div className="w-8 h-[1.5px] bg-[#C5A880] mb-5" />

              <p className="font-serif text-base sm:text-lg text-[#2C3442] font-light leading-relaxed mb-4 italic">
                “Jewelry is an architectural extension of the body—sculpted to empower the wearer and carry personal heritage.”
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#5C6474] font-light leading-relaxed">
                With a background in fashion design (BSc &amp; MSc), Biruh approaches jewelry as deliberate sculptural art. Each collection synthesizes Ethiopian craftsmanship with modern restraint—individually coiled and shaped at the studio bench in Addis Ababa.
              </p>
            </div>
          </div>
        </div>

        {/* 2. BOTTOM SECTION: ABOUT US (Concise with less words) */}
        <div className="bg-[#FFFFFF] p-6 sm:p-10 border border-[#E0DBD0] shadow-xs rounded-xl relative overflow-hidden">
          {/* Subtle gold swallow in corner */}
          <div className="absolute top-4 right-4 w-9 h-9 opacity-25 pointer-events-none">
            <GoldSwallowDecor className="w-full h-full" />
          </div>

          <div className="max-w-2xl">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C5A880] block mb-1.5">
              The Studio Ethos
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0B121E] font-normal tracking-tight mb-3">
              Deliberate &amp; Tactile Craft
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#4A5260] font-light leading-relaxed">
              Founded in Addis Ababa, <strong>Biruh Adorn</strong> creates jewelry with architectural form. We reject industrial mass-production in favor of unhurried, small-batch craft using recycled local metals, natural highland stones, and regional gemstones that carry genuine soul.
            </p>
          </div>

          {/* 3 Core Pillars: Clean & Punchy */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 mt-8 border-t border-[#EBE7DF]">
            <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#ECE7DE]">
              <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E0DBD0] flex items-center justify-center text-[#C5A880] mb-3">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base text-[#0B121E] font-medium mb-1">
                Artisan Empowered
              </h4>
              <p className="text-xs text-[#6A7280] font-light leading-relaxed">
                Fair livelihoods and master apprenticeships preserving Ethiopian metallurgical heritage.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#ECE7DE]">
              <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E0DBD0] flex items-center justify-center text-[#C5A880] mb-3">
                <Gem className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base text-[#0B121E] font-medium mb-1">
                Ethical Sourcing
              </h4>
              <p className="text-xs text-[#6A7280] font-light leading-relaxed">
                Reclaimed brass and authentic regional gemstones sourced with complete provenance.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#ECE7DE]">
              <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E0DBD0] flex items-center justify-center text-[#C5A880] mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-base text-[#0B121E] font-medium mb-1">
                Sculptural Form
              </h4>
              <p className="text-xs text-[#6A7280] font-light leading-relaxed">
                Designed with ergonomic contours to sit naturally on the skin for everyday empowerment.
              </p>
            </div>
          </div>

          {/* Atelier Image Duo */}
          <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-[#EBE7DF]">
            <div className="aspect-16/9 rounded-lg overflow-hidden relative bg-[#162032]">
              <img
                src="/biruh images/IMG_1537.JPG"
                alt="Biruh Adorn artisan jewelry crafting"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B121E]/40 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-2 text-[9px] font-sans uppercase tracking-widest text-[#FAF8F5] bg-[#0B121E]/80 px-2 py-0.5 rounded-xs backdrop-blur-xs">
                Atelier Bench
              </span>
            </div>

            <div className="aspect-16/9 rounded-lg overflow-hidden relative bg-[#162032]">
              <img
                src="/biruh images/IMG_1973.JPG"
                alt="Biruh Adorn collection on model"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B121E]/40 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-2 text-[9px] font-sans uppercase tracking-widest text-[#FAF8F5] bg-[#0B121E]/80 px-2 py-0.5 rounded-xs backdrop-blur-xs">
                Handcrafted Form
              </span>
            </div>
          </div>
        </div>

        {/* CTA to Explore Shop */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onExploreShop}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0B121E] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-lg hover:bg-[#C5A880] hover:text-[#0B121E] transition-all cursor-pointer shadow-md"
          >
            <span>Explore The Collection</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
