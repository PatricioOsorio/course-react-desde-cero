import type { IWithRootProps } from '@/shared/interfaces/component.interfaces';
import type { Spinner } from '../ui/spinner';
import type { ComponentProps } from 'react';

export interface ILoadingVM {
  spinnerProps?: ComponentProps<typeof Spinner>;
}

export interface ILoadingProps extends IWithRootProps<'section'>, ILoadingVM {}
