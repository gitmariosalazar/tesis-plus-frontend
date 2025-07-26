import React from 'react';
import { PiClockCountdownFill } from 'react-icons/pi';
import { BiSolidMessageDetail } from 'react-icons/bi';

import { FaFileInvoice, FaChartPie } from 'react-icons/fa';
import { SiGoogledocs } from 'react-icons/si';

import './NotificationContentDrawer.css';
import { notificationsData } from '@/shared/api/data/notifications';
import getTimeAgo from '@/shared/utils/get-time';
import { NotificationResponse } from '@/domain/services/messages/notifications/dto/response/notification.response';

export interface Notification {
  id_notifications: number;
  email: string;
  phone: string | null;
  details: {
    subject: string;
    message: string;
  };
  notification_type: number;
  status: number;
  attempts: number;
  sent_at: string | null;
  created_at: string;
  updated_at: string;
  process_code: number;
  priority: number;
}

const NotificationContentDrawer = () => {
  const notifications: NotificationResponse[] = notificationsData;

  return (
    <div className="notification-content-drawer">
      {notifications.map((notification) => (
        <div key={notification.idNotifications} className="notification-item">
          <div className="time-notification">
            <span className="time-icon">
              <PiClockCountdownFill />
              <p>{getTimeAgo(notification.createdAt!)}</p>
            </span>
          </div>
          <div className="notification-content-body">
            <div className="notification-logo">
              <span>
                {notification.typeNotification.idTypeNotification === 1 ? (
                  <PiClockCountdownFill />
                ) : notification.typeNotification.idTypeNotification === 2 ? (
                  <BiSolidMessageDetail />
                ) : notification.typeNotification.idTypeNotification === 3 ? (
                  <FaFileInvoice />
                ) : notification.typeNotification.idTypeNotification === 4 ? (
                  <SiGoogledocs />
                ) : (
                  <FaChartPie />
                )}
              </span>
            </div>
            <div className="notification-content">
              <p className="notification-title">
                {notification.subject}
              </p>
              <p className="notification-description">
                {notification.message}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationContentDrawer;
