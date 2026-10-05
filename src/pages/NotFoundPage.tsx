import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-[#EFEAE2] text-[#830000] flex items-center justify-center mx-auto mb-6">
        <Compass className="w-8 h-8 stroke-[1.5]" />
      </div>

      <div className="text-xs font-bold uppercase tracking-widest text-[#F4512D] mb-2 font-sans">
        404 &middot; Page Not Located
      </div>

      <h1 className="font-editorial-serif text-3xl sm:text-4xl font-medium text-[#171313] mb-4">
        This dispatch does not exist in our index.
      </h1>

      <p className="text-sm text-[#68615D] mb-8 font-sans leading-relaxed max-w-md mx-auto">
        The link you followed may be outdated, moved, or in active development. Please return to the 1847 Liberty homepage or search the archives.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button to="/" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
          Return to Homepage
        </Button>
        <Button to="/search" variant="outline" size="md">
          Search Archives
        </Button>
      </div>
    </div>
  );
};
