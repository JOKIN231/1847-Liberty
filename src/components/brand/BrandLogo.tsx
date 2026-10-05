import React from 'react';

/**
 * 1847 LIBERTY BRAND LOGO COMPONENT
 * 
 * Visual Reference Specification:
 * - 1847 Liberty wordmark
 * - Stylized rising-sun / torch motif
 * - Strong geometric typography
 * - Primary Brand Colors: Maroon (#830000), Orange (#F4512D), White (#FFFFFF), Deep Ink (#171313)
 * 
 * Note: When the final production SVG asset is provisioned, place it in /public/logo.svg
 * or import here. This component serves as the faithful, proportional brand mark.
 */

interface BrandLogoProps {
  variant?: 'default' | 'light' | 'monochrome' | 'mark-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const isLight = variant === 'light';
  const isMono = variant === 'monochrome';
  const isMarkOnly = variant === 'mark-only';

  const textColor = isLight 
    ? '#FFFFFF' 
    : isMono 
      ? 'currentColor' 
      : '#171313';

  const maroonColor = isLight ? '#FFFFFF' : '#830000';
  const orangeColor = isLight ? '#F4512D' : '#F4512D';

  const sizeClasses = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
  }[size];

  if (isMarkOnly) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses} w-auto aspect-square ${className}`}
        aria-label="1847 Liberty Emblem"
      >
        <rect width="100" height="100" rx="16" fill={maroonColor} />
        {/* Horizon bar */}
        <rect x="24" y="68" width="52" height="5" rx="1" fill="#FFFFFF" />
        <rect x="32" y="76" width="36" height="3" rx="1" fill={orangeColor} />
        {/* Torch shaft */}
        <path d="M44 68 L46 52 H54 L56 68 Z" fill="#FFFFFF" />
        {/* Torch flame / Central sun ray */}
        <path d="M50 20 L54 48 H46 Z" fill={orangeColor} />
        <circle cx="50" cy="36" r="3.5" fill="#FFFFFF" />
        {/* Left rays */}
        <path d="M42 48 L30 28 L33 26 L44 47 Z" fill="#FFFFFF" />
        <path d="M39 50 L22 41 L24 38 L41 49 Z" fill={orangeColor} opacity="0.9" />
        {/* Right rays */}
        <path d="M58 48 L70 28 L67 26 L56 47 Z" fill="#FFFFFF" />
        <path d="M61 50 L78 41 L76 38 L59 49 Z" fill={orangeColor} opacity="0.9" />
        {/* Sun crest arc */}
        <path d="M37 53 Q50 43 63 53" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Stylized Rising Sun / Torch Motif Emblem */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses} w-auto aspect-square shrink-0`}
        aria-hidden="true"
      >
        <rect width="100" height="100" rx="16" fill={maroonColor} />
        {/* Horizon bar */}
        <rect x="24" y="68" width="52" height="5" rx="1" fill="#FFFFFF" />
        <rect x="32" y="76" width="36" height="3" rx="1" fill={orangeColor} />
        {/* Torch shaft */}
        <path d="M44 68 L46 52 H54 L56 68 Z" fill="#FFFFFF" />
        {/* Torch flame / Central sun ray */}
        <path d="M50 20 L54 48 H46 Z" fill={orangeColor} />
        <circle cx="50" cy="36" r="3.5" fill="#FFFFFF" />
        {/* Left rays */}
        <path d="M42 48 L30 28 L33 26 L44 47 Z" fill="#FFFFFF" />
        <path d="M39 50 L22 41 L24 38 L41 49 Z" fill={orangeColor} opacity="0.9" />
        {/* Right rays */}
        <path d="M58 48 L70 28 L67 26 L56 47 Z" fill="#FFFFFF" />
        <path d="M61 50 L78 41 L76 38 L59 49 Z" fill={orangeColor} opacity="0.9" />
        {/* Sun crest arc */}
        <path d="M37 53 Q50 43 63 53" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>

      {/* Geometric 1847 LIBERTY Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5">
          <span 
            className="text-xl sm:text-2xl font-bold tracking-tight font-sans"
            style={{ color: maroonColor }}
          >
            1847
          </span>
          <span 
            className="text-xl sm:text-2xl font-black tracking-wider uppercase font-sans"
            style={{ color: textColor }}
          >
            LIBERTY
          </span>
        </div>
        <span 
          className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-medium font-sans mt-0.5"
          style={{ color: isLight ? 'rgba(255,255,255,0.75)' : '#68615D' }}
        >
          Liberian Media & Discourse
        </span>
      </div>
    </div>
  );
};
