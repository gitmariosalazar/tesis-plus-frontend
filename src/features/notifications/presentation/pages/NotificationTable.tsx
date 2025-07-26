import { notificationsData } from '@/shared/api/data/notifications';
import { CustomButton } from '@/shared/components/button/Button';
import DataTable, { Column } from '@/shared/components/table/DataTable';
import React from 'react';
import './NotificationTable.css'


import {
  MdDeleteForever,
  MdEditSquare,
  MdOutlineAddTask,
  MdOutlinePreview,
} from 'react-icons/md';
import StatusBadge from '@/shared/components/status/StatusBadge';
import { NotificationResponse } from '@/domain/services/messages/notifications/dto/response/notification.response';
import { PriorityResponse } from '@/domain/services/messages/priority/dto/response/priority.response';

const NotificationTable = () => {
  const notificationsList: NotificationResponse[] = notificationsData;
  const columns: Column<NotificationResponse>[] = [
    {
      header: 'ID',
      value: 'idNotifications',
      sortable: true,
      render: (value: string) => (
        <span className="id-notification">{value}</span>
      ),
    },
    {
      header: 'Email',
      value: 'email',
      sortable: true,
    },
    {
      header: 'Phone',
      value: 'phone',
      sortable: true,
      width:'small-width-cell'
    },
    {
      header: 'Subject',
      value: 'subject',
      sortable: true,
    },
    {
      header: 'Message',
      value: 'message',
      sortable: true,
    },
    {
      header: 'Type',
      value: 'typeNotification.name',
      sortable: true,
      width:'very-small-width-cell'
    },
   
    {
      header: 'Sent At',
      value: 'sentAt',
      sortable: true,
      render: (value: Date | string) => new Date(value).toLocaleDateString(),
      width: 'very-small-width-cell'
    },

    {
      header: 'Emitted At',
      value: 'sentAt',
      sortable: true,
      render: (value: Date | string) => {
        const date = new Date(value);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        });
      },
      width:'small-width-cell'
    },
    {
      header: 'Options',
      value: 'options',
      render: () => (
        <div className="custom-table-options">
          <CustomButton
            tooltip="Edit Notification"
            variant="filled"
            color="green"
            icon={MdEditSquare}
          />
          <CustomButton
            tooltip="Delete Notification"
            variant="filled"
            color="red"
            icon={MdDeleteForever}
          />
          <CustomButton
            tooltip="View Details"
            variant="filled"
            color="magenta"
            icon={MdOutlinePreview}
          />
        </div>
      ),
      width:'small-width-cell'
    }
  ];

  return (
    <div className="process">
      <div className="header-table-ant">
        <DataTable<NotificationResponse>
          columns={columns}
          data={notificationsList}
          table_title="Notifications"
        />
      </div>
    </div>
  );
};

export default NotificationTable;
