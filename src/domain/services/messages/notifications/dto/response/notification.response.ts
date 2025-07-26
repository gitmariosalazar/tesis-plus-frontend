import { PriorityResponse } from "../../../priority/dto/response/priority.response";
import { TypeNotificationResponse } from "../../../type-notification/dto/response/type-notification.response";


export interface NotificationResponse {
  idNotifications: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  typeNotification: TypeNotificationResponse;
  attempts?: number;
  sentAt?: Date | string;
  processCode: number;
  priority: PriorityResponse;
  idStatus: number;
  logs_notification?: any;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
