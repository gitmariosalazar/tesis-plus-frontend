import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { apiClient } from '@/infrastructure/api/client/apiClient';
import { ILogoutSecurityRepository } from '../interfaces/security.interface.repository';

export const logoutRepository: ILogoutSecurityRepository = {
  async logout(): Promise<ApiResponse<any>> {
    try {
      const response = await apiClient.post<ApiResponse<any>>('/auth/logout');
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  clearSession() {
    // Clear any session data or tokens
  },
};
