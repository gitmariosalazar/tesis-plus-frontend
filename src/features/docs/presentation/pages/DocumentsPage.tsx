import { CustomButton } from '@/shared/components/button/Button';
import StatusBadge from '@/shared/components/status/StatusBadge';
import DataTable, { Column } from '@/shared/components/table/DataTable';
import React from 'react';
import {
  MdDeleteForever,
  MdEditSquare,
  MdOutlinePreview,
} from 'react-icons/md';
import DocumentsEditForm from '../components/DocumentsEditForm';
import DeleteDocumentsConfirm from '../components/DocumentsDeleteConfirm';
import DocumentsView from '../components/DocumentsView';
import { documentsData } from '@/shared/api/data/documents';

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

  interface Document {
    process_code: string;
    document_title: string;
    file: string;
    isvalid: boolean;
    date: string;
    status: {
      code: number;
      name: string;
    };
  }

  const documents: Document[] = documentsData; // Replace with actual data

  // Define columns for the document table
  const columns: Column<Document>[] = [
    { header: 'Document ID', value: 'process_code', sortable: true },
    { header: 'Title', value: 'document_title', sortable: true },
    { header: 'File URL', value: 'file', sortable: true },
    { header: 'Valid', value: 'isvalid', sortable: true },
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
    },
  ];

  return (
    <div className="documents-page">
      <div className="header-table-ant">
        <DataTable<Document>
          data={documents} // Replace with actual data
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
