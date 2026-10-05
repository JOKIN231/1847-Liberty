import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Episode } from '../../types/content';
import { Play, Clock, Calendar, CheckCircle } from 'lucide-react';

interface EpisodeCardProps {
  episode: Episode;
  featured?: boolean;
  onPlay?: (episode: Episode) => void;
  className?: string;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episode,
  featured = false,
  onPlay,
  className = '',
}) => {
  const [isPlayingMock, setIsPlayingMock] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onPlay) {
      onPlay(episode);
    } else {
      setIsPlayingMock(true);
      setTimeout(() => setIsPlayingMock(false), 3000);
    }
  };

  if (featured) {
    return (
      <div className={`bg-[#171313] text-white rounded-2xl overflow-hidden border border-[#302B29] ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Visual with Play Overlay */}
          <div className="lg:col-span-7 relative aspect-video bg-[#0A0A0A] overflow-hidden group">
            {!imgError ? (
              <img
                src={episode.imageUrl}
                alt={episode.imageAlt}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#201C1A] text-white/50">
                1847 Liberty Broadcast Studio
              </div>
            )}

            {/* Play Button Trigger */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
              <button
                onClick={handlePlayClick}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#830000] text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 group-active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F4512D]"
                aria-label={`Play episode ${episode.episodeNumber}: ${episode.title}`}
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
              </button>
            </div>

            {/* Duration Tag */}
            <div className="absolute bottom-4 right-4 px-2.5 py-1 text-xs font-mono bg-black/80 backdrop-blur-xs text-white rounded">
              {episode.duration}
            </div>

            {isPlayingMock && (
              <div className="absolute top-4 left-4 right-4 p-3 bg-[#830000] text-white text-xs font-medium rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Simulated Broadcast: Episode {episode.episodeNumber} is queued. (YouTube player connects in Milestone 2)</span>
              </div>
            )}
          </div>

          {/* Episode Info */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Program Lockup */}
              <div className="flex items-center gap-2 text-xs font-sans mb-3">
                <span className="font-bold uppercase tracking-widest text-[#F4512D]">
                  Episode {episode.episodeNumber}
                </span>
                <span aria-hidden="true" className="text-white/30">·</span>
                <span className="text-[#A8A19B]">{episode.broadcastDate}</span>
              </div>

              <h3 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-white leading-tight mb-3">
                {episode.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#C6BEB6] leading-relaxed line-clamp-3 font-sans">
                {episode.description}
              </p>

              {/* Guest & Host Attribution */}
              <div className="mt-5 pt-4 border-t border-[#302B29] space-y-1.5 text-xs font-sans">
                {episode.guest && (
                  <div>
                    <span className="text-[#8C837C]">Featured Guest: </span>
                    <span className="text-white font-medium">{episode.guest.name}</span>
                    <span className="text-[#8C837C]"> ({episode.guest.role})</span>
                  </div>
                )}
                <div>
                  <span className="text-[#8C837C]">Host: </span>
                  <span className="text-[#F4512D] font-medium">{episode.host}</span>
                </div>
              </div>
            </div>

            {/* Topics */}
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-[#A8A19B] font-sans">
              {episode.topics.map((topic) => (
                <span key={topic} className="text-[#A8A19B]">
                  #{topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className={`group flex flex-col bg-white border border-[#DED8D2] rounded-xl overflow-hidden hover:border-[#830000]/40 transition-colors ${className}`}>
      {/* Thumbnail with duration */}
      <div className="relative aspect-video bg-[#0A0A0A] overflow-hidden">
        {!imgError ? (
          <img
            src={episode.imageUrl}
            alt={episode.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#201C1A] text-white/50 text-xs">
            The Liberty Show
          </div>
        )}

        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors"
          aria-label={`Play episode ${episode.episodeNumber}`}
        >
          <div className="w-12 h-12 rounded-full bg-[#830000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          </div>
        </button>

        <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 text-[10px] font-mono bg-black/80 text-white rounded">
          {episode.duration}
        </span>

        {isPlayingMock && (
          <div className="absolute inset-x-2 top-2 p-2 bg-[#830000] text-white text-[11px] font-medium rounded shadow flex items-center gap-1.5 animate-in fade-in">
            <span>Playing Ep. {episode.episodeNumber}...</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#68615D] mb-2 font-sans">
            <span className="font-semibold uppercase tracking-wider text-[#F4512D]">
              Episode {episode.episodeNumber}
            </span>
            <span aria-hidden="true" className="text-[#C6BEB6]">·</span>
            <span>{episode.broadcastDate}</span>
          </div>

          <h4 className="font-editorial-serif text-lg font-medium text-[#171313] leading-snug group-hover:text-[#830000] transition-colors line-clamp-2">
            <Link to={`/watch?ep=${episode.id}`}>
              {episode.title}
            </Link>
          </h4>

          <p className="text-xs text-[#68615D] mt-2 line-clamp-2 leading-relaxed font-sans">
            {episode.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#DED8D2] flex items-center justify-between text-xs text-[#68615D] font-sans">
          <span>Hosted by <strong className="text-[#171313] font-medium">{episode.host}</strong></span>
          <Link
            to={`/watch?ep=${episode.id}`}
            className="font-semibold text-[#830000] hover:underline"
          >
            Watch
          </Link>
        </div>
      </div>
    </article>
  );
};
