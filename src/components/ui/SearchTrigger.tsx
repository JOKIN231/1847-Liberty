import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchTriggerProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const SearchTrigger: React.FC<SearchTriggerProps> = ({
  className = '',
  variant = 'compact',
}) => {
  const navigate = useNavigate();

  const handleOpenSearch = () => {
    navigate('/search');
  };

  if (variant === 'full') {
    return (
      <button
        onClick={handleOpenSearch}
        className={`flex items-center justify-between w-full px-4 py-2.5 text-xs text-[#68615D] bg-white border border-[#DED8D2] rounded-lg hover:border-[#830000]/40 hover:text-[#171313] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#830000] ${className}`}
        aria-label="Search articles, interviews and topics"
      >
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-[#830000]" />
          <span>Search 1847 Liberty archive...</span>
        </div>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-mono text-[#68615D] bg-[#EFEAE2] rounded border border-[#DED8D2]">
          /
        </kbd>
      </button>
    );
  }

  return (
    <button
      onClick={handleOpenSearch}
      className={`p-2.5 text-[#171313] hover:text-[#830000] hover:bg-black/5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#830000] ${className}`}
      aria-label="Open search"
      title="Search (Press / to explore)"
    >
      <Search className="w-4 h-4 stroke-[2]" />
    </button>
  );
};
