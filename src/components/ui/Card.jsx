import React from 'react';
import { cn } from '../../utils/cn';

export const Card = ({ children, className, hover = false }) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700',
        hover && 'hover:shadow-lg hover:scale-105 transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return (
    <div className={cn('p-6 pb-4', className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={cn('px-6 pb-6', className)}>
      {children}
    </div>
  );
};
