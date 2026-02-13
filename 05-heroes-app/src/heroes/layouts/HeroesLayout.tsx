import { Link, Outlet } from 'react-router';

export const HeroesLayout = () => {
  return (
    <article className="bg-red-900">
      <ul>
        <li>
          <Link to="/" viewTransition>
            Home
          </Link>
        </li>
        <li>
          <Link to="/heroes/1" viewTransition>
            Hero
          </Link>
        </li>
        <li>
          <Link to="/search" viewTransition>
            Search
          </Link>
        </li>
        <li>
          <Link to="/admin" viewTransition>
            Admin
          </Link>
        </li>
      </ul>

      <section className='mt-10'>
        <Outlet />
      </section>
    </article>
  );
};
