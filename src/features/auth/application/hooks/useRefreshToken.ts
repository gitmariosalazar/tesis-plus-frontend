import { useAuthContext } from '@/app/providers/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageToastCustom } from '@/shared/components/toast/CustomMessageToast';
import { apiClient } from '@/infrastructure/api/client/apiClient';
import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { CurrentUserResponse } from '@/domain/services/security/authentication/dto/response/AuthCurrentUserResponse';
import { SessionResponse } from '@/domain/services/security/authentication/dto/response/session.response';
import { RefreshTokenService } from '../services/RefreshService';

export function useRefreshToken() {
  const {
    setUser,
    setExpiredToken,
    setExpiredRefreshToken,
    refreshUser,
    setIsAuthenticated,
    checkAuthentication,
  } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const refreshToken = async (): Promise<boolean> => {
    const refreshTokenService = new RefreshTokenService();
    setLoading(true);
    setError(null);

    try {
      const response = await refreshTokenService.refreshToken();
      console.log('Response from refresh token:', response);

      if (response.status_code !== 201) {
        throw new Error('Failed to refresh token');
      }

      // ✅ Validar sesión inmediatamente después del refresh
      await checkAuthentication();

      // ✅ Obtener el usuario actualizado
      const userRes =
        await apiClient.get<ApiResponse<CurrentUserResponse>>(
          '/auth/current-user'
        );
      const user = userRes.data.data;
      if (!user) throw new Error('Failed to fetch current user');

      setUser(user);
      setIsAuthenticated(true);

      // ✅ Verificar estado real de los tokens
      const sessionRes =
        await apiClient.get<ApiResponse<SessionResponse>>('/auth/session');
      const session = sessionRes.data.data;

      if (session.accessTokenValid && session.refreshTokenValid) {
        setExpiredToken('disabled');
        setExpiredRefreshToken('disabled');
        await refreshUser();
        MessageToastCustom(
          'success',
          'Token Refreshed',
          'Your session has been refreshed successfully.',
          'top-right'
        );
        return true;
      } else if (!session.accessTokenValid && session.refreshTokenValid) {
        setExpiredToken('expired');
        setExpiredRefreshToken('disabled');
        throw new Error('Session still expired after refresh');
      } else {
        setExpiredToken('refreshFailed');
        setExpiredRefreshToken('refreshFailed');
        throw new Error('Refresh token invalid after refresh');
      }
    } catch (err: any) {
      const msg =
        err?.response?.data?.message || err?.message || 'Unknown error';
      setError(msg);

      const isExpired =
        msg === 'REFRESH_TOKEN_EXPIRED' ||
        msg.includes('Session and refresh token expired') ||
        err?.response?.status === 401;

      if (isExpired) {
        setUser(null);
        setIsAuthenticated(false);
        setExpiredToken('disabled');
        setExpiredRefreshToken('disabled');
        navigate('/login');
        MessageToastCustom(
          'error',
          'Session Expired',
          'Your session has fully expired. Please log in again.',
          'top-right'
        );
      } else {
        setExpiredToken('expired');
        setExpiredRefreshToken('disabled');
        MessageToastCustom(
          'error',
          'Refresh Token Failed',
          'Unable to refresh your session. Please try again.',
          'top-right'
        );
      }

      return false;
    } finally {
      setLoading(false);
    }
  };

  return { refreshToken, loading, error };
}
