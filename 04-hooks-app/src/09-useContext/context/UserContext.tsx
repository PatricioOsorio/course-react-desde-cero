import { type PropsWithChildren } from 'react';

export type IUserContextProps = PropsWithChildren;

export const UserContextProvider = ({ children }: IUserContextProps) => {
  return <div>{children}</div>;
};
