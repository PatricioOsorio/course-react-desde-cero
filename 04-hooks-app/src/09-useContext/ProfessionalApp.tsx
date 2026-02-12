import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';

export const ProfessionalApp = () => {
  return (
    <article className="page">
      <RouterProvider router={appRouter} />
      <h1>Professional App</h1>
    </article>
  );
};
