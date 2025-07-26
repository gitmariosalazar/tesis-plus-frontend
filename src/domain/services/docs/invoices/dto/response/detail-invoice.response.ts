import { DocumentsResponse } from "../../../documents/dto/response/documents.response";
import { EntityResponse } from "../../../enterprise/dto/response/entity.response";
import { ProcessResponse } from "../../../process/dto/response/process.response";
import { StatusResponse } from "../../../status/dto/response/status.response";
import { TypePaymentResponse } from "../../../type-payment/dto/response/type-payment.response";

export interface DetailInvoiceResponse {
  idDetailInvoice: number;
  process: ProcessResponse;
  totalValue: number;
  invoiceNumber: string;
  entity: EntityResponse;
  description: string;
  emissionDate: Date | string;
  expirationDate: Date | string;
  emailResponsibility: string;
  typePayment: TypePaymentResponse;
  document: DocumentsResponse;
  status: StatusResponse;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
