import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types/content';
import { Clock, ArrowRight } from 'lucide-react';

interface HeroFeaturedProps {
  leadStory: Article;
  secondaryStories: Article[];
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({
  leadStory,
  secondaryStories,
}) => {
  return (
    <section className="border-b border-[#DED8D2] pb-12 mb-16">
      {/* Editorial Dateline Strip */}
      <div className="flex items-center justify-between border-y border-[#DED8D2] py-2 mb-8 text-[11px] uppercase tracking-wider font-semibold text-[#68615D] font-sans">
        <div className="flex items-center gap-3">
          <span className="text-[#830000]">Monrovia Dispatch</span>
          <span aria-hidden="true" className="text-[#DED8D2]">|</span>
          <span>Vol. I &middot; Public Discourse Edition</span>
        </div>
        <div className="hidden sm:block">
          Serious Conversations &middot; Liberian Perspectives
        </div>
      </div>

      {/* Main Editorial Grid: 12-Column Broadsheet Rhythm */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Dominant Lead Story: 8 Columns */}
        <article className="lg:col-span-8 flex flex-col group">
          {/* Main Visual */}
          <Link 
            to={`/read?id=${leadStory.id}`}
            className="block aspect-16/9 sm:aspect-16/9 w-full rounded-xl overflow-hidden bg-[#EFEAE2] relative"
          >
            <img
              src={leadStory.imageUrl}
              alt={leadStory.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            {/* Curatorial subtle overlay bottom gradient for readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
          </Link>

          {/* Headline & Deck */}
          <div className="mt-5 space-y-3">
            {/* Unboxed Zero-Pill Metadata */}
            <div className="flex items-center gap-2 text-xs text-[#68615D] font-sans">
              <span className="font-bold uppercase tracking-widest text-[#F4512D]">
                {leadStory.categoryLabel}
              </span>
              <span aria-hidden="true" className="text-[#C6BEB6]">·</span>
              <span>{leadStory.publishedAt}</span>
              <span aria-hidden="true" className="text-[#C6BEB6]">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3 opacity-60" />
                {leadStory.readTime}
              </span>
            </div>

            <h1 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171313] leading-[1.12] text-balance group-hover:text-[#830000] transition-colors">
              <Link to={`/read?id=${leadStory.id}`}>
                {leadStory.title}
              </Link>
            </h1>

            <p className="text-base sm:text-lg text-[#68615D] leading-relaxed max-w-3xl font-sans pt-1">
              {leadStory.excerpt}
            </p>

            {/* Bylines & Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#DED8D2] text-xs font-sans">
              <div>
                <span className="font-semibold text-[#171313]">{leadStory.author.name}</span>
                <span className="text-[#68615D]"> &middot; {leadStory.author.title}</span>
              </div>

              <Link
                to={`/read?id=${leadStory.id}`}
                className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs text-[#830000] group-hover:text-[#5C0000]"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </article>

        {/* Secondary Editorial Column: 4 Columns */}
        <aside className="lg:col-span-4 flex flex-col divide-y divide-[#DED8D2] lg:border-l lg:border-[#DED8D2] lg:pl-8">
          <div className="pb-4 mb-2">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[#830000] font-sans">
              Editorial Dispatches
            </span>
          </div>

          {secondaryStories.map((story) => (
            <article key={story.id} className="py-5 first:pt-2 last:pb-0 group">
              <div className="flex items-center gap-2 text-xs text-[#68615D] mb-1.5 font-sans">
                <span className="font-semibold uppercase tracking-wider text-[#830000]">
                  {story.categoryLabel}
                </span>
                <span aria-hidden="true" className="text-[#C6BEB6]">·</span>
                <span>{story.readTime}</span>
              </div>

              <h2 className="font-editorial-serif text-lg sm:text-xl font-medium text-[#171313] leading-snug group-hover:text-[#830000] transition-colors">
                <Link to={`/read?id=${story.id}`}>
                  {story.title}
                </Link>
              </h2>

              <p className="text-xs text-[#68615D] mt-2 line-clamp-2 leading-relaxed font-sans">
                {story.excerpt}
              </p>

              <div className="mt-2.5 text-[11px] text-[#68615D] font-sans">
                By {story.author.name}
              </div>
            </article>
          ))}
        </aside>

      </div>
    </section>
  );
};
