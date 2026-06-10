import type { IProduct } from '@/mocks/products.mock';
import type { IWithRootProps } from '@/shared/interfaces/component.interfaces';

export type IViewMode = 'grid' | 'list';

export interface IProductsShopVM {
  products: IProduct[];
}

export interface IProductsShopProps extends IWithRootProps<'section'>, IProductsShopVM {
  viewMode: IViewMode;
  onViewModeChange: (viewMode: IViewMode) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
}
