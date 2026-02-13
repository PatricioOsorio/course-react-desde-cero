import { Outlet } from 'react-router';

export const HeroesLayout = () => {
  return (
    <article className='bg-red-900'>
      <Outlet />
    </article>
  );
};
