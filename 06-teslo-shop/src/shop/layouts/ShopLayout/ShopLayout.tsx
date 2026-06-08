import { Outlet } from 'react-router';
import { HeaderShop } from '@/shop/components/HeaderShop';
import { FooterShop } from '@/shop/components/FooterShop';

import './ShopLayout.css';

export const ShopLayout = () => {
  return (
    <article className="shop-layout">
      <HeaderShop />
      <Outlet />
      <FooterShop />
    </article>
  );
};
