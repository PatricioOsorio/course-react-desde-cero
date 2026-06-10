import { Filter, Grid, List } from 'lucide-react';
import { Button } from 'styleguide/button';
import type { IProductsShopProps } from './ProductsShop.interfaces';
import { products as ProductsMock } from '@/mocks/products.mock';
import { ProductCard } from '../ProductCard';
import { FilterSidebarContainer } from '../FilterSidebar/FilterSidebar.container';

export const ProductsShop = ({
  products,
  viewMode,
  onViewModeChange,
  showFilters,
  onToggleFilters,
}: IProductsShopProps) => {
  return (
    <section className="px-4 py-12 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl font-light">Productos</h2>
            <span className="text-muted-foreground">({products.length} productos)</span>
          </div>

          <div className="flex items-center space-x-2">
            <Button className="lg:hidden" size="sm" variant="outline" onClick={onToggleFilters}>
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>

            <div className="hidden rounded-md border md:flex">
              <Button
                className="rounded-r-none"
                size="sm"
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                onClick={() => onViewModeChange('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                className="rounded-l-none"
                size="sm"
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                onClick={() => onViewModeChange('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block">
            <FilterSidebarContainer />
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="bg-background fixed inset-0 z-50 p-4 lg:hidden">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Filtros</h3>
                <Button size="sm" variant="ghost" onClick={() => onToggleFilters()}>
                  Cerrar
                </Button>
              </div>
              <FilterSidebarContainer />
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
                  : 'space-y-4'
              }
            >
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
