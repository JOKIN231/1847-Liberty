import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { mockArticles } from '../data/articles';
import { mockEpisodes } from '../data/episodes';
import { categories } from '../data/categories';
import { SectionHeader } from '../components/editorial/SectionHeader';
import { EmptyState } from '../components/ui/EmptyState';
import { Search, Radio, BookOpen, Clock, ArrowRight, X } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    if (val.trim()) {
      setSearchParams({ q: val });
    } else {
      setSearchParams({});
    }
  };

  const clearQuery = () => {
    setQuery('');
    setSearchParams({});
  };

  // Search results
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return { articles: [], episodes: [], categories: [] };
    }

    const matchedArticles = mockArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.categoryLabel.toLowerCase().includes(q) ||
        a.author.name.toLowerCase().includes(q)
    );

    const matchedEpisodes = mockEpisodes.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.topics.some((t) => t.toLowerCase().includes(q)) ||
        (e.guest && e.guest.name.toLowerCase().includes(q))
    );

    const matchedCategories = categories.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );

    return {
      articles: matchedArticles,
      episodes: matchedEpisodes,
      categories: matchedCategories,
    };
  }, [query]);

  const totalResults = results.articles.length + results.episodes.length + results.categories.length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <SectionHeader
        kicker="Search & Index"
        title="1847 Liberty Archive"
        description="Search published essays, policy reviews, The Liberty Show broadcasts, and coverage desks."
      />

      {/* Search Input Bar */}
      <div className="relative mb-10">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#830000]">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Search by topic, keyword, author, or episode number (e.g. 'maritime', 'governance', 'Sarko')..."
          autoFocus
          className="w-full pl-12 pr-12 py-4 text-base sm:text-lg bg-white border-2 border-[#DED8D2] rounded-xl text-[#171313] placeholder:text-[#68615D]/60 focus:outline-none focus:border-[#830000] focus:ring-2 focus:ring-[#830000]/20 shadow-xs"
        />
        {query && (
          <button
            onClick={clearQuery}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#68615D] hover:text-[#171313]"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Suggested Keywords when query is empty */}
      {!query && (
        <div className="p-6 bg-white border border-[#DED8D2] rounded-2xl mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#68615D] mb-3">
            Suggested Research Areas
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Maritime Commerce',
              'Constitutional Reform',
              'Diaspora Capital',
              'Country-cloth Heritage',
              'Leeward Counties',
              'Local Government Act',
              'Thomas M. Sarko',
            ].map((term) => (
              <button
                key={term}
                onClick={() => handleQueryChange(term)}
                className="px-3 py-1.5 text-xs font-medium text-[#171313] bg-[#F7F4EF] hover:bg-[#EFEAE2] border border-[#DED8D2] rounded-lg transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {query && (
        <div>
          <div className="text-xs uppercase font-mono tracking-wider text-[#68615D] mb-6">
            Showing {totalResults} {totalResults === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
          </div>

          {totalResults === 0 ? (
            <EmptyState
              title={`No matches found for "${query}"`}
              description="Please refine your search terms or browse our coverage desks directly."
              actionText="View all articles"
              actionTo="/read"
            />
          ) : (
            <div className="space-y-10">
              
              {/* Episodes Results */}
              {results.episodes.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F4512D] mb-3 pb-2 border-b border-[#DED8D2]">
                    <Radio className="w-4 h-4" />
                    <span>The Liberty Show Broadcasts ({results.episodes.length})</span>
                  </div>
                  <div className="space-y-4">
                    {results.episodes.map((ep) => (
                      <Link
                        key={ep.id}
                        to={`/watch?ep=${ep.id}`}
                        className="group block p-5 bg-white border border-[#DED8D2] hover:border-[#830000] rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-2 text-xs text-[#68615D] mb-1 font-sans">
                          <span className="font-semibold text-[#830000]">Episode {ep.episodeNumber}</span>
                          <span>·</span>
                          <span>{ep.broadcastDate}</span>
                          <span>·</span>
                          <span>{ep.duration}</span>
                        </div>
                        <h3 className="font-editorial-serif text-lg font-medium text-[#171313] group-hover:text-[#830000]">
                          {ep.title}
                        </h3>
                        <p className="text-xs text-[#68615D] mt-1.5 line-clamp-2">
                          {ep.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles Results */}
              {results.articles.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#830000] mb-3 pb-2 border-b border-[#DED8D2]">
                    <BookOpen className="w-4 h-4" />
                    <span>Articles & Essays ({results.articles.length})</span>
                  </div>
                  <div className="space-y-4">
                    {results.articles.map((art) => (
                      <Link
                        key={art.id}
                        to={`/read?id=${art.id}`}
                        className="group block p-5 bg-white border border-[#DED8D2] hover:border-[#830000] rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-2 text-xs text-[#68615D] mb-1 font-sans">
                          <span className="font-semibold uppercase tracking-wider text-[#830000]">
                            {art.categoryLabel}
                          </span>
                          <span>·</span>
                          <span>{art.publishedAt}</span>
                          <span>·</span>
                          <span>{art.readTime}</span>
                        </div>
                        <h3 className="font-editorial-serif text-lg font-medium text-[#171313] group-hover:text-[#830000]">
                          {art.title}
                        </h3>
                        <p className="text-xs text-[#68615D] mt-1.5 line-clamp-2">
                          {art.excerpt}
                        </p>
                        <div className="text-xs text-[#171313] mt-2 font-medium">
                          By {art.author.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Category Desks */}
              {results.categories.length > 0 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#68615D] mb-3 pb-2 border-b border-[#DED8D2]">
                    Coverage Desks ({results.categories.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {results.categories.map((c) => (
                      <Link
                        key={c.id}
                        to={`/read?cat=${c.id}`}
                        className="p-4 bg-white border border-[#DED8D2] hover:border-[#830000] rounded-xl block"
                      >
                        <div className="font-editorial-serif text-base font-medium text-[#171313]">
                          {c.name}
                        </div>
                        <p className="text-xs text-[#68615D] mt-1 line-clamp-2">
                          {c.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      )}
    </div>
  );
};
