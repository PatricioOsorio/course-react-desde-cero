import { createBrowserRouter, Navigate } from 'react-router';

// Shop
const ShopLayout = async () => (await import('@/shop/layouts/ShopLayout')).default;
const HomePage = async () => (await import('@shop/pages/Home')).default;
const ProductPage = async () => (await import('@shop/pages/Product')).default;
const GenderPage = async () => (await import('@shop/pages/Gender')).default;

// Auth
const AuthLayout = async () => (await import('@auth/layouts')).default;
const LoginPage = async () => (await import('@auth/pages/Login')).default;
const RegisterPage = async () => (await import('@auth/pages/Register')).default;

// Admin
const AdminLayout = async () => (await import('@admin/layouts')).default;
const Dashboard = async () => (await import('@admin/pages/Dashboard')).default;
const AdminProductPage = async () => (await import('@admin/pages/Product')).default;
const ProductsPage = async () => (await import('@admin/pages/Products')).default;

export const appRouter = createBrowserRouter([
  {
    path: '/',
    lazy: {
      Component: ShopLayout,
    },
    children: [
      {
        index: true,
        lazy: {
          Component: HomePage,
          // Si la página tiene loader, también se puede lazy:
          // loader: async () => (await import('@shop/pages/Home/loader')).loader,
        },
      },
      {
        path: 'product/:idSlug',
        lazy: {
          Component: ProductPage,
        },
      },
      {
        path: 'gender/:gender',
        lazy: {
          Component: GenderPage,
        },
      },
    ],
  },

  // auth
  {
    path: '/auth',
    lazy: {
      Component: AuthLayout,
    },
    children: [
      {
        index: true,
        element: <Navigate replace to="/auth/login" />,
      },
      { path: 'login', lazy: { Component: LoginPage } },
      {
        path: 'register',
        lazy: { Component: RegisterPage },
      },
    ],
  },

  // admin
  {
    path: '/admin',
    lazy: {
      Component: AdminLayout,
    },
    children: [
      {
        index: true,
        lazy: {
          Component: Dashboard,
        },
      },
      {
        path: 'product/:id',
        lazy: {
          Component: AdminProductPage,
        },
      },
      {
        path: 'products',
        lazy: {
          Component: ProductsPage,
        },
      },
    ],
  },
  {
    path: '*',
    element: <Navigate replace to="/" />,
  },
]);
