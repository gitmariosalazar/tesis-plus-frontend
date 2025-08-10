import { UserResponse } from '@/domain/services/security/users/dto/response/user.response';
import { ApiResponse } from '@/shared/api/response/ApiResponse';

export interface IGetUsersRepository {
  findAllUsers(): Promise<ApiResponse<UserResponse>>;
}
