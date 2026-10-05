import React, { useState } from 'react';
import { SectionHeader } from '../components/editorial/SectionHeader';
import { Headphones, Play, Pause, Radio, Volume2, Info, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ListenPage: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const audioDispatches = [
    {
      id: 'audio-01',
      title: 'Dispatch #14: Monrovia Coastal Infrastructure & The Blue Economy',
      series: 'The Liberty Audio Dispatch',
      narrator: 'Thomas M. Sarko & Editorial Desk',
      duration: '22 min',
      date: 'October 4, 2026',
      description: 'A 20-minute audio briefing examining port concession reviews, maritime fishery protection, and West African coastal transit.',
    },
    {
      id: 'audio-02',
      title: 'Dispatch #13: Constitutional History — The 1847 Convention Revisited',
      series: 'Historical Inquiries',
      narrator: 'Historical Research Group',
      duration: '28 min',
      date: 'September 27, 2026',
      description: 'Revisiting the original debates of the 1847 Constitutional Convention in Monrovia and their modern civic implications.',
    },
    {
      id: 'audio-03',
      title: 'Dispatch #12: Diaspora Financial Instruments — Beyond Remittances',
      series: 'Economic Perspectives',
      narrator: 'Varney K. Sherman Jr.',
      duration: '19 min',
      date: 'September 20, 2026',
      description: 'Exploring municipal bond structures and sovereign wealth vehicles tailored for diaspora investment.',
    },
  ];

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SectionHeader
        kicker="Audio & Podcasts"
        title="1847 Liberty Audio Dispatches"
        description="Focused auditory analysis, interviews, and historical commentary on the go."
      />

      {/* Audio Platform Note */}
      <div className="mb-10 p-4 bg-white border border-[#DED8D2] rounded-xl flex items-center justify-between gap-4 text-xs font-sans">
        <div className="flex items-center gap-2.5 text-[#171313]">
          <Radio className="w-4 h-4 text-[#830000] shrink-0" />
          <span>Full podcast syndication across Apple Podcasts, Spotify, and Pocket Casts will connect in Milestone 2.</span>
        </div>
        <span className="hidden sm:inline-block text-[#68615D]">
          RSS Feed Preparation Active
        </span>
      </div>

      {/* Dispatches List */}
      <div className="space-y-4">
        {audioDispatches.map((dispatch) => {
          const isPlaying = playingId === dispatch.id;

          return (
            <div
              key={dispatch.id}
              className={`p-6 bg-white border rounded-xl transition-all ${
                isPlaying ? 'border-[#830000] shadow-sm' : 'border-[#DED8D2] hover:border-[#830000]/40'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Play Button */}
                  <button
                    onClick={() => togglePlay(dispatch.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                      isPlaying
                        ? 'bg-[#830000] text-white'
                        : 'bg-[#EFEAE2] text-[#830000] hover:bg-[#830000] hover:text-white'
                    }`}
                    aria-label={isPlaying ? `Pause ${dispatch.title}` : `Play ${dispatch.title}`}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    )}
                  </button>

                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#68615D] mb-1 font-sans">
                      <span className="font-semibold uppercase tracking-wider text-[#F4512D]">
                        {dispatch.series}
                      </span>
                      <span>·</span>
                      <span>{dispatch.duration}</span>
                      <span>·</span>
                      <span>{dispatch.date}</span>
                    </div>

                    <h3 className="font-editorial-serif text-lg sm:text-xl font-medium text-[#171313]">
                      {dispatch.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#68615D] mt-1.5 leading-relaxed font-sans max-w-2xl">
                      {dispatch.description}
                    </p>

                    <div className="text-xs text-[#171313] mt-2 font-sans font-medium">
                      Voice: <span className="text-[#68615D]">{dispatch.narrator}</span>
                    </div>
                  </div>
                </div>

                {isPlaying && (
                  <div className="sm:self-center px-4 py-2 bg-[#830000]/10 text-[#830000] rounded-lg text-xs font-semibold flex items-center gap-2 shrink-0 animate-pulse">
                    <Volume2 className="w-4 h-4" />
                    <span>Now Playing Dispatch</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
