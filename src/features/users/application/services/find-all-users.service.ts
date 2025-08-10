import { UserResponse } from '@/domain/services/security/users/dto/response/user.response';
import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { findAllUsersUseCase } from '../../domain/useCases/FindAllUsersUseCase';
import { findAllUserRepository } from '../../data/repositories/FindAllUsersRepository';

export class FindAllUsersService {
  async findAllUsers(): Promise<ApiResponse<UserResponse>> {
    try {
      return findAllUsersUseCase(findAllUserRepository);
    } catch (error) {
      throw error;
    }
  }
}
