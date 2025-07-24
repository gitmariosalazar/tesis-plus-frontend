import { useAuthContext } from '@/app/providers/AuthProvider';

export function DashboardPage() {
  const { user, isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <div>Please log in to access the dashboard.</div>;
  }
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {user && (
        <div>
          <p>User ID: {user.idUser}</p>
          <p>Email: {user.userEmail}</p>
          <p>
            Name: {user.firstName} {user.lastName}
          </p>
        </div>
      )}
    </div>
  );
}
