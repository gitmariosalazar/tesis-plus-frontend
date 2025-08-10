import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { RefreshTokenResponse } from '@/domain/services/security/authentication/dto/response/refresh-token.response';
import { IRefreshTokenSecurityRepository } from '../../data/interfaces/security.interface.repository';

export const refreshTokenUseCase = async (
  repository: IRefreshTokenSecurityRepository
): Promise<ApiResponse<RefreshTokenResponse>> => {
  return repository.refreshToken();
};
