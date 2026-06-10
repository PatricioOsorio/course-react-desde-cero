import { useSearchParams } from 'react-router';
import { ProductsShop } from './ProductsShop';
import type { IViewMode } from './ProductsShop.interfaces';
import { useState } from 'react';

export const ProductShopContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const viewMode = (searchParams.get('view') || 'grid') as IViewMode;

  const handleViewModeChange = (newViewMode: IViewMode) => {
    searchParams.set('view', newViewMode);
    setSearchParams(searchParams);
    // setSearchParams({ view: newViewMode });
  };

  const handleToggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <ProductsShop
      products={[]}
      showFilters={showFilters}
      viewMode={viewMode}
      onToggleFilters={handleToggleFilters}
      onViewModeChange={handleViewModeChange}
    />
  );
};
