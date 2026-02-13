import { use, type JSX } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router';

export interface IPrivateRouteProps {
  element: JSX.Element;
}

export const PrivateRoute = ({ element }: IPrivateRouteProps) => {
  const { authStatus } = use(UserContext);

  if (authStatus === 'checking') {
    return <div>checking...</div>;
  }

  if (authStatus === 'not-authenticated') {
    return <Navigate to="/login" replace />;
  }

  return element;
};
