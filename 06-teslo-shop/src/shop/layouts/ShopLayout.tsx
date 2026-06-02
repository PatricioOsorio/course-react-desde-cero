import { NavLink, Outlet } from 'react-router';

export const ShopLayout = () => {
  return (
    <div>
      ShopLayout
      {/* Nav */}
      <NavLink to={'/'}>
        <h2>Home</h2>
      </NavLink>
      <NavLink to={'/product/1'}>
        <h2>Product</h2>
      </NavLink>
      <NavLink to={'gender/1'}>
        <h2>Gender</h2>
      </NavLink>
      <Outlet />
    </div>
  );
};
