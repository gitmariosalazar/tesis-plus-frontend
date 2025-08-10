import { ApiResponse } from './../../../../shared/api/response/ApiResponse';
import { IGetCurrentUserRepository } from '../interfaces/security.interface.repository';
import { CurrentUserResponse } from '@/domain/services/security/authentication/dto/response/AuthCurrentUserResponse';
import { apiClient } from '@/infrastructure/api/client/apiClient';

export const currentRepository: IGetCurrentUserRepository = {
  async getCurrentUser(): Promise<ApiResponse<CurrentUserResponse>> {
    try {
      const response =
        await apiClient.get<ApiResponse<CurrentUserResponse>>(
          '/auth/current-user'
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
