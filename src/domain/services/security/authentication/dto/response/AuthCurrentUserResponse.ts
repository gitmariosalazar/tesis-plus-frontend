export interface CurrentUserResponse {
  idUser: string;
  userEmail: string;
  firstName: string;
  lastName: string;
  userActive: boolean;
  userType?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
