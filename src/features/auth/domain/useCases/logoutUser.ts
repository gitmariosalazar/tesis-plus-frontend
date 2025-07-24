import { logoutRepository } from '@/features/auth/data/repositories/LogoutRepository';
import { ApiResponse } from '@/shared/api/response/ApiResponse';

export const logoutUserUseCase = async (): Promise<ApiResponse<any>> => {
  try {
    const response = await logoutRepository.logout();
    return response;
  } catch (error: any) {
    throw error;
  }
};
