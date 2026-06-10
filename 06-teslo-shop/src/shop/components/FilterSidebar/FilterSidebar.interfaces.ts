import type { IWithRootProps } from '@/shared/interfaces/component.interfaces';

export interface IFilterSidebarVM {
  sizes: string[];
}

export interface IFilterSidebarProps extends IWithRootProps<'div'>, IFilterSidebarVM {
  onSizeChange: (size: string) => void;
}
