import { createBrowserRouter, Navigate } from 'react-router';
import { lazy } from 'react';

import { AdminLayout } from '@/admin/layouts/AdminLayout';
import { HeroesLayout } from '@/heroes/layouts/HeroesLayout';

const HomePage = lazy(() => import('@/heroes/home/HomePage'));
const HeroPage = lazy(() => import('@/heroes/pages/HeroPage'));
const SearchPage = lazy(() => import('@/heroes/search/SearchPage'));

const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));

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
