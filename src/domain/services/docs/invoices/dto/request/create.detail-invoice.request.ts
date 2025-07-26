
export interface CreateDetailInvoiceRequest {
  idProcess: number;
  totalValue: number;
  invoiceNumber: string;
  idEntity: number;
  description: string;
  emissionDate: Date;
  expirationDate: Date;
  emailResponsability: string;
  idTypePayment: number;
  idDocument: number;
  idStatus: number;
}
