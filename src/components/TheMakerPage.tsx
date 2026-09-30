import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GoldSwallowDecor } from './BrandLogo';

interface TheMakerPageProps {
  onExploreShop: () => void;
}

export const TheMakerPage: React.FC<TheMakerPageProps> = ({ onExploreShop }) => {
  return (
    <div className="w-full bg-[#FAF8F5] py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Tag */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#8E98A8] block mb-2">
            Founder & Lead Artisan
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0B121E] tracking-tight">
            The Maker
          </h1>
        </div>

        {/* Minimalist Narrative Presentation */}
        <div className="bg-[#FFFFFF] border border-[#E2DDD3] p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xs">
          {/* Subtle Corner Swallow Decor */}
          <div className="absolute top-4 right-4 w-10 h-10 opacity-30 pointer-events-none">
            <GoldSwallowDecor className="w-full h-full" flipped={true} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Visual Portrait / Hands at Work Image */}
            <div className="md:col-span-5 relative aspect-4/5 w-full bg-[#162032] overflow-hidden">
              <img
                src="/biruh images/IMG_5051.JPG"
                alt="Biruh Getnet Aklog - Designer and Maker"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B121E]/30 via-transparent to-transparent" />
            </div>

            {/* Profile & Biography */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="w-8 h-[1.5px] bg-[#C5A880] mb-4" />
              
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B121E] font-medium tracking-tight mb-2">
                Biruh Getnet Aklog
              </h2>
              
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium mb-6">
                Designer & Maker · Addis Ababa
              </p>

              <p className="font-serif text-base sm:text-lg text-[#2C3442] font-light leading-relaxed mb-6 italic">
                Designer and maker. With a background in fashion design (BSc &amp; MSc), Biruh approaches jewelry as an architectural and artistic extension of the body.
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#5C6474] font-light leading-relaxed mb-8">
                Each collection represents a deliberate synthesis between Ethiopian jewelry heritage and contemporary sculptural restraint—personally conceptualized and refined in Addis Ababa.
              </p>

              <div>
                <button
                  type="button"
                  onClick={onExploreShop}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#0B121E] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#C5A880] hover:text-[#0B121E] transition-all cursor-pointer shadow-xs"
                >
                  <span>Explore Pieces</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
