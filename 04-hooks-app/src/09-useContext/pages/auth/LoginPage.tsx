import { Input } from '@/components/ui/input';
import { Link } from 'react-router';

export const LoginPage = () => {
  return (
    <article className="page">
      <h1>Login</h1>

      <form action="" className='flex flex-col align-center gap-4'>
        <Input type="number" placeholder="User id" />
        <button type="submit">Login</button>
      </form>

      <Link to="/about">return to home</Link>
    </article>
  );
};
