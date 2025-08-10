import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { IGetUserSessionRepository } from '../../data/interfaces/security.interface.repository';
import { SessionResponse } from '@/domain/services/security/authentication/dto/response/session.response';

export const sessionUserUseCase = async (
  repository: IGetUserSessionRepository
): Promise<ApiResponse<SessionResponse>> => {
  try {
    return repository.getSessionUser();
  } catch (error) {
    throw error;
  }
};
