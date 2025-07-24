import { apiClient } from '@/infrastructure/api/client/apiClient';
import { AuthCredentials } from '../../domain/types/AuthCredentials';
import { AuthSignInResponse } from '../../../../domain/services/security/authentication/dto/response/AuthSignInResponse';
import { ApiResponse } from '@/shared/api/response/ApiResponse';

export interface AuthRepository {
  login(credentials: AuthCredentials): Promise<ApiResponse<AuthSignInResponse>>;
}

export const authRepository: AuthRepository = {
  async login(
    credentials: AuthCredentials
  ): Promise<ApiResponse<AuthSignInResponse>> {
    try {
      const response = await apiClient.post<ApiResponse<AuthSignInResponse>>(
        '/auth/signin',
        credentials
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
};
