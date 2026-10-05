import React from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionTo?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No stories currently found',
  description = 'There are no published pieces matching your selected filter at this moment.',
  actionText = 'View all stories',
  actionTo = '/read',
  onAction,
  icon,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-12 text-center bg-white/60 border border-[#DED8D2] rounded-xl max-w-xl mx-auto my-6 ${className}`}>
      <div className="w-12 h-12 rounded-full bg-[#EFEAE2] flex items-center justify-center text-[#830000] mb-4">
        {icon || <Newspaper className="w-6 h-6 stroke-[1.5]" />}
      </div>
      <h3 className="font-editorial-serif text-2xl text-[#171313] font-medium tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#68615D] max-w-md mb-6 leading-relaxed">
        {description}
      </p>

      {actionTo ? (
        <Link
          to={actionTo}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#830000] hover:text-[#5C0000] underline-offset-4 hover:underline"
        >
          {actionText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      ) : onAction ? (
        <button
          onClick={onAction}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#830000] hover:text-[#5C0000] underline-offset-4 hover:underline"
        >
          {actionText}
          <ArrowRight className="w-4 h-4" />
        </button>
      ) : null}
    </div>
  );
};
