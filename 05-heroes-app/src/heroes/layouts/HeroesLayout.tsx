import { Outlet } from 'react-router';

export const HeroesLayout = () => {
  return (
    <article className="page">
      <Outlet />
    </article>
  );
};
