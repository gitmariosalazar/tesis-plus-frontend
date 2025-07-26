import { EntityResponse } from "../../../enterprise/dto/response/entity.response";
import { StatusResponse } from "../../../status/dto/response/status.response";

export interface ProcessResponse {
  idProcess: number;
  processNumber: string;
  value: number;
  category: string;
  description: string;
  timeExecution: string;
  processObject: string;
  emailManager: string;
  fullNameManager: string;
  phoneManager: string;
  statusProcess: number;
  isActive: boolean;
  entity: EntityResponse;
  status: StatusResponse;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
