import React from 'react';

interface EditorialGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const EditorialGrid: React.FC<EditorialGridProps> = ({
  children,
  columns = 3,
  className = '',
}) => {
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${columnClasses} gap-6 sm:gap-8 ${className}`}>
      {children}
    </div>
  );
};
