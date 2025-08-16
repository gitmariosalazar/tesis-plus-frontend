import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
  useRef,
} from 'react';
import { MessageToastCustom } from '@/shared/components/toast/CustomMessageToast';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiClient } from '@/infrastructure/api/client/apiClient';
import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { CurrentUserResponse } from '@/domain/services/security/authentication/dto/response/AuthCurrentUserResponse';
import { SessionResponse } from '@/domain/services/security/authentication/dto/response/session.response';
import ExpiredSession from '@/shared/components/expired-session/ExpiredSession';
import { useRefreshToken } from '@/features/auth/application/hooks/useRefreshToken';
import { useLogout } from '@/features/auth/application/hooks/useLogout';
import { CurrentUserService } from '@/features/auth/application/services/CurrentUserService';
import { SessionUserService } from '@/features/auth/application/services/SessionUserService';

interface AuthContextType {
  user: CurrentUserResponse | null;
  loading: boolean;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  setExpiredToken: (status: 'disabled' | 'expired' | 'refreshFailed') => void;
  setExpiredRefreshToken: (
    status: 'disabled' | 'expired' | 'refreshFailed'
  ) => void;
  setUser: (user: CurrentUserResponse | null) => void;
  refreshUser: () => Promise<void>;
  checkAuthentication: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setExpiredToken: () => {},
  setExpiredRefreshToken: () => {},
  setUser: () => {},
  refreshUser: async () => {},
  checkAuthentication: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const currentUserService: CurrentUserService = new CurrentUserService();
  const sessionUserService: SessionUserService = new SessionUserService();
  const [user, setUser] = useState<CurrentUserResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [expiredToken, setExpiredToken] = useState<
    'disabled' | 'expired' | 'refreshFailed'
  >('disabled');
  const [expiredRefreshToken, setExpiredRefreshToken] = useState<
    'disabled' | 'expired' | 'refreshFailed'
  >('disabled');
  const [timeLifeAccessToken, setTimeLifeAccessToken] = useState<number | null>(
    null
  );
  const [timeLifeRefreshToken, setTimeLifeRefreshToken] = useState<
    number | null
  >(null);

  const location = useLocation();
  const { refreshToken, loading: refreshLoading } = useRefreshToken();
  const { SignOut, loadingLogout, errorLogout } = useLogout();
  const timeoutRefAccessToken = useRef<NodeJS.Timeout | null>(null);
  const timeoutRefRefreshToken = useRef<NodeJS.Timeout | null>(null);

  const initialCheckDoneAccessToken = useRef(false);
  const intervalStartedAccessToken = useRef(false);

  const initialCheckDoneRefreshToken = useRef(false);
  const intervalStartedRefreshToken = useRef(false);

  const publicRoutes = ['/login', '/register', '/public', '/'];

  const sessionStatus = (() => {
    if (expiredToken === 'disabled' && expiredRefreshToken === 'disabled') {
      return 'disabled';
    } else if (
      expiredToken === 'expired' &&
      expiredRefreshToken === 'disabled'
    ) {
      return 'expired';
    } else {
      return 'refreshFailed';
    }
  })();

