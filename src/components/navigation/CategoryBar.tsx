import React from 'react';
import { categories } from '../../data/categories';
import { ContentCategory } from '../../types/content';

interface CategoryBarProps {
  selectedCategory: ContentCategory | 'all';
  onSelectCategory: (category: ContentCategory | 'all') => void;
  className?: string;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  selectedCategory,
  onSelectCategory,
  className = '',
}) => {
  return (
    <div className={`overflow-x-auto no-scrollbar py-2 border-b border-[#DED8D2] ${className}`}>
      <div className="flex items-center gap-1 min-w-max">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#830000] ${
            selectedCategory === 'all'
              ? 'bg-[#830000] text-white shadow-xs'
              : 'text-[#68615D] hover:text-[#171313] hover:bg-black/5'
          }`}
        >
          All Desks
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#830000] ${
              selectedCategory === cat.id
                ? 'bg-[#830000] text-white shadow-xs'
                : 'text-[#68615D] hover:text-[#171313] hover:bg-black/5'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};
