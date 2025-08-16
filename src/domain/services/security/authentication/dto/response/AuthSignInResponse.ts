import { RoleUserResponse } from '../../../roles/dto/response/role-user.response';

export interface AuthSignInResponse {
  idAccessToken: number;
  idUser: string;
  typeAuthentication: string;
  provider: string;
  providerAccount: string;
  accessToken: string;
  expiresAt: number;
  tokenType: string;
  scope: string;
  token: string;
  user: {
    idUser: string;
    userEmail: string;
    userPassword: string;
    firstName: string;
    lastName: string;
    userActive: boolean;
    phoneNumber: string;
    roleUsers?: RoleUserResponse[];
  };
  createdAt?: string;
  updatedAt?: string;
}
