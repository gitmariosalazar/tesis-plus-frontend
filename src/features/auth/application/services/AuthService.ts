import { AuthCredentials } from '../../domain/types/AuthCredentials';
import { loginUserUseCase } from '../../domain/useCases/loginUser';
import { authRepository } from '../../data/repositories/AuthRepository';
import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { AuthSignInResponse } from '../../../../domain/services/security/authentication/dto/response/AuthSignInResponse';

export class AuthService {
  async login(
    credentials: AuthCredentials
  ): Promise<ApiResponse<AuthSignInResponse>> {
    return loginUserUseCase(credentials, authRepository);
  }
}
