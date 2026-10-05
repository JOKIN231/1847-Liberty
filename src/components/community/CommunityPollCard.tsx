import React, { useState } from 'react';
import { CommunityPoll } from '../../types/content';
import { Vote, CheckCircle, BarChart3 } from 'lucide-react';

interface CommunityPollCardProps {
  poll: CommunityPoll;
  className?: string;
}

export const CommunityPollCard: React.FC<CommunityPollCardProps> = ({
  poll,
  className = '',
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [pollData, setPollData] = useState(poll);

  const handleVote = (optionId: string) => {
    if (hasVoted) return;
    setSelectedOption(optionId);
  };

  const submitVote = () => {
    if (!selectedOption || hasVoted) return;

    // Simulate voting calculation
    const updatedOptions = pollData.options.map((opt) => {
      if (opt.id === selectedOption) {
        return { ...opt, votes: opt.votes + 1 };
      }
      return opt;
    });

    const newTotal = pollData.totalVotes + 1;
    const finalOptions = updatedOptions.map((opt) => ({
      ...opt,
      percentage: Math.round((opt.votes / newTotal) * 100),
    }));

    setPollData({
      ...pollData,
      totalVotes: newTotal,
      options: finalOptions,
    });
    setHasVoted(true);
  };

  return (
    <div className={`bg-white border border-[#DED8D2] rounded-2xl p-6 sm:p-8 ${className}`}>
      {/* Category & Status */}
      <div className="flex items-center justify-between gap-2 text-xs text-[#68615D] mb-3 font-sans">
        <span className="font-bold uppercase tracking-widest text-[#830000]">
          {pollData.category}
        </span>
        <span className="text-[11px] text-[#A8A19B]">
          Closes {pollData.closingDate}
        </span>
      </div>

      <h3 className="font-editorial-serif text-xl sm:text-2xl font-medium text-[#171313] leading-snug mb-3">
        {pollData.question}
      </h3>

      <p className="text-xs text-[#68615D] mb-6 leading-relaxed font-sans">
        {pollData.description}
      </p>

      {/* Options List */}
      <div className="space-y-3 font-sans">
        {pollData.options.map((opt) => {
          const isSelected = selectedOption === opt.id;

          if (hasVoted) {
            return (
              <div
                key={opt.id}
                className="relative overflow-hidden p-3.5 rounded-lg border border-[#DED8D2] bg-[#F7F4EF]"
              >
                {/* Progress bar background */}
                <div
                  className={`absolute top-0 bottom-0 left-0 transition-all duration-700 ease-out ${
                    isSelected ? 'bg-[#830000]/15' : 'bg-black/5'
                  }`}
                  style={{ width: `${opt.percentage}%` }}
                />

                <div className="relative flex items-center justify-between text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-2 pr-4">
                    {isSelected && (
                      <CheckCircle className="w-4 h-4 text-[#830000] shrink-0" />
                    )}
                    <span className={isSelected ? 'text-[#830000] font-bold' : 'text-[#171313]'}>
                      {opt.label}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#171313] shrink-0">
                    {opt.percentage}%
                  </span>
                </div>
              </div>
            );
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleVote(opt.id)}
              className={`w-full text-left p-3.5 rounded-lg text-xs sm:text-sm font-medium transition-all border flex items-center justify-between ${
                isSelected
                  ? 'border-[#830000] bg-[#830000]/5 text-[#830000] ring-1 ring-[#830000]'
                  : 'border-[#DED8D2] bg-white hover:border-[#830000]/40 text-[#171313]'
              }`}
            >
              <span>{opt.label}</span>
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                  isSelected ? 'border-[#830000] bg-[#830000]' : 'border-[#C6BEB6]'
                }`}
              >
                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer & Actions */}
      <div className="mt-6 pt-4 border-t border-[#DED8D2] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#68615D] font-sans">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="w-4 h-4 text-[#830000]" />
          <span>{pollData.totalVotes.toLocaleString()} verified citizen votes recorded</span>
        </div>

        {!hasVoted ? (
          <button
            onClick={submitVote}
            disabled={!selectedOption}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#830000] hover:bg-[#5C0000] disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors self-start sm:self-auto"
          >
            Submit Vote
          </button>
        ) : (
          <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" /> Your response is recorded
          </span>
        )}
      </div>
    </div>
  );
};
