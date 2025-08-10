import { DocumentsResponse } from '../../../documents/dto/response/documents.response';
import { ProcessResponse } from '../../../process/dto/response/process.response';

export interface ProcessDocumentResponse {
  idProcessDocument: number;
  process: ProcessResponse;
  document: DocumentsResponse;
  observations: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
