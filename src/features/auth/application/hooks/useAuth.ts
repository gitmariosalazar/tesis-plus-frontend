import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCredentials } from '../../domain/types/AuthCredentials';
import { AuthService } from '../services/AuthService';
import { MessageToastCustom } from '@/shared/components/toast/CustomMessageToast';
import { useAuthContext } from '@/app/providers/AuthProvider';

export function useAuth() {
  const { setUser, checkAuthentication } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const authService = new AuthService();

  const login = async (credentials: AuthCredentials) => {
    setLoading(true);
    try {
      const response = await authService.login(credentials);
      const { user, token, createdAt, updatedAt } = response.data;
      await checkAuthentication(); // Check authentication immediately after login
      // Save user in the context
      setUser({
        idUser: user.idUser,
        userEmail: user.userEmail,
        firstName: user.firstName,
        lastName: user.lastName,
        userActive: user.userActive,
        userType: user.userType!,
        createdAt: createdAt ? new Date(createdAt) : undefined,
        updatedAt: updatedAt ? new Date(updatedAt) : undefined,
      });

      MessageToastCustom(
        'success',
        `Welcome ${user.firstName} ${user.lastName}`,
        response.message[0],
        'top-right'
      );

      setError(null);
      navigate('/dashboard');
      return response;
    } catch (err: any) {
      const message =
        err?.response?.data?.message || err?.message || 'Unknown error';
      setError(message);
      MessageToastCustom('error', 'Login Failed!', message, 'top-right');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
