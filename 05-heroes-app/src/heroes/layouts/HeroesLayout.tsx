// import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { CustomMenu } from '@/components/custom/CustomMenu';
import { Outlet } from 'react-router';

export const HeroesLayout = () => {
  return (
    <>
      <CustomMenu />
      <Outlet />
    </>
  );
};
