import { useMemo } from 'react';
import { useSearchParams } from 'react-router';

import { Pagination } from '@/shared/components/Pagination';
import { clamp } from '@/shared/utils/utilities';
import { JumbotronShop } from '@/shop/components/JumbotronShop';
import { ProductShopContainer } from '@/shop/components/ProductsShop';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ tab: 'all', page: '1', limit: '6' });

  const pageRaw = 1; // This should come from searchParams, but for now it's hardcoded for demonstration
  const totalPages = 5; // This should come from your data fetching logic

  const page = useMemo(() => {
    if (totalPages <= 0) return 1;
    return clamp(pageRaw, 1, totalPages);
  }, [pageRaw, totalPages]);

  const handlePageChange = (nextPage: number) => {
    if (!totalPages) return;

    const safe = clamp(Number.isFinite(nextPage) ? nextPage : 1, 1, totalPages);

    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('page', String(safe));
      return next;
    });
  };

  return (
    <>
      <JumbotronShop
        subtitle="Discover our exclusive collection of Tesla-inspired apparel and accessories. Shop now and elevate your style with the spirit of innovation and elegance."
        title="All you need is style"
      />

      <ProductShopContainer />

      <Pagination
        isLoading={false}
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
