import { AuthCredentials } from '../types/AuthCredentials';
import { AuthRepository } from '../../data/repositories/AuthRepository';
import { AuthError } from '../errors/AuthError';
import { validateEmail } from '@/core/utils/validateEmails';
import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { AuthSignInResponse } from '../../../../domain/services/security/authentication/dto/response/AuthSignInResponse';

export const loginUserUseCase = async (
  credentials: AuthCredentials,
  repository: AuthRepository
): Promise<ApiResponse<AuthSignInResponse>> => {
  if (!credentials.email || !credentials.password) {
    throw new AuthError('Email and password are required');
  }
  if (!validateEmail(credentials.email)) {
    throw new AuthError('Invalid email format!');
  }
  return repository.login(credentials);
};
