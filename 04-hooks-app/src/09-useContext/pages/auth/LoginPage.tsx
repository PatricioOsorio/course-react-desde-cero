import { UserContext } from '@/09-useContext/context/UserContext';
import { Input } from '@/components/ui/input';
import { useContext, useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';

export const LoginPage = () => {
  const { onLogin } = useContext(UserContext);
  const [userId, setUserId] = useState('');

  const navigation = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!userId) return;

    const result = onLogin(+userId);

    console.log({ result });

    if (!result) {
      toast.error('User not found');
      return;
    }

    navigation('/profile');
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e?.target?.value);
  };

  return (
    <article className="page">
      <h1>Login</h1>

      <form action="" className="flex flex-col align-center gap-4" onSubmit={handleSubmit}>
        <Input type="number" placeholder="User id" value={userId} onChange={handleChangeInput} />
        <button type="submit">Login</button>
      </form>

      <Link to="/about">return to home</Link>
    </article>
  );
};
