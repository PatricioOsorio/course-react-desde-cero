import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';
import { UserContextProvider } from './context/UserContext';

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <RouterProvider router={appRouter} />
    </UserContextProvider>
  );
};
