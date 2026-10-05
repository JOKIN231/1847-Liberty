import React from 'react';
import { Link } from 'react-router-dom';
import { Episode } from '../../types/content';
import { EpisodeCard } from './EpisodeCard';
import { ArrowRight, Tv, Radio } from 'lucide-react';
import { Button } from '../ui/Button';

interface TheLibertyShowSectionProps {
  episodes: Episode[];
  className?: string;
}

export const TheLibertyShowSection: React.FC<TheLibertyShowSectionProps> = ({
  episodes,
  className = '',
}) => {
  const featuredEpisode = episodes.find((e) => e.featured) || episodes[0];
  const recentEpisodes = episodes.filter((e) => e.id !== featuredEpisode?.id).slice(0, 3);

  return (
    <section className={`py-14 border-b border-[#DED8D2] ${className}`} aria-labelledby="liberty-show-heading">
      {/* Program Banner Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F4512D] font-sans mb-1.5">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>1847 Liberty Flagship Broadcast</span>
          </div>

          <h2 id="liberty-show-heading" className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171313]">
            The Liberty Show
          </h2>

          <p className="text-sm sm:text-base text-[#68615D] mt-1 font-sans">
            Hosted by <strong className="text-[#830000] font-semibold">Thomas M. Sarko</strong> &middot; Rigorous conversations shaping Liberia and Liberians everywhere.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            to="/watch"
            variant="outline"
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            iconPosition="right"
          >
            All Broadcasts
          </Button>
        </div>
      </div>

      {/* Flagship Featured Episode */}
      {featuredEpisode && (
        <div className="mb-8">
          <EpisodeCard episode={featuredEpisode} featured={true} />
        </div>
      )}

      {/* Recent Episodes Grid */}
      {recentEpisodes.length > 0 && (
        <div>
          <div className="flex items-center justify-between py-2 border-b border-[#DED8D2] mb-6 text-xs uppercase tracking-wider font-semibold text-[#68615D] font-sans">
            <span>Recent Broadcast Dialogues</span>
            <Link to="/watch" className="text-[#830000] hover:underline">
              Browse full archive
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
