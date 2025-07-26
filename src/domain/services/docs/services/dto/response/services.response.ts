import { TypeServicesResponse } from "../../../type-services/dto/response/type-services.response";

export interface ServiceResponse {
  idService: number;
  name: string;
  description: string;
  typeService: TypeServicesResponse;
  createdAt?: Date;
  updatedAt?: Date;
}
