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
    userType?: number;
  };
  createdAt?: string;
  updatedAt?: string;
}
