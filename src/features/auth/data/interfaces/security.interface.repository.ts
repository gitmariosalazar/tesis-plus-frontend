import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { AuthCredentials } from '../../domain/types/AuthCredentials';
import { AuthSignInResponse } from '@/domain/services/security/authentication/dto/response/AuthSignInResponse';
import { RefreshTokenResponse } from '@/domain/services/security/authentication/dto/response/refresh-token.response';
import { CurrentUserResponse } from '@/domain/services/security/authentication/dto/response/AuthCurrentUserResponse';
import { SessionResponse } from '@/domain/services/security/authentication/dto/response/session.response';

export interface IAuthSecurityRepository {
  login(credentials: AuthCredentials): Promise<ApiResponse<AuthSignInResponse>>;
}

export interface IRefreshTokenSecurityRepository {
  refreshToken(): Promise<ApiResponse<RefreshTokenResponse>>;
}

export interface ILogoutSecurityRepository {
  logout(): Promise<ApiResponse<void>>;
  clearSession(): void;
}

export interface IGetCurrentUserRepository {
  getCurrentUser(): Promise<ApiResponse<CurrentUserResponse>>;
}

export interface IGetUserSessionRepository {
  getSessionUser(): Promise<ApiResponse<SessionResponse>>;
}
