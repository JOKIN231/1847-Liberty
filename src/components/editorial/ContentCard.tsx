import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

export interface ContentCardProps {
  category: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  imageAlt?: string;
  date: string;
  readTimeOrDuration?: string;
  authorOrHost?: string;
  linkTo: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  featured?: boolean;
  className?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  category,
  title,
  excerpt,
  imageUrl,
  imageAlt = '',
  date,
  readTimeOrDuration,
  authorOrHost,
  linkTo,
  aspectRatio = '4:3',
  featured = false,
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  const aspectClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-4/3',
    '1:1': 'aspect-square',
  }[aspectRatio];

  return (
    <article
      className={`group flex flex-col bg-white border border-[#DED8D2] hover:border-[#830000]/40 rounded-xl overflow-hidden transition-all duration-200 ease-out ${
        featured ? 'ring-1 ring-[#830000]/20' : ''
      } ${className}`}
    >
      {/* Image Container with Fallback */}
      <Link to={linkTo} className={`relative block overflow-hidden bg-[#EFEAE2] ${aspectClasses}`}>
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={imageAlt || title}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#EFEAE2] to-[#E3DDCF] text-[#830000]">
            <BookOpen className="w-8 h-8 stroke-[1.25] mb-2 opacity-60" />
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#68615D]">
              1847 Liberty Archive
            </span>
          </div>
        )}
      </Link>

      {/* Content Body */}
      <div className="flex-1 flex flex-col p-5 sm:p-6 justify-between">
        <div>
          {/* Metadata Row: Zero-Pill Discipline */}
          <div className="flex items-center gap-2 text-xs text-[#68615D] mb-2.5 font-sans">
            <span className="font-semibold uppercase tracking-wider text-[#830000]">
              {category}
            </span>
            <span aria-hidden="true" className="text-[#C6BEB6]">·</span>
            <span>{date}</span>
            {readTimeOrDuration && (
              <>
                <span aria-hidden="true" className="text-[#C6BEB6]">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3 opacity-60" />
                  {readTimeOrDuration}
                </span>
              </>
            )}
          </div>

          {/* Headline */}
          <h3 className="font-editorial-serif text-lg sm:text-xl font-medium text-[#171313] leading-snug group-hover:text-[#830000] transition-colors text-balance">
            <Link to={linkTo} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#830000] rounded-sm">
              {title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-[#68615D] mt-2 line-clamp-3 leading-relaxed font-sans">
            {excerpt}
          </p>
        </div>

        {/* Footer / Attribution */}
        <div className="mt-5 pt-4 border-t border-[#DED8D2] flex items-center justify-between text-xs text-[#68615D] font-sans">
          {authorOrHost ? (
            <span className="font-medium text-[#171313] truncate max-w-[200px]">
              {authorOrHost}
            </span>
          ) : (
            <span>1847 Liberty</span>
          )}

          <Link
            to={linkTo}
            className="inline-flex items-center gap-1 font-semibold text-[#830000] group-hover:translate-x-0.5 transition-transform"
            aria-label={`Read ${title}`}
          >
            <span>Read</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
