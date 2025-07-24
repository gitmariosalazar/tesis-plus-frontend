import React from 'react';
import { PiClockCountdownFill } from 'react-icons/pi';
import { BiSolidMessageDetail } from 'react-icons/bi';

import { FaFileInvoice, FaChartPie } from 'react-icons/fa';
import { SiGoogledocs } from 'react-icons/si';

import './NotificationContentDrawer.css';
import { notificationsData } from '@/shared/api/data/notifications';

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
  const notifications: Notification[] = notificationsData;

  return (
    <div className="notification-content-drawer">
      {notifications.map((notification) => (
        <div key={notification.id_notifications} className="notification-item">
          <div className="time-notification">
            <span className="time-icon">
              <PiClockCountdownFill />
              <p>{notification.created_at}</p>
            </span>
          </div>
          <div className="notification-content-body">
            <div className="notification-logo">
              <span>
                {notification.notification_type === 1 ? (
                  <PiClockCountdownFill />
                ) : notification.notification_type === 2 ? (
                  <BiSolidMessageDetail />
                ) : notification.notification_type === 3 ? (
                  <FaFileInvoice />
                ) : notification.notification_type === 4 ? (
                  <SiGoogledocs />
                ) : (
                  <FaChartPie />
                )}
              </span>
            </div>
            <div className="notification-content">
              <p className="notification-title">
                {notification.details.subject}
              </p>
              <p className="notification-description">
                {notification.details.message}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationContentDrawer;
