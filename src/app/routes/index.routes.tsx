import { RouteObject } from 'react-router-dom';
import LoginPage from '@/features/auth/presentation/pages/LoginPage';
import { PublicRoute } from './public/PublicRoute';
import Home from '@/features/home/presentation/pages/Home';
import SignUpPage from '@/features/signup/presentation/pages/SignUpPage';
import DocumentsPage from '@/features/docs/presentation/pages/DocumentsPage';
import UnAuthorizedPage from '@/shared/components/unauthorized/UnAuthorizedPage';
import LayoutPage from '@/features/layout/presentation/pages/LayoutPage';
import { ProtectedRoute } from './private/ProtectedRoute';
import { NotFoundPage } from '@/shared/components/not-found/presentation/pages/NotFoundPage';

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        <SignUpPage />
      </PublicRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <LayoutPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/',
    element: (
      <PublicRoute>
        <Home />
      </PublicRoute>
    ),
  },
  {
    path: '*',
    element: (
      <PublicRoute>
        <NotFoundPage />
      </PublicRoute>
    ),
  },
  {
    path: '/documents',
    element: (
      <ProtectedRoute>
        <DocumentsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/unauthorized',
    element: (
      <PublicRoute>
        <UnAuthorizedPage />
      </PublicRoute>
    ),
  },
];
