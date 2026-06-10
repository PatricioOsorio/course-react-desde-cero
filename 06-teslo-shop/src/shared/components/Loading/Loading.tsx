import { cn } from '@/shared/lib/utils';
import { Spinner } from 'styleguide/spinner';

import type { ILoadingProps } from './Loading.interfaces';

import './Loading.css';

export const Loading = ({ rootProps, spinnerProps }: ILoadingProps) => {
  return (
    <section {...rootProps} className={cn('loading-container', rootProps?.className)}>
      <Spinner {...spinnerProps} className={cn('lc__spinner', spinnerProps?.className)} />
    </section>
  );
};
