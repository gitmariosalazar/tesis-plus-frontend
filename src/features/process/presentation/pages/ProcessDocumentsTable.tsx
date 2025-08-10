import { ProcessDocumentResponse } from '@/domain/services/docs/process-docs/dto/response/process-document.response';
import { processDocumentsData } from '@/shared/api/data/process-documents';
import { CustomButton } from '@/shared/components/button/Button';
import DataTable, { Column } from '@/shared/components/table/DataTable';
import { Tag } from 'antd';
import React, { useState } from 'react';
import {
  MdDeleteForever,
  MdEditSquare,
  MdOutlineAddTask,
  MdOutlinePreview,
  MdRefresh,
} from 'react-icons/md';
import { RiFileSettingsFill } from 'react-icons/ri';
import OptionsProcess from '../components/Options';
import { FaFilePdf } from 'react-icons/fa6';
import './ProcessDocumentTable.css';
import { DocumentsResponse } from '@/domain/services/docs/documents/dto/response/documents.response';

const ProcessDocumentsTable = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleOpenDetailsModal = () => {
    setOpenDetailsModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleCloseDetailsModal = () => {
    setOpenDetailsModal(false);
  };

  const processDocumentsList: ProcessDocumentResponse[] = processDocumentsData;

  const columns: Column<ProcessDocumentResponse>[] = [
    {
      header: 'ID',
      value: 'idProcessDocument',
      width: 'very-small-width-cell',
    },
    {
      header: 'CODE',
      value: 'process.processNumber',
      width: 'very-small-width-cell',
    },
    {
      header: 'Value',
      value: 'process.value',
      width: 'very-small-width-cell',
    },
    {
      header: 'Category',
      value: 'process.category',
      width: 'small-width-cell',
    },
    {
      header: 'Process Object',
      value: 'process.processObject',
      width: 'small-width-cell',
    },
    {
      header: 'Time Execution',
      value: 'process.timeExecution',
      width: 'small-width-cell',
    },
    {
      header: 'Manager',
      value: 'process.fullNameManager',
      width: 'small-width-cell',
    },
    {
      header: 'Entity',
      value: 'process.entity.name',
      width: 'small-width-cell',
    },
    {
      header: 'Is Active',
      value: 'process.isActive',
      render: (value: boolean) => (
        <Tag color={value ? 'green' : 'red'}>
          {value ? 'active' : 'inactive'}
        </Tag>
      ),
      width: 'very-small-width-cell',
    },
    {
      header: 'Document',
      value: 'document',
      render: (doc: DocumentsResponse) => (
        <a
          href={doc.documentUrl}
          target="_blank"
          className="file-url"
          rel="noopener noreferrer"
        >
          <CustomButton
            tooltip={doc.name}
            icon={FaFilePdf}
            color="cyan"
            variant="filled"
          />
        </a>
      ),
      width: 'very-small-width-cell',
    },
    {
      header: 'Options',
      value: 'options' as keyof ProcessDocumentResponse,
      render: () => (
        <div className="custom-table-options">
          <div className="table-options">
            <CustomButton
              tooltip="Edit Process"
              variant="filled"
              color="green"
              icon={MdEditSquare}
              onClick={handleOpenEditModal}
            />
            <CustomButton
              tooltip="Delete Process"
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
            <OptionsProcess activePage={() => console.log('Active')}>
              <CustomButton
                tooltip="Settings"
                variant="filled"
                color="blue"
                icon={RiFileSettingsFill}
              />
            </OptionsProcess>
          </div>
        </div>
      ),
      width: 'small-width-cell',
    },
  ];

  return (
    <div className="process">
      <div className="header-table-ant">
        <DataTable<ProcessDocumentResponse>
          data={processDocumentsList}
          columns={columns}
          table_title="Process Documents Management"
          component={
            <>
              <CustomButton
                variant="solid"
                color="green"
                title="Add Process"
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
      </div>
    </div>
  );
};

export default ProcessDocumentsTable;
