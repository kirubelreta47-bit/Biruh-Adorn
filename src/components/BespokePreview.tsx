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
        {/* Luxury Framed Midnight Navy Showcase Card (Echoing Hero Theme) */}
        <div className="relative bg-[#07111F] text-[#F5F0E6] border border-[#203B5C]/70 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          {/* Ambient Hero Atmosphere in Corners */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#12382C]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#101F33]/60 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle Corner Swallow Ornament */}
          <div className="absolute top-4 right-4 w-12 h-12 opacity-30 pointer-events-none">
            <GoldSwallowDecor className="w-full h-full text-[#D6B878]" flipped={true} />
          </div>

          <div className="relative z-10 max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-gold-shine mb-2.5">
              <Sparkles className="w-3 h-3 text-[#D6B878] animate-pulse" />
              <span>Bespoke Service</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#F5F0E6] tracking-tight mb-4 leading-tight">
              YOUR IDEA. YOUR FORM. YOUR JEWELRY.
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#D4D0C6] font-light leading-relaxed">
              Custom jewelry is an opportunity to create something entirely personal. We work with you to translate your vision into a contemporary, handcrafted piece.
            </p>
          </div>

          {/* The 5-Step Process Summary */}
          <div className="relative z-10 mb-10">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#B8B3A8] block mb-4">
              The Process
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {BRIEF_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#101F33]/85 border border-[#203B5C]/60 hover:border-[#D6B878] transition-all group hover:-translate-y-0.5"
                >
                  <span className="font-serif text-base text-[#D6B878] font-light block mb-1">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-sm text-[#F5F0E6] font-medium mb-1">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[11px] text-[#B8B3A8] font-light leading-snug">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="relative z-10 pt-6 border-t border-[#203B5C]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 gold-btn-shine text-[#07111F] text-xs font-semibold uppercase tracking-[0.2em] rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Start Your Consultation</span>
            </a>

            <button
              type="button"
              onClick={onOpenCustomPage}
              className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#D4D0C6] hover:text-[#D6B878] transition-colors cursor-pointer py-1.5"
            >
              <span>Explore Bespoke Process In Detail</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D6B878] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
