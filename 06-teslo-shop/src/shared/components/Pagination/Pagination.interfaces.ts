import type { IWithLoading, IWithRootProps } from '@/shared/interfaces/component.interfaces';

export interface IPaginationVM {
  page: number;
  totalPages: number;
}

export interface IPaginationProps extends IWithRootProps<'nav'>, IWithLoading, IPaginationVM {
  onPageChange: (page: number) => void;
}
