import { notificationsData } from '@/shared/api/data/notifications';
import { CustomButton } from '@/shared/components/button/Button';
import DataTable from '@/shared/components/table/DataTable';
import React from 'react';
import './NotificationTable.css';

import {
  MdDeleteForever,
  MdEditSquare,
  MdOutlinePreview,
} from 'react-icons/md';
import StatusBadge from '@/shared/components/status/StatusBadge';

const NotificationTable = () => {
  const columns = [
    { header: 'ID', value: 'id_notifications', sortable: true },
    {
      header: 'Details',
      value: 'details',
      render: (value: { subject: string; message: string }) => {
        const subject = value.subject || 'No subject available';
        const message = value.message || 'No message available';
        return (
          <div className="details-notifications">
            <strong>{subject}</strong>
            <span className="notification-message">{message}</span>
          </div>
        );
      },
    },
    {
      header: 'Status',
      value: 'status',
      sortable: true,
      render: (value: number) => <StatusBadge code={value} label="status" />,
    },
    { header: 'Priority', value: 'priority', sortable: true },
    {
      header: 'Options',
      value: 'options',
      render: () => (
        <div className="custom-table-options">
          <div className="table-options">
            <CustomButton
              tooltip="Edit Invoice"
              variant="filled"
              color="green"
              icon={MdEditSquare}
            />
            <CustomButton
              tooltip="Delete Invoice"
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
        </div>
      ),
    },
  ];

  return (
    <div className="notifications">
      <div className="header-table-ant">
        <DataTable
          columns={columns}
          data={notificationsData}
          rowsPerPage={13}
          table_title="Notifications"
        />
      </div>
    </div>
  );
};

export default NotificationTable;
