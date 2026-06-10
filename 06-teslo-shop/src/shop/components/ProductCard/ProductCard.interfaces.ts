import type { IWithRootProps } from '@/shared/interfaces/component.interfaces';

export interface IProductCardVM {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface IProductCardProps extends IWithRootProps<'article'>, IProductCardVM {
  onAddToCart?: (id: string) => void;
}
