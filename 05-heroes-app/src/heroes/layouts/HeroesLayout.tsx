import { CustomMenu } from '@/components/custom/CustomMenu';
import { Outlet } from 'react-router';

export const HeroesLayout = () => {
  return (
    <article className="page">
      <CustomMenu />
      <Outlet />
    </article>
  );
};
