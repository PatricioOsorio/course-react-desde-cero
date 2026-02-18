import { createBrowserRouter, Navigate } from 'react-router';
import { lazy } from 'react';

import { AdminLayout } from '@/admin/layouts/AdminLayout';
import { HeroesLayout } from '@/heroes/layouts/HeroesLayout';

const HomePage = lazy(() => import('@/heroes/pages/home/HomePage'));
const HeroPage = lazy(() => import('@/heroes/pages/hero/HeroPage'));
const SearchPage = lazy(() => import('@/heroes/search/SearchPage'));

const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));

export const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <HeroesLayout />,
      handle: { crumb: 'Home' },
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'heroes/:idSlug',
          element: <HeroPage />,
          handle: { crumb: 'Hero' },
        },
        {
          path: 'search',
          element: <SearchPage />,
          handle: { crumb: 'Search' },
        },
      ],
    },

    {
      path: 'admin',
      element: <AdminLayout />,
      handle: { crumb: 'Admin' },
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
