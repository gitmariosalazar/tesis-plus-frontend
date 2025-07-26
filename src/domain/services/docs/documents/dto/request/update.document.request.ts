
export interface UpdateDocumentRequest {
  idTypeDocument: number;
  documentName: string;
  documentDescription: string;
  dateRequest: Date;
  dateReception: Date;
  managerName: string;
  idProcess: number;
  documentUrl: string;
  idStatus: number;
}
