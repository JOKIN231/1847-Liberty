import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockArticles } from '../data/articles';
import { mockEpisodes } from '../data/episodes';
import { categories } from '../data/categories';
import { mockPolls } from '../data/communityPolls';
import { HeroFeatured } from '../components/editorial/HeroFeatured';
import { SectionHeader } from '../components/editorial/SectionHeader';
import { ContentCard } from '../components/editorial/ContentCard';
import { TheLibertyShowSection } from '../components/media/TheLibertyShowSection';
import { CommunityPollCard } from '../components/community/CommunityPollCard';
import { NewsletterSection } from '../components/community/NewsletterSection';
import { CategoryBar } from '../components/navigation/CategoryBar';
import { ContentCategory } from '../types/content';
import { Button } from '../components/ui/Button';
import { ArrowRight, BookOpen, Compass, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ContentCategory | 'all'>('all');

  const leadStory = mockArticles.find((a) => a.leadStory) || mockArticles[0];
  const secondaryStories = mockArticles.filter((a) => a.id !== leadStory.id).slice(0, 3);

  // Filtered stories for latest content section
  const filteredStories = selectedCategory === 'all'
    ? mockArticles.slice(1, 4)
    : mockArticles.filter((a) => a.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      
      {/* 1. Hero / Featured Editorial Area */}
      <HeroFeatured
        leadStory={leadStory}
        secondaryStories={secondaryStories}
      />

      {/* 2. Flagship Program: The Liberty Show */}
      <TheLibertyShowSection episodes={mockEpisodes} />

      {/* 3. Latest Editorial & In-Depth Reporting */}
      <section className="py-14 border-b border-[#DED8D2]">
        <SectionHeader
          kicker="From the Desks"
          title="Reporting, Analysis & Cultural Critique"
          description="Independent investigative reporting and thoughtful commentary on Liberia's institutional, economic, and civic trajectory."
          viewAllText="Explore all essays"
          viewAllLink="/read"
        />

        {/* Category Desk Selector */}
        <div className="mb-8">
          <CategoryBar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStories.map((article) => (
            <ContentCard
              key={article.id}
              category={article.categoryLabel}
              title={article.title}
              excerpt={article.excerpt}
              imageUrl={article.imageUrl}
              imageAlt={article.imageAlt}
              date={article.publishedAt}
              readTimeOrDuration={article.readTime}
              authorOrHost={article.author.name}
              linkTo={`/read?id=${article.id}`}
              aspectRatio="4:3"
            />
          ))}
        </div>
      </section>

      {/* 4. Public Discourse & Civic Polls */}
      <section className="py-14 border-b border-[#DED8D2]">
        <SectionHeader
          kicker="Public Discourse"
          title="Citizen Voice & Civic Inquiries"
          description="Direct sentiment from Liberians at home and abroad on core national choices."
          viewAllText="View all inquiries"
          viewAllLink="/community"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <CommunityPollCard poll={mockPolls[0]} />
          </div>

          <div className="lg:col-span-5 bg-white border border-[#DED8D2] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#830000] font-sans">
                Editorial Charter
              </span>
              <h3 className="font-editorial-serif text-2xl font-medium text-[#171313] mt-2 mb-3">
                Why 1847 Liberty is Independent
              </h3>
              <p className="text-xs sm:text-sm text-[#68615D] leading-relaxed font-sans mb-4">
                Liberian democracy requires media organizations unencumbered by partisan patronage. We operate with complete editorial autonomy, funded by reader subscriptions, transparent institutional partnerships, and our community.
              </p>
              
              <ul className="space-y-2.5 text-xs text-[#171313] font-sans mb-6">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#830000] shrink-0" />
                  <span>Strict firewall between editorial and commercial partners</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#830000] shrink-0" />
                  <span>Evidence-grounded reporting with public corrections</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#830000] shrink-0" />
                  <span>Pan-Liberian perspective bridging domestic & diaspora voices</span>
                </li>
              </ul>
            </div>

            <Button
              to="/about"
              variant="secondary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Read our Editorial Standards
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Editorial Desks / Exploration */}
      <section className="py-14 border-b border-[#DED8D2]">
        <SectionHeader
          kicker="Browse By Field"
          title="Explore Our Core Coverage Desks"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/read?cat=${cat.id}`}
              className="group p-6 bg-white border border-[#DED8D2] rounded-xl hover:border-[#830000] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#F4512D] font-sans">
                  {cat.count} published essays
                </span>
                <h3 className="font-editorial-serif text-xl font-medium text-[#171313] mt-1 group-hover:text-[#830000] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#68615D] mt-2 font-sans leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DED8D2] flex items-center justify-between text-xs font-semibold text-[#830000]">
                <span>Browse desk</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Newsletter / Dispatch */}
      <NewsletterSection />

      {/* 7. Institutional Partnership & Booking Callout */}
      <section className="py-12 bg-white border border-[#DED8D2] rounded-2xl p-8 sm:p-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F4512D] font-sans">
              Collaborate With 1847 Liberty
            </span>
            <h3 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#171313] mt-2 mb-3">
              Partner with our platform or engage Thomas M. Sarko for keynote dialogue
            </h3>
            <p className="text-xs sm:text-sm text-[#68615D] leading-relaxed max-w-2xl font-sans">
              We collaborate with research institutions, diaspora organizations, civic foundations, and universities seeking informed public engagement and authoritative broadcast moderation across West Africa.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Button
              to="/partner"
              variant="primary"
              size="md"
              icon={<Building2 className="w-4 h-4" />}
            >
              Institutional Partnerships
            </Button>
            <Button
              to="/book"
              variant="outline"
              size="md"
            >
              Book Thomas M. Sarko
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
