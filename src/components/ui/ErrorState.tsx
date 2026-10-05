import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Unable to display content',
  message = "We couldn't load this content right now. Please check your connection or try again.",
  onRetry,
  className = '',
}) => {
  return (
    <div 
      role="alert"
      className={`flex flex-col items-center justify-center p-8 text-center bg-white border border-[#DED8D2] rounded-xl max-w-lg mx-auto my-6 ${className}`}
    >
      <div className="w-11 h-11 rounded-full bg-rose-50 flex items-center justify-center text-[#830000] mb-3">
        <AlertCircle className="w-5 h-5 stroke-[1.75]" />
      </div>
      <h3 className="font-editorial-serif text-xl font-medium text-[#171313] mb-1.5">
        {title}
      </h3>
      <p className="text-sm text-[#68615D] mb-5 leading-relaxed max-w-sm">
        {message}
      </p>

      {onRetry && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onRetry}
          icon={<RefreshCw className="w-3.5 h-3.5" />}
        >
          Try Again
        </Button>
      )}
    </div>
  );
};
