import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { ILogoutSecurityRepository } from '../../data/interfaces/security.interface.repository';

export const logoutUserUseCase = async (
  repository: ILogoutSecurityRepository
): Promise<ApiResponse<any>> => {
  try {
    const response = await repository.logout();
    return response;
  } catch (error: any) {
    throw error;
  }
};
