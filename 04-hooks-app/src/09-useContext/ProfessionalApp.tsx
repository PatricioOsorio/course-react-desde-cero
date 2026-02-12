import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';

export const ProfessionalApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
