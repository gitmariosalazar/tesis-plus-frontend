export interface UpdateNotificationRequest {
  email: string;
  phone: string;
  subject: string;
  message: string;
  idTypeNotification: number;
  attempts?: number;
  sentAt?: Date;
  processCode: number;
  idPriority: number;
  idStatus: number;
  logsNotification?: any;
}
