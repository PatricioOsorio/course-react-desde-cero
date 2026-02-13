import { Outlet } from 'react-router';

export const AdminLayout = () => {
  return (
    <article className='bg-green-900'>
      <Outlet />
    </article>
  );
};
