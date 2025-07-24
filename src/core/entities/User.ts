export interface User {
  idUser: number;
  userEmail: string;
  firstName: string;
  lastName: string;
  userRole: string;
  userActive: boolean;
  userType?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
