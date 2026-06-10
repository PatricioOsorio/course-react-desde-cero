import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from 'styleguide/button';

import { cn } from '@/shared/lib/utils';

import type { IPaginationProps } from './Pagination.interfaces';

import './Pagination.css';

export const Pagination = ({
  rootProps,
  page,
  totalPages,
  isLoading,
  onPageChange,
}: IPaginationProps) => {
  if (isLoading) {
    return (
      <nav {...rootProps} className={cn('pagination-container', rootProps?.className)}>
        <span className="pc__loading">Loading pagination...</span>
      </nav>
    );
  }

  if (totalPages <= 1) return null;

  const isDisabledPrevious = page <= 1;
  const isDisableNext = page >= totalPages;

  return (
    <nav {...rootProps} className={cn('pagination-container', rootProps?.className)}>
      <Button
        disabled={isDisabledPrevious}
        size="sm"
        variant="outline"
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft className="pc__icon" />
        Previous
      </Button>

      {Array.from({ length: totalPages }).map((_, idx) => {
        const index = idx + 1;
        const variant = page === index ? 'default' : 'outline';

        return (
          <Button key={index} size="sm" variant={variant} onClick={() => onPageChange(index)}>
            {index}
          </Button>
        );
      })}

      <Button
        disabled={isDisableNext}
        size="sm"
        variant="outline"
        onClick={() => onPageChange(page + 1)}
      >
        Next
        <ChevronRight className="pc__icon" />
      </Button>
    </nav>
  );
};
