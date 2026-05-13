import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ShopLayout } from './shop/layouts/ShopLayout';
import { GenderPage } from './shop/pages/gender/GenderPage';
import { ProductPage } from './shop/pages/product/ProductPage';
import { ProductPage as AdminProductPage } from './admin/pages/product/ProductPage';
import { HomePage } from './shop/pages/home/HomePage';
import { DashboardPage } from './admin/pages/dashboard/DashboardPage';
import { LoginPage } from './auth/pages/login/LoginPage';
import { RegisterPage } from './auth/pages/register/RegisterPage';
import { ProductsPage } from './admin/pages/products/ProductsPage';

// Carga perezosa para estos módulos porque el principal es Shop
// eslint-disable-next-line react-refresh/only-export-components
const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'));
// eslint-disable-next-line react-refresh/only-export-components
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));

export const appRouter = createBrowserRouter([
  // Main routes
  {
    path: '/',
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product/:idSlug',
        element: <ProductPage />,
      },
      {
        path: 'gender/:gender',
        element: <GenderPage />,
      },
    ],
  },

  // AuthRoutes
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      // cuando el usuario entre a AuthLayout, siempre redirecciona a login
      {
        index: true,
        element: <Navigate to='/auth/login' />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },

  // AdminRoutes
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'product/:id',
        element: <AdminProductPage />,
      },
    ],
  },

  // cualquier ruta no registrada, redirige a shopLayout
  {
    path: '*',
    element: <Navigate to='/' />
  }
]);
