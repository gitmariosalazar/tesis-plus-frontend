
export interface CreateLogsNotificationsRequest {
  log: string;
  message: string;
  subject: string;
  phone: string;
  email: string;
  module: string;
  eventType: string;
  userId?: string;
  userEmail?: string;
  ipAddress?: string;
  userAgent?: string;
  statusCode?: number;
  kafkaTopic?: string;
  correlationId?: string;
}
