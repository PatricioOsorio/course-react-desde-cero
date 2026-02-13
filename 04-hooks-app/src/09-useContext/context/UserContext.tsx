import { createContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import { users, type IUser } from '../data/use-mock.data';

export type TAuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

export interface IUserContextProps {
  authStatus: TAuthStatus;
  user: IUser | null;
  onLogin: (id: number) => boolean;
  onLogout: () => void;
}

// ! Context
export const UserContext = createContext({} as IUserContextProps);

// ! HOC
export type IUSerContextProviders = PropsWithChildren;

const LS_USER_ID = 'userId';
export const UserContextProvider = ({ children }: IUSerContextProviders) => {
  const [authStatus, setAuthStatus] = useState<TAuthStatus>('checking');
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const userIdLocal = localStorage.getItem(LS_USER_ID);

    if (!userIdLocal) return handleLogout();

    const id = JSON.parse(userIdLocal);
    handleLogin(id);
  }, []);

  const handleLogin = (id: number) => {
    const user = users.find((user) => user.id === id);

    if (!user) {
      console.log('user not found');
      setUser(null);
      setAuthStatus('not-authenticated');
      return false;
    }

    setUser(user);
    setAuthStatus('authenticated');
    localStorage.setItem(LS_USER_ID, id.toString());
    return true;
  };

  const handleLogout = () => {
    setAuthStatus('not-authenticated');
    setUser(null);
    localStorage.removeItem(LS_USER_ID);
  };

  const value = useMemo(
    () => ({
      authStatus,
      user,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }),
    [authStatus, user]
  );

  return <UserContext value={value}>{children}</UserContext>;
};
