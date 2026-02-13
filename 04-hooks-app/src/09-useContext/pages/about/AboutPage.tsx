import { UserContext } from '@/09-useContext/context/UserContext';
import { use } from 'react';
import { Link } from 'react-router';

export const AboutPage = () => {
  const { isAuthenticated, onLogout } = use(UserContext);
  return (
    <article className="page">
      <h1>About me</h1>

      <section className="flex flex-col gap-3">
        {isAuthenticated && <Link to="/profile">Perfil</Link>}

        {isAuthenticated ? (
          <button className="btn btn-danger" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </section>
    </article>
  );
};
