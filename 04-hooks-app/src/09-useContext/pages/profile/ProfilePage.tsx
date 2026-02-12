import { UserContext } from '@/09-useContext/context/UserContext';
import { use } from 'react';
import { Link } from 'react-router';

export const ProfilePage = () => {
  const { user } = use(UserContext);

  return (
    <article className="page">
      <h1>Profile</h1>

      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <button className="btn btn-danger">Logout</button>
      <Link to="/about">return to home</Link>
    </article>
  );
};
