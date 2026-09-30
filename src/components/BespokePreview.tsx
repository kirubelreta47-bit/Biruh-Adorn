import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { GoldSwallowDecor } from './BrandLogo';

interface BespokePreviewProps {
  onOpenCustomPage: () => void;
}

const BRIEF_STEPS = [
  { num: '01', title: 'Idea', desc: 'Share your inspiration & direction.' },
  { num: '02', title: 'Discovery', desc: 'Materials, stones & sizing discussed.' },
  { num: '03', title: 'Design', desc: 'Custom drawings & mockups provided.' },
  { num: '04', title: 'Creation', desc: 'Shaped by hand at the bench.' },
  { num: '05', title: 'Prepayment', desc: '50% prepayment to commence.' },
];

export const BespokePreview: React.FC<BespokePreviewProps> = ({ onOpenCustomPage }) => {
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hello Biruh Adorn! I would like to start a custom jewelry consultation. (YOUR IDEA. YOUR FORM. YOUR JEWELRY.)'
  )}`;

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#EBE7DF] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Luxury Framed Showcase Card */}
        <div className="bg-[#FFFFFF] border border-[#E2DDD3] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs relative overflow-hidden">
          {/* Subtle Corner Swallow Ornament */}
          <div className="absolute top-4 right-4 w-12 h-12 opacity-25 pointer-events-none">
            <GoldSwallowDecor className="w-full h-full" flipped={true} />
          </div>

          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-[#C5A880] mb-2.5">
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              <span>Bespoke Service</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#0B121E] tracking-tight mb-4 leading-tight">
              YOUR IDEA. YOUR FORM. YOUR JEWELRY.
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#5C6474] font-light leading-relaxed">
              Custom jewelry is an opportunity to create something entirely personal. We work with you to translate your vision into a contemporary, handcrafted piece.
            </p>
          </div>

          {/* The 5-Step Process Summary */}
          <div className="mb-10">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#8E98A8] block mb-4">
              The Process
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {BRIEF_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#ECE7DE] hover:border-[#C5A880] transition-colors"
                >
                  <span className="font-serif text-base text-[#C5A880] font-light block mb-1">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-sm text-[#0B121E] font-medium mb-1">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[11px] text-[#6C7688] font-light leading-snug">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#F0ECE2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#0B121E] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-lg hover:bg-[#C5A880] hover:text-[#0B121E] transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Start Your Consultation</span>
            </a>

            <button
              type="button"
              onClick={onOpenCustomPage}
              className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#0B121E] hover:text-[#C5A880] transition-colors cursor-pointer py-1.5"
            >
              <span>Explore Bespoke Process In Detail</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
