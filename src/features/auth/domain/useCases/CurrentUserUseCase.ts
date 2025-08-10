import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { IGetCurrentUserRepository } from '../../data/interfaces/security.interface.repository';
import { CurrentUserResponse } from '@/domain/services/security/authentication/dto/response/AuthCurrentUserResponse';

export const currentUserUseCase = async (
  repository: IGetCurrentUserRepository
): Promise<ApiResponse<CurrentUserResponse>> => {
  try {
    return repository.getCurrentUser();
  } catch (error) {
    throw error;
  }
};