  const checkAuthentication = async () => {
    try {
      const session = await sessionUserService.getSessionUser();
      if (session.data) {
        console.log(session.data);
        const sessionData = session.data;

        if (sessionData.accessTokenValid && sessionData.refreshTokenValid) {
          const timeLeftAccessToken =
            (new Date(sessionData.expiresAtAccessToken).getTime() -
              Date.now()) /
            1000;

          const timeLeftRefreshToken = sessionData.expiresAtRefreshToken
            ? (new Date(sessionData.expiresAtRefreshToken).getTime() -
                Date.now()) /
              1000
            : null;

          setTimeLifeAccessToken(timeLeftAccessToken);
          setTimeLifeRefreshToken(timeLeftRefreshToken);
          setExpiredToken('disabled');
          setExpiredRefreshToken('disabled');
          const response = await currentUserService.getCurrentUser();
          if (response.data) {
            console.log(response.data);
            setUser(response.data);
            setIsAuthenticated(true);
          } else {
            setUser(null);
            setIsAuthenticated(false);
            setExpiredToken('disabled');
            setExpiredRefreshToken('disabled');
          }
        } else if (
          !sessionData.accessTokenValid &&
          sessionData.refreshTokenValid
        ) {
          setExpiredToken('expired');
          setExpiredRefreshToken('disabled');
        } else {
          setExpiredToken('refreshFailed');
          setExpiredRefreshToken('refreshFailed');
        }
      } else {
        setExpiredToken('disabled');
        setExpiredRefreshToken('disabled');
      }
    } catch (error: any) {
      setUser(null);
      setIsAuthenticated(false);
      setExpiredToken('disabled');
      setExpiredRefreshToken('disabled');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!initialCheckDoneAccessToken.current) {
      checkAuthentication();
      initialCheckDoneAccessToken.current = true;
      console.log('Initial authentication check');
    }
    if (!initialCheckDoneRefreshToken.current) {
      checkAuthentication();
      initialCheckDoneRefreshToken.current = true;
      console.log('Initial authentication check for refresh token');
    }
  }, []);

  useEffect(() => {
    if (
      timeLifeRefreshToken !== null &&
      !isNaN(timeLifeRefreshToken) &&
      !intervalStartedRefreshToken.current
    ) {
      const milliseconds = timeLifeRefreshToken * 1000;
      console.log(
        `Setting timeout to recheck authentication in ${milliseconds}ms`
      );

      timeoutRefRefreshToken.current = setTimeout(() => {
        checkAuthentication();
        console.log('Session expired or nearing expiration. Rechecking...');
      }, milliseconds);

      intervalStartedRefreshToken.current = true;
    }
    return () => {
      if (timeoutRefRefreshToken.current) {
        clearTimeout(timeoutRefRefreshToken.current);
        timeoutRefRefreshToken.current = null;
        intervalStartedRefreshToken.current = false;
      }
    };
  }, [timeLifeRefreshToken]);

  useEffect(() => {
    if (
      timeLifeAccessToken !== null &&
      !isNaN(timeLifeAccessToken) &&
      !intervalStartedAccessToken.current
    ) {
      const milliseconds = timeLifeAccessToken * 1000;
      console.log(
        `Setting timeout to recheck authentication in ${milliseconds}ms`
      );

      timeoutRefAccessToken.current = setTimeout(() => {
        checkAuthentication();
        console.log('Session expired or nearing expiration. Rechecking...');
      }, milliseconds);

      intervalStartedAccessToken.current = true;
    }

    return () => {
      if (timeoutRefAccessToken.current) {
        clearTimeout(timeoutRefAccessToken.current);
        timeoutRefAccessToken.current = null;
        intervalStartedAccessToken.current = false;
      }
    };
  }, [timeLifeAccessToken]);

  const refreshUser = async () => {
    setLoading(true);
    try {
      const response =
        await apiClient.get<ApiResponse<CurrentUserResponse>>(
          '/auth/current-user'
        );
      if (response.data?.data) {
        setUser(response.data.data);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      setExpiredToken('disabled');
      setExpiredRefreshToken('disabled');
    } finally {
      setLoading(false);
    }
  };

  async function logout() {
    setLoading(true);
    try {
      await SignOut();
      await checkAuthentication();
      setUser(null);
      setIsAuthenticated(false);
      setExpiredToken('disabled');
      setExpiredRefreshToken('disabled');
      setTimeLifeAccessToken(null);
    } catch (error: any) {
      console.error('Error during logout:', error);
      MessageToastCustom(
        'error',
        'Logout Failed',
        error?.response?.data?.message || 'An error occurred during logout.',
        'top-right'
      );
    } finally {
      setLoading(false);
    }
  }

  async function refreshTokenAndCheck(): Promise<boolean> {
    try {
      await refreshToken();
      await checkAuthentication();
      return true;
    } catch (error) {
      console.error('Error refreshing token:', error);
      setExpiredToken('refreshFailed');
      setExpiredRefreshToken('refreshFailed');
      MessageToastCustom(
        'error',
        'Token Refresh Failed',
        'Your session could not be refreshed. Please log in again.',
        'top-right'
      );
      return false;
    }
  }

  useEffect(() => {
    if (!publicRoutes.includes(location.pathname)) {
      refreshUser();
      console.log('User refreshed on route change');
    }
  }, [location.pathname]);

  const isPublicRoute = publicRoutes.includes(location.pathname);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (
        document.visibilityState === 'visible' &&
        !publicRoutes.includes(location.pathname)
      ) {
        checkAuthentication();
        console.log('Tab is active, checking authentication...');
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [location.pathname, user]);

  useEffect(() => {
    apiClient.setUnauthorizedHandler(async (error) => {
      if (!publicRoutes.includes(location.pathname) && isAuthenticated) {
        await checkAuthentication();
        console.log('401 error detected, checking authentication...');
      }
    });
  }, [isAuthenticated, location.pathname]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading: loading || refreshLoading,
        isAuthenticated,
        setIsAuthenticated,
        setExpiredToken,
        setExpiredRefreshToken,
        setUser,
        refreshUser,
        checkAuthentication,
        logout,
      }}
    >
      {sessionStatus !== 'disabled' && !isPublicRoute && isAuthenticated ? (
        <ExpiredSession
          open={sessionStatus === 'expired' || sessionStatus == 'refreshFailed'}
          onRefresh={
            sessionStatus === 'expired'
              ? () => refreshTokenAndCheck()
              : undefined
          }
          onExit={logout}
        />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
