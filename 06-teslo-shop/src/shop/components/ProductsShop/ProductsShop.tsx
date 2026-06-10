import { Filter, Grid, List } from 'lucide-react';
import { Button } from 'styleguide/button';

import { cn } from '@/shared/lib/utils';
import { products as ProductsMock } from '@/mocks/products.mock';

import type { IProductsShopProps } from './ProductsShop.interfaces';
import { ProductCard } from '../ProductCard';
import { FilterSidebarContainer } from '../FilterSidebar/FilterSidebar.container';

import './ProductsShop.css';

export const ProductsShop = ({
  products,
  viewMode,
  onViewModeChange,
  showFilters,
  onToggleFilters,
  rootProps,
}: IProductsShopProps) => {
  return (
    <section {...rootProps} className={cn('products-shop-container', rootProps?.className)}>
      <div className="psc__wrapper">
        <div className="psc__header">
          <div className="psc__header-title-box">
            <h2 className="psc__title">Productos</h2>
            <span className="psc__count">({products.length} productos)</span>
          </div>

          <div className="psc__header-actions">
            <Button className="psc__btn-mobile-filters" size="sm" variant="outline" onClick={onToggleFilters}>
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>

            <div className="psc__view-modes">
              <Button
                className="psc__btn-grid"
                size="sm"
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                onClick={() => onViewModeChange('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                className="psc__btn-list"
                size="sm"
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                onClick={() => onViewModeChange('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="psc__content-layout">
          {/* Filters Sidebar - Desktop */}
          <div className="psc__sidebar-desktop">
            <FilterSidebarContainer />
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="psc__sidebar-mobile">
              <div className="psc__mobile-header">
                <h3 className="psc__mobile-title">Filtros</h3>
                <Button size="sm" variant="ghost" onClick={() => onToggleFilters()}>
                  Cerrar
                </Button>
              </div>
              <FilterSidebarContainer />
            </div>
          )}

          {/* Products Grid */}
          <div className="psc__main-content">
            <div className={viewMode === 'grid' ? 'psc__grid' : 'psc__list'}>
              {ProductsMock.map((product) => (
                <ProductCard
                  key={product.id}
                  category={product.category}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
