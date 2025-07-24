import { logoutUserUseCase } from '@/features/auth/domain/useCases/logoutUser';
import { logoutRepository } from '@/features/auth/data/repositories/LogoutRepository';
import { ApiResponse } from '@/shared/api/response/ApiResponse';

export class LogoutService {
  async logout(): Promise<ApiResponse<any>> {
    const response = await logoutUserUseCase();
    logoutRepository.clearSession();
    return response;
  }
}
