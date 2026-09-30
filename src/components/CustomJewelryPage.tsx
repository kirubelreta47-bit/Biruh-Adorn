import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { GoldSwallowDecor } from './BrandLogo';

interface CustomJewelryPageProps {
  onExploreShop?: () => void;
  onNavigateContact?: () => void;
}

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Idea',
    description: 'Share your inspiration and desired direction.',
    subtext: 'Send us sketches, photos, reference silhouettes, or simply describe what you envision.',
  },
  {
    number: '02',
    title: 'Discovery',
    description: 'Materials, stones, sizing and design details are discussed.',
    subtext: 'We explore natural highland stones, metal finishes, ergonomic fit, and personal nuances.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Biruh Adorn provides design drawings/mockups before production.',
    subtext: 'Review visual concepts and refine dimensions until every detail aligns with your vision.',
  },
  {
    number: '04',
    title: 'Creation',
    description: 'The approved concept moves into production and is shaped by hand.',
    subtext: 'Each piece is individually coiled, soldered, and finished at the studio bench in Ethiopia.',
  },
  {
    number: '05',
    title: 'Prepayment',
    description: 'Custom orders require a 50% prepayment to begin.',
    subtext: 'The remaining balance is settled upon completion and final presentation approval.',
  },
];

export const CustomJewelryPage: React.FC<CustomJewelryPageProps> = ({
  onExploreShop,
  onNavigateContact,
}) => {
  const whatsappConsultationUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hello Biruh Adorn! I would like to start a custom jewelry consultation. (YOUR IDEA. YOUR FORM. YOUR JEWELRY.)'
  )}`;

  return (
    <div className="w-full bg-[#FAF8F5] text-[#0B121E]">
      {/* 1. Hero Presentation */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#EBE7DF] overflow-hidden bg-[#FAF8F5]">
        {/* Ambient subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-[#F2EDE2]/70 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#C5A880] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Bespoke Service</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0B121E] tracking-tight leading-[1.1] mb-6">
            YOUR IDEA.
            <br />
            YOUR FORM.
            <br />
            YOUR JEWELRY.
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#5C6474] font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Custom jewelry is an opportunity to create something entirely personal. We work with you to translate your vision into a contemporary, handcrafted piece.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={whatsappConsultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#0B121E] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-lg hover:bg-[#C5A880] hover:text-[#0B121E] transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Start Your Consultation</span>
            </a>

            {onExploreShop && (
              <button
                type="button"
                onClick={onExploreShop}
                className="w-full sm:w-auto px-6 py-4 bg-[#FAF8F5] hover:bg-[#FFFFFF] text-[#0B121E] text-xs font-medium uppercase tracking-[0.18em] rounded-lg border border-[#E0DBD0] hover:border-[#0B121E] transition-all cursor-pointer"
              >
                <span>View Existing Collection</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. Visual Editorial Vignette */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#FFFFFF] border border-[#E2DDD3] rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-xs">
          {/* Subtle Swallow Decor */}
          <div className="absolute top-4 right-4 w-10 h-10 opacity-20 pointer-events-none">
            <GoldSwallowDecor className="w-full h-full" flipped={true} />
          </div>

          <div className="md:col-span-5 relative aspect-4/5 rounded-xl overflow-hidden bg-[#162032] shadow-sm">
            <img
              src="/biruh images/IMG_2002.JPG"
              alt="Handcrafted custom wire ring coiling"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B121E]/40 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-[9px] font-sans uppercase tracking-widest text-[#FAF8F5] bg-[#0B121E]/80 px-2.5 py-1 rounded-xs backdrop-blur-xs">
              Hand-Coiled Wirework
            </span>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C5A880] block mb-2">
              Made For You
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0B121E] font-normal tracking-tight mb-4">
              A Direct Dialogue With The Maker
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#5C6474] font-light leading-relaxed mb-4">
              Every bespoke commission is personally overseen by Biruh Getnet Aklog. Rather than choosing from pre-set configurations, we listen directly to your story, your desired gemstone palette, and how you want the piece to feel upon your body.
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#5C6474] font-light leading-relaxed mb-6">
              Whether you wish to commemorate a personal milestone, create a signature heirloom ring, or sculpt a unique necklace featuring raw highland stone, our studio brings it to life link by link.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-[#8E98A8] font-light">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                100% Handcrafted
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                Authenticity Guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 5-Step Process */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#EBE7DF]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-[#C5A880] block mb-2">
              Step by Step
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B121E] font-normal tracking-tight">
              The Process
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#6C7688] font-light mt-1.5">
              Clear, transparent milestones from your initial inspiration to the finished piece.
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#FFFFFF] border border-[#E2DDD3] hover:border-[#C5A880] p-6 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl sm:text-3xl text-[#C5A880] font-light tracking-tight group-hover:scale-105 transition-transform">
                      {step.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#E0DBD0] group-hover:bg-[#C5A880] transition-colors" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-[#0B121E] font-medium tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs text-[#0B121E] font-medium leading-relaxed mb-2">
                    {step.description}
                  </p>

                  <p className="font-sans text-[11px] text-[#6C7688] font-light leading-relaxed">
                    {step.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Prepayment & Terms Note */}
          <div className="mt-10 p-5 sm:p-6 bg-[#FFFFFF] border border-[#E2DDD3] rounded-xl text-center max-w-2xl mx-auto shadow-2xs">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-[#C5A880] block mb-1">
              Transparent Commission Terms
            </span>
            <p className="font-sans text-xs text-[#5C6474] font-light leading-relaxed">
              Custom orders require a <strong>50% prepayment</strong> to begin sourcing materials and sculpting your piece. Full photographic updates and drawings are shared throughout each stage.
            </p>
          </div>

          {/* Final Call to Action */}
          <div className="text-center mt-12">
            <a
              href={whatsappConsultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-[#0B121E] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-lg hover:bg-[#C5A880] hover:text-[#0B121E] transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Start Your Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
