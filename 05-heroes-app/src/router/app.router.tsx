import { createBrowserRouter, Navigate } from 'react-router';

import { AdminLayout } from '@/admin/layouts/AdminLayout';
import { AdminPage } from '@/admin/pages/AdminPage';
import { HeroesLayout } from '@/heroes/layouts/HeroesLayout';
import { HeroPage } from '@/heroes/pages/HeroPage';
import { HomePage } from '@/heroes/home/HomePage';
import { SearchPage } from '@/heroes/search/SearchPage';

export const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <HeroesLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'heroes/1',
          element: <HeroPage />,
        },
        {
          path: 'search',
          element: <SearchPage />,
        },
      ],
    },

    {
      path: 'admin',
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <AdminPage />,
        },
      ],
    },

    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);
