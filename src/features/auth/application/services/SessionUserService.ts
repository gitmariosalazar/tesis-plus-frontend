import { SessionResponse } from '@/domain/services/security/authentication/dto/response/session.response';
import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { sessionUserUseCase } from '../../domain/useCases/SessionUserUseCase';
import { sessionUserRepository } from '../../data/repositories/SessionRepository';

export class SessionUserService {
  async getSessionUser(): Promise<ApiResponse<SessionResponse>> {
    return sessionUserUseCase(sessionUserRepository);
  }
}
