import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'stacked' | 'horizontal';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  showTagline = true,
  size = 'md',
  layout = 'horizontal',
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-[#F5F0E6]' : 'text-[#07111F]';
  const starColor = '#D6B878';
  const taglineColor = 'text-[#B8B3A8]';
  const ringStroke = isLight ? '#D6B878' : '#07111F';
  const gemFill = isLight ? '#F5F0E6' : '#07111F';
  const goldAccent = '#D6B878';

  const ringSizes = {
    sm: 'w-5 h-5 sm:w-6 sm:h-6',
    md: 'w-7 h-7 sm:w-8 sm:h-8',
    lg: 'w-9 h-9 sm:w-10 sm:h-10',
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base tracking-[0.14em]',
    md: 'text-base sm:text-lg tracking-[0.18em]',
    lg: 'text-xl sm:text-2xl tracking-[0.2em]',
  };

  const tagSizes = {
    sm: 'text-[8px] tracking-[0.22em]',
    md: 'text-[9px] tracking-[0.25em]',
    lg: 'text-[11px] tracking-[0.28em]',
  };

  return (
    <div
      className={`flex ${
        layout === 'stacked' ? 'flex-col items-center text-center' : 'items-center gap-2.5 text-left'
      } select-none ${className}`}
    >
      {/* High-Clarity Solitaire Jewelry Ring Emblem */}
      <svg
        className={`${ringSizes[size]} text-current transition-transform duration-300 group-hover:scale-105 shrink-0`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Solid Circular Ring Band */}
        <circle
          cx="20"
          cy="24"
          r="11.5"
          stroke={ringStroke}
          strokeWidth="2"
        />

        {/* Inner Ring Depth */}
        <circle
          cx="20"
          cy="24"
          r="9"
          stroke={ringStroke}
          strokeWidth="0.8"
          opacity="0.4"
        />

        {/* Diamond Solitaire Setting Prongs */}
        <path
          d="M15 14.5L20 4.5L25 14.5"
          stroke={goldAccent}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Radiant Solitaire Diamond Facet */}
        <polygon
          points="20,3.5 24.5,9.5 20,13.5 15.5,9.5"
          fill={gemFill}
          stroke={goldAccent}
          strokeWidth="0.6"
        />

        {/* Sparkle Glint on Gemstone */}
        <circle cx="20" cy="8.5" r="1" fill="#D6B878" />
        <line x1="20" y1="2" x2="20" y2="4" stroke={goldAccent} strokeWidth="1" strokeLinecap="round" />
        <line x1="13" y1="9.5" x2="15" y2="9.5" stroke={goldAccent} strokeWidth="1" strokeLinecap="round" />
        <line x1="25" y1="9.5" x2="27" y2="9.5" stroke={goldAccent} strokeWidth="1" strokeLinecap="round" />
      </svg>

      <div className="flex flex-col">
        {/* Brand Name */}
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-serif font-medium tracking-wide ${titleSizes[size]} ${textColor} transition-colors group-hover:text-[#D6B878]`}
          >
            Biruh Adorn
          </span>
          <span style={{ color: starColor }} className="text-[8px] sm:text-[9px] animate-pulse">✦</span>
        </div>

        {/* Tagline */}
        {showTagline && (
          <span className={`font-serif italic font-light mt-0.5 ${tagSizes[size]} ${taglineColor}`}>
            Empowering Jewelry
          </span>
        )}
      </div>
    </div>
  );
};

// Decorative Flying Birds / Ethiopian Swallows Motif in Accent Gold
export const GoldSwallowDecor: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = '',
  flipped = false,
}) => {
  return (
    <svg
      className={`${className} ${flipped ? '-scale-x-100' : ''}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 36C14 32 20 22 28 20C34 18 42 12 44 4C38 12 30 14 24 14C18 14 14 18 10 26C8 30 6 36 6 36Z"
        fill="#D6B878"
        opacity="0.8"
      />
      <path
        d="M20 22C24 16 30 8 36 6C30 11 26 15 22 19"
        stroke="#D6B878"
        strokeWidth="1"
      />
      <path
        d="M18 40C23 37 26 31 31 30C35 29 40 25 42 20C38 25 33 26 29 26C25 26 22 29 20 34C19 36 18 40 18 40Z"
        fill="#D6B878"
        opacity="0.55"
      />
    </svg>
  );
};
