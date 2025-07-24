import { useAuthContext } from '@/app/providers/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoutService } from '../services/LogoutService';
import { MessageToastCustom } from '@/shared/components/toast/CustomMessageToast';

export function useLogout() {
  const {
    setUser,
    setExpiredToken,
    setExpiredRefreshToken,
    setIsAuthenticated,
    refreshUser,
    checkAuthentication,
  } = useAuthContext();
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [errorLogout, setErrorLogout] = useState<string | null>(null);
  const navigate = useNavigate();
  const authService = new LogoutService();

  const SignOut = async () => {
    setLoadingLogout(true);
    try {
      const response = await authService.logout();

      console.log(response);

      setUser(null);
      setExpiredToken('disabled');
      setExpiredRefreshToken('disabled');
      setIsAuthenticated(false);
      MessageToastCustom(
        'info',
        'Session Closed',
        'You have been logged out successfully.',
        'top-right'
      );
      await checkAuthentication();
      await refreshUser();

      await navigate('/login');
      return true;
    } catch (err: any) {
      const message =
        err?.response?.data?.message || err?.message || 'Unknown error';
      setErrorLogout(message);
      MessageToastCustom('error', 'Logout Failed', message, 'top-right');
    } finally {
      setLoadingLogout(false);
    }
  };

  return { SignOut, loadingLogout, errorLogout };
}
