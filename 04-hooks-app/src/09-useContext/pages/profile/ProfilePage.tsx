import { UserContext } from '@/09-useContext/context/UserContext';
import { use } from 'react';
import { Link } from 'react-router';

export const ProfilePage = () => {
  const { user, onLogout } = use(UserContext);

  return (
    <article className="page">
      <h1>Profile</h1>

      <pre className="w-6/12 overflow-x-auto">
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <button className="btn btn-danger" onClick={onLogout}>
        Logout
      </button>
      <Link to="/about">return to home</Link>
    </article>
  );
};
