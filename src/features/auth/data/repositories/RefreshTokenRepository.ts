import { RefreshTokenResponse } from '@/domain/services/security/authentication/dto/response/refresh-token.response';
import { apiClient } from '@/infrastructure/api/client/apiClient';
import { ApiResponse } from '@/shared/api/response/ApiResponse';

export interface RefreshTokenRepository {
  refreshToken(): Promise<ApiResponse<RefreshTokenResponse>>;
}

export const refreshTokenRepository: RefreshTokenRepository = {
  async refreshToken(): Promise<ApiResponse<RefreshTokenResponse>> {
    try {
      const response = await apiClient.post<ApiResponse<RefreshTokenResponse>>(
        '/auth/refresh-token'
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
};
