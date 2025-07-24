import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuthContext } from '@/app/providers/AuthProvider';
import LoadingGate from '@/shared/components/loading/LoadingGate';

interface PublicRouteProps {
  children: ReactNode;
}

// Define the restricted routes that should redirect to the dashboard if authenticated
const restrictedRoutes = ['/login', '/register', '/'];

export function PublicRoute({ children }: PublicRouteProps) {
  const { user, isAuthenticated, loading } = useAuthContext();
  const location = useLocation();

  if (loading) return <LoadingGate></LoadingGate>; // or spinner

  const isUserAuthenticated = user && isAuthenticated;
  const isRestricted = restrictedRoutes.includes(location.pathname);

  // ✅ Just render the children if not authenticated
  if (isUserAuthenticated && isRestricted) {
    return <Navigate to="/dashboard" replace />;
  }

  // ✅ Permit access to public routes if not authenticated
  return (
    <>
      <LoadingGate>{children}</LoadingGate>
    </>
  );
}
