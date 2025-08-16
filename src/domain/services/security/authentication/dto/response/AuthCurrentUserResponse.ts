import { RoleUserResponse } from '../../../roles/dto/response/role-user.response';

export interface CurrentUserResponse {
  idUser: string;
  userEmail: string;
  firstName: string;
  lastName: string;
  userActive: boolean;
  phoneNumber: string;
  roleUsers?: RoleUserResponse[];
  createdAt?: Date;
  updatedAt?: Date;
}
