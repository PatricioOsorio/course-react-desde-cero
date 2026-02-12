import { createContext, useMemo, useState, type PropsWithChildren } from 'react';
import type { IUser } from '../data/use-mock.data';

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
    console.log(`login id:${id}`);
    return true;
  };

  const handleLogout = () => {
    console.log('logout');
  };

  const value = useMemo(
    () => ({
      authStatus,
      user,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }),
    []
  );

  return <UserContext value={value}>{children}</UserContext>;
};
