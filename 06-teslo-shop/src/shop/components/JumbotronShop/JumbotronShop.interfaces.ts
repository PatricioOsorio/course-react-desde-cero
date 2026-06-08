import type { IWithRootProps } from '@/shared/interfaces/component.interfaces';

export interface IJumbotronShopVM {
  title: string;
  subtitle: string;
}

export interface IJumbotronShopProps extends IWithRootProps<'section'>, IJumbotronShopVM {}
