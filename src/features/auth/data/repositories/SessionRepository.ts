import { ApiResponse } from './../../../../shared/api/response/ApiResponse';
import { IGetUserSessionRepository } from '../interfaces/security.interface.repository';
import { SessionResponse } from '@/domain/services/security/authentication/dto/response/session.response';
import { apiClient } from '@/infrastructure/api/client/apiClient';

export const sessionUserRepository: IGetUserSessionRepository = {
  async getSessionUser(): Promise<ApiResponse<SessionResponse>> {
    try {
      const response =
        await apiClient.get<ApiResponse<SessionResponse>>('/auth/session');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
