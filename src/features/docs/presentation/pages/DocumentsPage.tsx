import { CustomButton } from '@/shared/components/button/Button';
import StatusBadge from '@/shared/components/status/StatusBadge';
import DataTable, { Column } from '@/shared/components/table/DataTable';
import React from 'react';
import { FaFileInvoice } from 'react-icons/fa';
import {
  MdDeleteForever,
  MdEditSquare,
  MdOutlinePreview,
} from 'react-icons/md';
import DocumentsEditForm from '../components/DocumentsEditForm';
import DeleteDocumentsConfirm from '../components/DocumentsDeleteConfirm';
import DocumentsView from '../components/DocumentsView';
import { documentsData } from '@/shared/api/data/documents';
import { DocumentsResponse } from '@/domain/services/docs/documents/dto/response/documents.response';
import { StatusResponse } from '@/domain/services/docs/status/dto/response/status.response';
import { TypeDocumentsResponse } from '@/domain/services/docs/type-documents/dto/response/type-documents.response';

const DocumentsPage = () => {
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openDetailsModal, setOpenDetailsModal] = React.useState(false);

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

  const documents: DocumentsResponse[] = documentsData; // Replace with actual data

  // Define columns for the document table
  const columns: Column<DocumentsResponse>[] = [
    {
      header: 'Document ID',
      value: 'idDocument',
      sortable: true,
      width: 'very-small-width-cell',
    },
    {
      header: 'Title',
      value: 'name',
      sortable: true,
      width: 'small-width-cell',
    },
    {
      header: 'File URL',
      value: 'documentUrl',
      sortable: true,
      render: (value: string) => (
        <a href={value} target="_blank" rel="noopener noreferrer">
          <FaFileInvoice />
        </a>
      ),
      width: 'very-small-width-cell',
    },
    {
      header: 'Valid',
      value: 'status.idStatus',
      sortable: true,
      width: 'small-width-cell',
    },
    {
      header: 'Request Date',
      value: 'dateRequest',
      sortable: true,
      render: (value: Date | string) => new Date(value).toLocaleDateString(),
      width: 'small-width-cell',
    },
    {
      header: 'Reception Date',
      value: 'dateReception',
      sortable: true,
      render: (value: Date | string) => new Date(value).toLocaleDateString(),
      width: 'small-width-cell',
    },
    {
      header: 'Type',
      value: 'typeDocument',
      sortable: true,
      render: (value: TypeDocumentsResponse) => value.title || 'N/A',
      width: 'small-width-cell',
    },
    {
      header: 'Status',
      value: 'status',
      render: (value: StatusResponse) => (
        <StatusBadge code={value.idStatus} label={value.name} />
      ),
      width: 'small-width-cell',
    },
    {
      header: 'Manager Name',
      value: 'managerName',
      sortable: true,
      width: 'small-width-cell',
    },
    {
      header: 'Options',
      value: 'options',
      render: () => (
        <div className="custom-table-options">
          <div className="table-options">
            <CustomButton
              tooltip="Edit Document"
              variant="filled"
              color="green"
              icon={MdEditSquare}
              onClick={handleOpenEditModal}
            />
            <CustomButton
              tooltip="Delete Document"
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
          </div>
        </div>
      ),
      width: 'small-width-cell',
    },
  ];

  return (
    <div className="documents-page">
      <div className="header-table-ant">
        <DataTable<DocumentsResponse>
          data={documents}
          columns={columns}
          table_title="Document Management"
          button={
            <CustomButton
              variant="solid"
              color="green"
              title="Add Document"
              icon={MdEditSquare}
              onClick={handleOpenEditModal}
            />
          }
        />
      </div>

      <DocumentsEditForm
        isOpen={openEditModal}
        onClose={handleCloseEditModal}
      />

      <DeleteDocumentsConfirm
        isOpen={openDeleteModal}
        onClose={handleCloseDeleteModal}
      />

      <DocumentsView
        isOpen={openDetailsModal}
        onClose={handleCloseDetailsModal}
      />
    </div>
  );
};

export default DocumentsPage;
