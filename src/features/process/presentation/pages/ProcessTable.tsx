import { MdOutlineAddTask } from 'react-icons/md';
import { CustomButton } from '../../../../shared/components/button/Button';
import StatusBadge from '../../../../shared/components/status/StatusBadge';
import '../../../../styles/Table.css';
import {
  MdEditSquare,
  MdDeleteForever,
  MdOutlinePreview,
} from 'react-icons/md';
import { RiFileSettingsFill } from 'react-icons/ri';
import { useState } from 'react';
import InvoiceEditForm from '../components/ProcessEditForm';
import DeleteProcessConfirm from '../components/ProcessDeleteConfirm';
import OptionsProcess from '../components/Options';
import ProcessView from '../components/ProcessView';
import DataTable, { Column } from '@/shared/components/table/DataTable';
import { processData } from '@/shared/api/data/process';

export const ProcessTable = () => {
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

  interface Process {
    process_code: string;
    entity: string;
    object_process: string;
    date: string;
    status: {
      code: number;
      name: string;
    };
  }

  const invoices: Process[] = processData;

  const columns: Column<Process>[] = [
    { header: 'Process Code', value: 'process_code', sortable: true },
    { header: 'Entity Name', value: 'entity', sortable: true },
    { header: 'Entity', value: 'entity', sortable: true },
    { header: 'Process Object', value: 'object_process', sortable: true },
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
      value: 'options' as keyof Process,
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
    },
  ];

  return (
    <div className="process">
      <div className="header-table-ant">
        <DataTable<Process>
          data={processData}
          columns={columns}
          table_title="Process reviews Management"
          button={
            <CustomButton
              variant="solid"
              color="green"
              title="Add Process"
              icon={MdOutlineAddTask}
            />
          }
        />

        <InvoiceEditForm
          isOpen={openEditModal}
          onClose={handleCloseEditModal}
        />
        <DeleteProcessConfirm
          isOpen={openDeleteModal}
          onClose={handleCloseDeleteModal}
        />
        <ProcessView
          isOpen={openDetailsModal}
          onClose={handleCloseDetailsModal}
        />
      </div>
    </div>
  );
};

export default ProcessTable;
