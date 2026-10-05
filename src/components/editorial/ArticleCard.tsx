import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types/content';
import { Clock, ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  variant?: 'horizontal' | 'compact';
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'horizontal',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  if (variant === 'compact') {
    return (
      <article className={`group py-4 border-b border-[#DED8D2] last:border-b-0 ${className}`}>
        <div className="flex items-center gap-2 text-xs text-[#68615D] mb-1.5 font-sans">
          <span className="font-semibold uppercase tracking-wider text-[#830000]">
            {article.categoryLabel}
          </span>
          <span aria-hidden="true" className="text-[#C6BEB6]">·</span>
          <span>{article.readTime}</span>
        </div>
        <h4 className="font-editorial-serif text-base sm:text-lg font-medium text-[#171313] leading-snug group-hover:text-[#830000] transition-colors">
          <Link to={`/read?id=${article.id}`}>
            {article.title}
          </Link>
        </h4>
        <div className="text-xs text-[#68615D] mt-1.5">
          By {article.author.name}
        </div>
      </article>
    );
  }

  return (
    <article className={`group grid grid-cols-1 sm:grid-cols-12 gap-5 p-5 bg-white border border-[#DED8D2] rounded-xl hover:border-[#830000]/40 transition-colors ${className}`}>
      {/* Thumbnail */}
      <div className="sm:col-span-4 rounded-lg overflow-hidden bg-[#EFEAE2] aspect-video sm:aspect-4/3 relative">
        {!imageError ? (
          <img
            src={article.imageUrl}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#EFEAE2] text-[#830000] text-xs font-semibold uppercase tracking-wider">
            1847 Liberty
          </div>
        )}
      </div>

      {/* Narrative */}
      <div className="sm:col-span-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#68615D] mb-2 font-sans">
            <span className="font-semibold uppercase tracking-wider text-[#830000]">
              {article.categoryLabel}
            </span>
            <span aria-hidden="true" className="text-[#C6BEB6]">·</span>
            <span>{article.publishedAt}</span>
            <span aria-hidden="true" className="text-[#C6BEB6]">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3 opacity-60" />
              {article.readTime}
            </span>
          </div>

          <h3 className="font-editorial-serif text-xl sm:text-2xl font-medium text-[#171313] leading-snug group-hover:text-[#830000] transition-colors">
            <Link to={`/read?id=${article.id}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#68615D] mt-2 line-clamp-2 sm:line-clamp-3 leading-relaxed font-sans">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#DED8D2] flex items-center justify-between text-xs font-sans">
          <span className="text-[#171313] font-medium">
            {article.author.name} <span className="text-[#68615D] font-normal">· {article.author.role}</span>
          </span>
          <Link
            to={`/read?id=${article.id}`}
            className="inline-flex items-center gap-1 font-semibold text-[#830000] hover:text-[#5C0000]"
          >
            <span>Read Essay</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
