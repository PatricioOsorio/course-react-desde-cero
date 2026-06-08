import { cn } from '@/shared/lib/utils';
import { HugeiconsIcon } from '@hugeicons/react';
import { Loading03Icon } from '@hugeicons/core-free-icons';

export const Spinner = ({ className, ...props }: React.ComponentProps<'svg'>) => {
  return (
    <HugeiconsIcon
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      icon={Loading03Icon}
      role="status"
      strokeWidth={2}
      {...props}
    />
  );
};
