import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  viewAllText?: string;
  viewAllLink?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  description,
  viewAllText,
  viewAllLink,
  className = '',
}) => {
  return (
    <div className={`border-b border-[#DED8D2] pb-4 mb-8 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          {kicker && (
            <div className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#F4512D] font-sans mb-1">
              {kicker}
            </div>
          )}
          <h2 className="font-editorial-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#171313] text-balance">
            {title}
          </h2>
          {description && (
            <p className="text-xs sm:text-sm text-[#68615D] mt-1.5 max-w-2xl font-sans leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {viewAllLink && viewAllText && (
          <Link
            to={viewAllLink}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#830000] hover:text-[#5C0000] transition-colors py-1 group shrink-0"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
};
