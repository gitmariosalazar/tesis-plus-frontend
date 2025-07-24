import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { apiClient } from '@/infrastructure/api/client/apiClient';

export interface LogoutRepository {
  logout(): Promise<ApiResponse<void>>;
  clearSession(): void;
}

export const logoutRepository: LogoutRepository = {
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
