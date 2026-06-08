import { Menu, Search, ShoppingBag } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { cn } from '@/shared/lib/utils';

import type { IHeaderShopProps } from './HeaderShop.interfaces';

import './HeaderShop.css';

export const HeaderShop = ({ rootProps, cartCount = 0 }: IHeaderShopProps) => {
  return (
    <header {...rootProps} className={cn('header-shop-container', rootProps?.className)}>
      <div className="hsc__inner">
        <div className="hsc__toolbar">
          <div className="hsc__brand">
            <Button className="md:hidden" size="icon" variant="ghost">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="hsc__logo">TESLA STYLE</h1>
          </div>

          <nav className="hsc__nav">
            <a className="hsc__nav-link" href="#">
              Camisetas
            </a>
            <a className="hsc__nav-link" href="#">
              Sudaderas
            </a>
            <a className="hsc__nav-link" href="#">
              Chaquetas
            </a>
            <a className="hsc__nav-link" href="#">
              Accesorios
            </a>
          </nav>

          <div className="hsc__actions">
            <div className="hsc__search-desktop">
              <div className="hsc__search-input-wrapper">
                <Search className="hsc__search-icon" />
                <Input className="h-9 w-64 pl-9" placeholder="Buscar productos..." />
              </div>
            </div>

            <Button className="md:hidden" size="icon" variant="ghost">
              <Search className="h-5 w-5" />
            </Button>

            <Button className="relative" size="icon" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && <span className="hsc__cart-badge">{cartCount}</span>}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
