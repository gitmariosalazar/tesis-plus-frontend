import { ApiResponse } from './../../../../shared/api/response/ApiResponse';
import { IGetUsersRepository } from '../interfaces/user.repository.interface';
import { UserResponse } from '@/domain/services/security/users/dto/response/user.response';
import { apiClient } from '@/infrastructure/api/client/apiClient';

export const findAllUserRepository: IGetUsersRepository = {
  async findAllUsers(): Promise<ApiResponse<UserResponse>> {
    try {
      const response =
        await apiClient.get<ApiResponse<UserResponse>>('/user/find-all');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
