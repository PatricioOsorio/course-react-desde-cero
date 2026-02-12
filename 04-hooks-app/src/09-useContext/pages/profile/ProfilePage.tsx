import { Link } from 'react-router';

export const ProfilePage = () => {
  return (
    <article className="page">
      <h1>Profile</h1>

      <pre>{JSON.stringify({}, null, 2)}</pre>

      <button className='btn btn-danger'>Logout</button>
      <Link to="/about">return to home</Link>
    </article>
  );
};
