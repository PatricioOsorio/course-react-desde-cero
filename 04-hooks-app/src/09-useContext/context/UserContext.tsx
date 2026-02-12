import { createContext, useMemo, useState, type PropsWithChildren } from 'react';
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

export const UserContextProvider = ({ children }: IUSerContextProviders) => {
  const [authStatus, setAuthStatus] = useState<TAuthStatus>('checking');
  const [user, setUser] = useState<IUser | null>(null);

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
    return true;
  };

  const handleLogout = () => {
    setAuthStatus('not-authenticated');
    setUser(null);
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
