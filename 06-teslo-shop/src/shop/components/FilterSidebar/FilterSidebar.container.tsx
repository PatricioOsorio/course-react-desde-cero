import { useSearchParams } from 'react-router';
import { FilterSidebar } from './FilterSidebar';

export const FilterSidebarContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSize = searchParams.get('sizes')?.split(',') ?? []; // xd,s,m,l

  const handleSizeChange = (size: string) => {
    const newSizes = currentSize.includes(size)
      ? currentSize.filter((s) => s !== size)
      : [...currentSize, size];

    searchParams.set('pages', '1');
    searchParams.set('sizes', newSizes.join(','));
    setSearchParams(searchParams);
  };

  return <FilterSidebar sizes={currentSize} onSizeChange={handleSizeChange} />;
};
