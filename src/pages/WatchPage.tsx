import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockEpisodes } from '../data/episodes';
import { EpisodeCard } from '../components/media/EpisodeCard';
import { SectionHeader } from '../components/editorial/SectionHeader';
import { Play, Calendar, User, Radio, ArrowLeft, Share2, Info } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const WatchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedEpId = searchParams.get('ep');

  const [activeTopic, setActiveTopic] = useState<string>('all');

  const selectedEpisode = selectedEpId
    ? mockEpisodes.find((e) => e.id === selectedEpId)
    : null;

  // Filter episodes by topic
  const allTopics = Array.from(new Set(mockEpisodes.flatMap((e) => e.topics)));
  const filteredEpisodes = activeTopic === 'all'
    ? mockEpisodes
    : mockEpisodes.filter((e) => e.topics.includes(activeTopic));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="border-b border-[#DED8D2] pb-8 mb-10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F4512D] font-sans mb-2">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>Broadcast Programming</span>
        </div>
        <h1 className="font-editorial-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#171313]">
          The Liberty Show
        </h1>
        <p className="text-base text-[#68615D] mt-2 max-w-2xl font-sans">
          Hosted by <strong className="text-[#830000] font-semibold">Thomas M. Sarko</strong>. In-depth broadcast dialogues with leaders, scholars, and builders shaping Liberia.
        </p>

        {/* Milestone Note */}
        <div className="mt-4 p-3 bg-white border border-[#DED8D2] rounded-lg text-xs text-[#68615D] inline-flex items-center gap-2">
          <Info className="w-4 h-4 text-[#830000] shrink-0" />
          <span>YouTube broadcast integration and live streaming will be linked in Milestone 2. Full archive accessible below.</span>
        </div>
      </div>

      {/* Episode Detail View (if selected in query) */}
      {selectedEpisode ? (
        <div className="mb-12 bg-white border border-[#DED8D2] rounded-2xl p-6 sm:p-10 shadow-sm animate-in fade-in">
          <button
            onClick={() => setSearchParams({})}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#830000] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all episodes
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-6">
                <img
                  src={selectedEpisode.imageUrl}
                  alt={selectedEpisode.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/40 text-white">
                  <div className="w-16 h-16 rounded-full bg-[#830000] flex items-center justify-center mb-3 shadow-xl">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>
                  <span className="text-sm font-semibold">Broadcast Player Simulation</span>
                  <span className="text-xs text-white/70 mt-1">Duration: {selectedEpisode.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#68615D] mb-2 font-sans">
                <span className="font-bold text-[#F4512D] uppercase tracking-wider">
                  Episode {selectedEpisode.episodeNumber}
                </span>
                <span>·</span>
                <span>{selectedEpisode.broadcastDate}</span>
              </div>

              <h2 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#171313] mb-4">
                {selectedEpisode.title}
              </h2>

              <p className="text-sm text-[#171313] leading-relaxed font-sans mb-6">
                {selectedEpisode.description}
              </p>

              <div className="p-5 bg-[#F7F4EF] rounded-xl border border-[#DED8D2] space-y-2 text-xs text-[#68615D] font-sans">
                <div className="font-semibold text-[#171313] uppercase tracking-wider text-[11px]">
                  Broadcast Notes & Overview
                </div>
                <p>
                  This session was recorded at 1847 Liberty studios in Monrovia. Full transcript and cited public policy papers will be made available in future releases.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-[#DED8D2] lg:pl-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-[#68615D] mb-3">
                  Broadcast Masthead
                </h4>
                <div className="p-4 bg-[#F7F4EF] rounded-xl border border-[#DED8D2] space-y-3 text-xs">
                  <div>
                    <div className="text-[#68615D]">Host & Anchor</div>
                    <div className="font-semibold text-[#171313] text-sm">{selectedEpisode.host}</div>
                  </div>
                  {selectedEpisode.guest && (
                    <div>
                      <div className="text-[#68615D]">Featured Guest</div>
                      <div className="font-semibold text-[#171313] text-sm">{selectedEpisode.guest.name}</div>
                      <div className="text-[#68615D] text-[11px]">{selectedEpisode.guest.role}</div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-[#68615D] mb-2">
                  Topics Covered
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedEpisode.topics.map((t) => (
                    <span key={t} className="text-xs font-sans text-[#830000] font-medium bg-[#830000]/5 px-2.5 py-1 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Featured Episode Hero if no specific episode selected */
        <div className="mb-14">
          <EpisodeCard episode={mockEpisodes[0]} featured={true} />
        </div>
      )}

      {/* Topics Filter */}
      <div className="mb-8">
        <div className="flex items-center justify-between pb-3 border-b border-[#DED8D2] mb-4">
          <h3 className="font-editorial-serif text-2xl font-medium text-[#171313]">
            All Episodes Archive
          </h3>
          <span className="text-xs text-[#68615D] font-mono">
            {filteredEpisodes.length} episodes recorded
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setActiveTopic('all')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
              activeTopic === 'all'
                ? 'bg-[#830000] text-white'
                : 'bg-white border border-[#DED8D2] text-[#68615D] hover:text-[#171313]'
            }`}
          >
            All Topics
          </button>
          {allTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap ${
                activeTopic === topic
                  ? 'bg-[#830000] text-white'
                  : 'bg-white border border-[#DED8D2] text-[#68615D] hover:text-[#171313]'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Episode Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredEpisodes.map((ep) => (
          <EpisodeCard key={ep.id} episode={ep} />
        ))}
      </div>
    </div>
  );
};
