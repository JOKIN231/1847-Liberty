import React from 'react';

interface LoadingStateProps {
  message?: string;
  subtext?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading editorial content...',
  subtext = 'Connecting to 1847 Liberty archives',
  className = '',
}) => {
  return (
    <div 
      role="status" 
      aria-live="polite"
      className={`flex flex-col items-center justify-center p-12 text-center bg-white/50 border border-[#DED8D2] rounded-xl ${className}`}
    >
      <div className="relative w-10 h-10 mb-4">
        <div className="absolute inset-0 border-2 border-[#DED8D2] rounded-full" />
        <div className="absolute inset-0 border-2 border-[#830000] border-t-transparent rounded-full animate-spin" />
        <div className="absolute inset-3 bg-[#F4512D] rounded-full opacity-70 animate-pulse" />
      </div>
      <p className="font-editorial-serif text-lg text-[#171313] font-medium tracking-tight">
        {message}
      </p>
      {subtext && (
        <p className="text-xs text-[#68615D] mt-1 font-sans">
          {subtext}
        </p>
      )}
      <span className="sr-only">Loading</span>
    </div>
  );
};
