import { MdOutlineAddTask } from 'react-icons/md';
import { CustomButton } from '../../../../shared/components/button/Button';
import StatusBadge from '../../../../shared/components/status/StatusBadge';
import { invoiceData } from '@/shared/api/data/invoice';
import '../../../../styles/Table.css';
import {
  MdEditSquare,
  MdDeleteForever,
  MdOutlinePreview,
} from 'react-icons/md';
import { RiFileSettingsFill } from 'react-icons/ri';
import { useState } from 'react';
import InvoiceEditForm from '../components/InvoiceEditForm';
import DeleteInvoiceConfirm from '../components/InvoiceDeleteConfirm';
import InvoiceView from '../components/InvoiceView';
import OptionsInvoice from '../components/Options';
import DataTable from '@/shared/components/table/DataTable';

export const InvoiceTable = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);

  // Function to handle opening the details modal
  const handleOpenDetailsModal = () => {
    setOpenDetailsModal(true);
  };

  // Function to handle closing the details modal
  const handleCloseDetailsModal = () => {
    setOpenDetailsModal(false);
  };

  // Handlers for opening and closing modals
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const columns = [
    { header: 'ID', value: 'id', sortable: true },
    { header: 'Invoice Number', value: 'invoiceNumber', sortable: true },
    { header: 'Entity', value: 'entity', sortable: true },
    { header: 'Process Code', value: 'processCode', sortable: true },
    { header: 'Value', value: 'value', sortable: true },
    { header: 'Date', value: 'date', sortable: true },
    {
      header: 'Status',
      value: 'status',
      render: (value: { code: number; name: string }) => (
        <StatusBadge code={value.code} label={value.name} />
      ),
    },
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
              onClick={handleOpenEditModal}
            />
            <CustomButton
              tooltip="Delete Invoice"
              variant="filled"
              color="red"
              icon={MdDeleteForever}
              onClick={handleOpenDeleteModal}
            />
            <CustomButton
              tooltip="View Details"
              variant="filled"
              color="magenta"
              icon={MdOutlinePreview}
              onClick={handleOpenDetailsModal}
            />
            <OptionsInvoice activePage={() => console.log('Active')}>
              <CustomButton
                tooltip="Settings"
                variant="filled"
                color="blue"
                icon={RiFileSettingsFill}
              />
            </OptionsInvoice>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="invoice">
      <div className="header-table-ant">
        <DataTable
          data={invoiceData}
          columns={columns}
          table_title="Invoice reviews Management"
          button={
            <CustomButton
              variant="solid"
              color="green"
              title="Add Invoice"
              icon={MdOutlineAddTask}
            ></CustomButton>
          }
        />
        <InvoiceEditForm
          isOpen={openEditModal}
          onClose={handleCloseEditModal}
        />
        <DeleteInvoiceConfirm
          isOpen={openDeleteModal}
          onClose={handleCloseDeleteModal}
        />
        <InvoiceView
          isOpen={openDetailsModal}
          onClose={handleCloseDetailsModal}
        />
      </div>
    </div>
  );
};

export default InvoiceTable;
