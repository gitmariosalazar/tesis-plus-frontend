import { loginUserUseCase } from '@/features/auth/domain/useCases/loginUser';
import { AuthError } from '@/features/auth/domain/errors/AuthError';

const mockRepository = {
  login: jest.fn(),
};

describe('loginUser use case', () => {
  it('should throw AuthError if credentials are invalid', async () => {
    await expect(
      loginUserUseCase({ email: '', password: '' }, mockRepository)
    ).rejects.toThrow(AuthError);
  });

  it('should call repository.login with correct credentials', async () => {
    const credentials = { email: 'test@example.com', password: 'password' };
    mockRepository.login.mockResolvedValue({ user: {}, token: 'token' });

    await loginUserUseCase(credentials, mockRepository);

    expect(mockRepository.login).toHaveBeenCalledWith(credentials);
  });
});
