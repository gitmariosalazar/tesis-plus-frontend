import { NotificationChannel } from "@/shared/types/notification-channels";

export interface SendNotificationRequest {
  email: string;
  subject: string;
  message: string;
  phone: string;
  channels: NotificationChannel[] | null;
  
}
