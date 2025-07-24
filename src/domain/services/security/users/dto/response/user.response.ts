import { UserTypeResponse } from '../../../user-type/dto/response/user-type.response';

export interface UserResponse {
  idUser: string;
  userEmail: string;
  firstName: string;
  lastName: string;
  userActive: boolean;
  userType: UserTypeResponse;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
