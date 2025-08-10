import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { IGetUsersRepository } from '../../data/interfaces/user.repository.interface';
import { UserResponse } from '@/domain/services/security/users/dto/response/user.response';

export const findAllUsersUseCase = async (
  repository: IGetUsersRepository
): Promise<ApiResponse<UserResponse>> => {
  try {
    return repository.findAllUsers();
  } catch (error) {
    throw error;
  }
};
