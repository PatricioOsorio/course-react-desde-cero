import type { IWithRootProps } from '@/shared/interfaces/component.interfaces';
import type { Spinner } from '../ui/spinner';

export interface ILoadingUI {
  spinnerProps?: React.ComponentProps<typeof Spinner>;
}

export interface ILoadingProps extends IWithRootProps<'section'>, ILoadingUI {}
