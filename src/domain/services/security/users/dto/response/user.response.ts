import { RoleUserResponse } from '../../../roles/dto/response/role-user.response';
import { UserTypeResponse } from '../../../user-type/dto/response/user-type.response';

export interface UserResponse {
  idUser: string;
  userEmail: string;
  firstName: string;
  lastName: string;
  userActive: boolean;
  phoneNumber: string;
  roleUser: RoleUserResponse[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
