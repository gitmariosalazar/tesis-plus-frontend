import { MdOutlineAddTask, MdRefresh } from 'react-icons/md';
import { CustomButton } from '../../../../shared/components/button/Button';
import StatusBadge from '../../../../shared/components/status/StatusBadge';
import { invoiceData } from '@/shared/api/data/invoice';
import '../../../../styles/Table.css';
import { PiEmptyFill } from 'react-icons/pi';
import { FaFileInvoice } from 'react-icons/fa';
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
import DataTable, { Column } from '@/shared/components/table/DataTable';
import { DetailInvoiceResponse } from '@/domain/services/docs/invoices/dto/response/detail-invoice.response';
import { StatusResponse } from '@/domain/services/docs/status/dto/response/status.response';
import { DocumentsResponse } from '@/domain/services/docs/documents/dto/response/documents.response';

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

  const invoiceList: DetailInvoiceResponse[] = invoiceData;

  const columns: Column<DetailInvoiceResponse>[] = [
    {
      header: 'ID',
      value: 'idDetailInvoice',
      sortable: true,
      width: 'very-small-width-cell',
    },
    {
      header: 'Invoice Number',
      value: 'invoiceNumber',
      sortable: true,
      width: 'small-width-cell',
    },
    {
      header: 'Entity',
      value: 'entity.name',
      sortable: true,
      width: 'medium-width-cell',
    },
    {
      header: 'Process Code',
      value: 'process.processNumber',
      sortable: true,
      width: 'very-small-width-cell',
    },
    {
      header: 'Value',
      value: 'totalValue',
      sortable: true,
      width: 'very-small-width-cell',
    },
    {
      header: 'Emission Date',
      value: 'emissionDate',
      sortable: true,
      render: (value: Date | string) => new Date(value).toLocaleDateString(),
      width: 'small-width-cell',
    },
    {
      header: 'Expiration Date',
      value: 'expirationDate',
      sortable: true,
      render: (value: Date | string) => new Date(value).toLocaleDateString(),
      width: 'small-width-cell',
    },

    { header: 'Description', value: 'description', sortable: true },
    {
      header: 'Type of Payment',
      value: 'typePayment.name',
      sortable: true,
      width: 'small-width-cell',
    },

    {
      header: 'Email Responsibility',
      value: 'emailResponsibility',
      sortable: true,
      width: 'medium-width-cell',
    },
    {
      header: 'Status',
      value: 'status',
      render: (status: StatusResponse) => (
        <StatusBadge code={status.idStatus} label={status.name} />
      ),
      width: 'small-width-cell',
    },
    {
      header: 'Document',
      value: 'document',
      sortable: true,
      render: (document: DocumentsResponse) => (
        <>
          {document.documentUrl.trim() !== '' ? (
            <a
              href={document.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton
                tooltip={document.name}
                variant="filled"
                color="gold"
                icon={FaFileInvoice}
                onClick={() => {}}
              />
            </a>
          ) : (
            <CustomButton
              tooltip="Empty Document"
              variant="filled"
              color="red"
              disabled
              icon={PiEmptyFill}
            />
          )}
        </>
      ),
      width: 'very-small-width-cell',
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
      width: 'small-width-cell',
    },
  ];

  return (
    <div className="invoice">
      <div className="header-table-ant">
        <DataTable
          data={invoiceList}
          columns={columns}
          table_title="Invoice reviews Management"
          component={
            <>
              <CustomButton
                variant="solid"
                color="green"
                title="Add Invoice"
                icon={MdOutlineAddTask}
              />
              <CustomButton
                tooltip="Refresh"
                variant="solid"
                color="blue"
                title=""
                icon={MdRefresh}
              />
            </>
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
