import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '../ui/button';

export interface ICustomPaginationProps {
  page: number;
  totalPages: number;
  isLoading: boolean;
  onPageChange: (page: number) => void;
}

export const CustomPagination = ({
  page,
  totalPages,
  isLoading,
  onPageChange,
}: ICustomPaginationProps) => {
  if (isLoading) return 'loading pagination...';
  if (totalPages <= 1) return null;

  const isDisabledPrevious = page <= 1;
  const isDisableNext = page >= totalPages;

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        disabled={isDisabledPrevious}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      {Array.from({ length: totalPages }).map((_, idx) => {
        const index = idx + 1;
        const variant = page === index ? 'default' : 'outline';

        return (
          <Button variant={variant} size="sm" key={index} onClick={() => onPageChange(index)}>
            {index}
          </Button>
        );
      })}

      <Button
        variant="outline"
        size="sm"
        disabled={isDisableNext}
        onClick={() => onPageChange(page + 1)}
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
