import { ProcessResponse } from "../../../process/dto/response/process.response";
import { StatusResponse } from "../../../status/dto/response/status.response";
import { TypeDocumentsResponse } from "../../../type-documents/dto/response/type-documents.response";

export interface DocumentsResponse {
  idDocument: number;
  name: string;
  description: string;
  dateRequest: Date | string;
  dateReception: Date | string;
  managerName: string;
  documentUrl: string;
  status: StatusResponse;
  typeDocument: TypeDocumentsResponse;
  process: ProcessResponse;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
