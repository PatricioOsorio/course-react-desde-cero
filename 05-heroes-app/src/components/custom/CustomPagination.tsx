import { ChevronLeft, MoreHorizontal, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export interface ICustomPaginationProps {
  totalPages: number;
}

const page = 1;

export const CustomPagination = ({ totalPages }: ICustomPaginationProps) => {
  const isDisabledPrevious = page === 1;
  const isDisableNext = page === totalPages;

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="sm" disabled={isDisabledPrevious}>
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      {Array.from({ length: totalPages }).map((_, idx) => {
        const index = idx + 1;
        const variant = page === index ? 'default' : 'outline';

        return (
          <Button variant={variant} size="sm" key={index}>
            {index}
          </Button>
        );
      })}
      <Button variant="ghost" size="sm" disabled>
        <MoreHorizontal className="h-4 w-4" />
      </Button>

      <Button variant="outline" size="sm" disabled={isDisableNext}>
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
