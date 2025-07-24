import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuthContext } from '@/app/providers/AuthProvider';
import LoadingGate from '@/shared/components/loading/LoadingGate';
import UnAuthorizedPage from '@/shared/components/unauthorized/UnAuthorizedPage';

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, isAuthenticated, loading } = useAuthContext();

  if (loading) {
    // Show a loading state while the authentication status is being determined
    return <LoadingGate></LoadingGate>;
  }

  if (!user || isAuthenticated === false) {
    return (
      <LoadingGate>
        <UnAuthorizedPage />
      </LoadingGate>
    );
  }

  return (
    <>
      <LoadingGate>{children}</LoadingGate>
    </>
  );
}
