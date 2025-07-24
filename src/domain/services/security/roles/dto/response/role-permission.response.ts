import { PermissionResponse } from '../../../permission/dto/response/permission.response';
import { UserTypeResponse } from '../../../user-type/dto/response/user-type.response';

export interface RolePermissionResponse {
  idRolePermission: number;
  userType: UserTypeResponse;
  permission: PermissionResponse;
  createdAt?: Date;
  updatedAt?: Date;
}
