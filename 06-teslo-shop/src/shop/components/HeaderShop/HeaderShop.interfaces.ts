import type { IWithRootProps } from '@/shared/interfaces/component.interfaces';

export interface IHeaderShopVM {
  cartCount?: number;
}

export interface IHeaderShopProps extends IWithRootProps<'header'>, IHeaderShopVM {}
