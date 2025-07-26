import { TypeStatusResponse } from "../../../type-status/dto/response/type-status.response";

export interface StatusResponse {
  idStatus: number;
  name: string;
  description: string;
  typeStatus: TypeStatusResponse;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
