import { cn } from '@/shared/lib/utils';

import type { IJumbotronShopProps } from './JumbotronShop.interfaces';

import './JumbotronShop.css';

export const JumbotronShop = ({ rootProps, title, subtitle }: IJumbotronShopProps) => {
  return (
    <section {...rootProps} className={cn('jumbotron-shop-container', rootProps?.className)}>
      <div className="jsc__inner">
        <h1 className="jsc__title">{title}</h1>
        <p className="jsc__subtitle">{subtitle}</p>
      </div>
    </section>
  );
};
