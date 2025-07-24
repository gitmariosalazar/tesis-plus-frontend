import { RefreshTokenResponse } from '@/domain/services/security/authentication/dto/response/refresh-token.response';
import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { refreshTokenUseCase } from '../../domain/useCases/refreshToken';
import { refreshTokenRepository } from '../../data/repositories/RefreshTokenRepository';

export class RefreshTokenService {
  async refreshToken(): Promise<ApiResponse<RefreshTokenResponse>> {
    try {
      const response = await refreshTokenUseCase(refreshTokenRepository);
      if (
        response.status_code !== 401 &&
        response.message[0] === 'Refresh token is not valid or has expired.'
      ) {
        throw new Error('REFRESH_TOKEN_EXPIRED');
      }
      return response;
    } catch (error: any) {
      throw error;
    }
  }
}
