import { CurrentUserResponse } from '@/domain/services/security/authentication/dto/response/AuthCurrentUserResponse';
import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { currentUserUseCase } from '../../domain/useCases/CurrentUserUseCase';
import { currentRepository } from '../../data/repositories/CurrentRepository';

export class CurrentUserService {
  async getCurrentUser(): Promise<ApiResponse<CurrentUserResponse>> {
    return currentUserUseCase(currentRepository);
  }
}
