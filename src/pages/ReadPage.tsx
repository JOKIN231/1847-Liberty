import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { mockArticles } from '../data/articles';
import { categories } from '../data/categories';
import { ContentCard } from '../components/editorial/ContentCard';
import { ArticleCard } from '../components/editorial/ArticleCard';
import { SectionHeader } from '../components/editorial/SectionHeader';
import { CategoryBar } from '../components/navigation/CategoryBar';
import { ContentCategory } from '../types/content';
import { Clock, ArrowLeft, Share2, Bookmark, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ReadPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const articleId = searchParams.get('id');
  const categoryParam = searchParams.get('cat') as ContentCategory | null;

  const [copied, setCopied] = useState(false);

  const selectedArticle = articleId
    ? mockArticles.find((a) => a.id === articleId)
    : null;

  const activeCategory = categoryParam || 'all';

  const handleSelectCategory = (cat: ContentCategory | 'all') => {
    if (cat === 'all') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredArticles = activeCategory === 'all'
    ? mockArticles
    : mockArticles.filter((a) => a.category === activeCategory);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Full Article Reader View
  if (selectedArticle) {
    return (
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Navigation back */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#DED8D2]">
          <Link
            to="/read"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#830000] hover:text-[#5C0000]"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Reading Room
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#171313] bg-white border border-[#DED8D2] rounded-md hover:bg-black/5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share Essay'}</span>
            </button>
          </div>
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs font-sans text-[#68615D] mb-3">
            <span className="font-bold uppercase tracking-widest text-[#F4512D]">
              {selectedArticle.categoryLabel}
            </span>
            <span>·</span>
            <span>{selectedArticle.publishedAt}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {selectedArticle.readTime}
            </span>
          </div>

          <h1 className="font-editorial-serif text-3xl sm:text-5xl lg:text-5xl font-medium tracking-tight text-[#171313] leading-[1.15] text-balance">
            {selectedArticle.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#68615D] mt-4 font-editorial-serif italic leading-relaxed">
            {selectedArticle.excerpt}
          </p>

          {/* Author Byline */}
          <div className="mt-8 pt-6 border-t border-[#DED8D2] flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-[#171313] font-sans">
                {selectedArticle.author.name}
              </div>
              <div className="text-xs text-[#68615D] font-sans">
                {selectedArticle.author.title} &middot; {selectedArticle.author.role}
              </div>
            </div>
            <div className="text-xs text-[#830000] font-sans font-medium">
              1847 Liberty Dispatch
            </div>
          </div>
        </header>

        {/* Lead Image */}
        <div className="aspect-16/9 rounded-2xl overflow-hidden bg-[#EFEAE2] mb-12 border border-[#DED8D2]">
          <img
            src={selectedArticle.imageUrl}
            alt={selectedArticle.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Body Reading Column (Constrained to 65-75ch measure) */}
        <div className="max-w-2xl mx-auto space-y-6 text-[#171313] font-sans leading-relaxed text-base sm:text-lg">
          <p className="editorial-drop-cap">
            {selectedArticle.contentLead || selectedArticle.excerpt}
          </p>

          <p>
            Across historical inflection points in Liberian governance, the tension between centralized institutional authority and communal autonomy has animated public debate. Today, as digital connectivity bridges Monrovia with the diaspora, modern civic expectations demand rigorous accountability and policy transparency.
          </p>

          {/* Pull Quote */}
          <div className="my-8 py-6 px-8 border-l-2 border-[#830000] bg-white rounded-r-xl">
            <blockquote className="font-editorial-serif italic text-xl sm:text-2xl text-[#171313] leading-snug">
              &ldquo;Serious public discourse is not an intellectual luxury; it is the fundamental currency of national development.&rdquo;
            </blockquote>
            <cite className="block text-xs uppercase tracking-wider text-[#68615D] mt-3 font-sans not-italic">
              &mdash; 1847 Liberty Editorial Board
            </cite>
          </div>

          <p>
            Economic sustainability and cultural stewardship are inextricably linked. Whether examining concession renegotiations or the decentralization of municipal services across the counties, the foundational imperative remains constant: building institutional frameworks capable of withstanding electoral transitions.
          </p>

          <p>
            As 1847 Liberty expands its inquiry desks, we invite scholars, civic actors, and citizens from every county and global diaspora chapter to contribute evidenced perspectives to this continuing conversation.
          </p>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 pt-8 border-t border-[#DED8D2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/read"
            className="text-xs font-semibold uppercase tracking-wider text-[#830000] hover:underline"
          >
            &larr; Return to All Articles
          </Link>
          <Button to="/community" variant="secondary" size="sm">
            Join the Public Dialogue
          </Button>
        </div>
      </article>
    );
  }

  // Articles Catalog View
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SectionHeader
        kicker="The 1847 Liberty Review"
        title="Articles, Essays & Policy Analysis"
        description="Thoughtful commentary and investigative inquiries from scholars, policy analysts, and journalists across Liberia."
      />

      {/* Desk Selector */}
      <div className="mb-10">
        <CategoryBar
          selectedCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />
      </div>

      {/* Articles Grid */}
      <div className="space-y-6">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
