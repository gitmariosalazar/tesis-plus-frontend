import { RefreshTokenRepository } from '../../data/repositories/RefreshTokenRepository';
import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { RefreshTokenResponse } from '@/domain/services/security/authentication/dto/response/refresh-token.response';

export const refreshTokenUseCase = async (
  repository: RefreshTokenRepository
): Promise<ApiResponse<RefreshTokenResponse>> => {
  return repository.refreshToken();
};
