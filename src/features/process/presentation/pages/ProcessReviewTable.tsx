import { ProcessReviewResponse } from '@/domain/services/docs/process-review/dto/response/process-review.response';
import { processReviewData } from '@/shared/api/data/process-review';
import { useState } from 'react';
import DataTable, { Column } from '@/shared/components/table/DataTable';
import { CustomButton } from '@/shared/components/button/Button';
import { FaSquareCheck } from 'react-icons/fa6';
import { IoMdCloseCircle } from 'react-icons/io';
import {
  MdDeleteForever,
  MdEditSquare,
  MdOutlineAddTask,
  MdOutlinePreview,
  MdRefresh,
} from 'react-icons/md';
import { RiFileSettingsFill } from 'react-icons/ri';
import OptionsProcess from '../components/Options';

export const ProcessReviewTable = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);

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

  const processReviewList: ProcessReviewResponse[] = processReviewData;

  const columns: Column<ProcessReviewResponse>[] = [
    {
      header: 'ID',
      value: 'idProcessReview',
      sortable: true,
      width: 'very-small-width-cell',
    },
    {
      header: 'Entity',
      value: 'process.entity.name',
      sortable: true,
      width: 'small-width-cell',
    },
    {
      header: 'Is Active',
      value: 'isActive',
      render: (value: boolean) =>
        value ? (
          <>
            <CustomButton
              tooltip="Active"
              color="green"
              variant="filled"
              icon={FaSquareCheck}
              title=""
            />
          </>
        ) : (
          <>
            <CustomButton
              tooltip="Inactive"
              color="red"
              variant="filled"
              icon={IoMdCloseCircle}
              title=""
            />
          </>
        ),
      width: 'very-small-width-cell',
    },
    {
      header: 'Is Selected',
      value: 'isSelected',
      render: (value: boolean) =>
        value ? (
          <>
            <CustomButton
              tooltip="Is Selected"
              color="green"
              variant="filled"
              icon={FaSquareCheck}
              title=""
            />
          </>
        ) : (
          <>
            <CustomButton
              color="red"
              tooltip="No Selected"
              variant="filled"
              icon={IoMdCloseCircle}
              title=""
            />
          </>
        ),
      width: 'very-small-width-cell',
    },
    {
      header: 'Register Date',
      value: 'createdAt',
      render: (date: Date | string) => (
        <>
          <span>{new Date(date).toLocaleString()}</span>
        </>
      ),
      width: 'small-width-cell',
    },
    {
      header: 'Category',
      value: 'process.category',
      width: 'small-width-cell',
    },
    {
      header: 'Execution Time',
      value: 'process.timeExecution',
      width: 'very-small-width-cell',
    },
    {
      header: 'Manager',
      value: 'process.fullNameManager',
      width: 'small-width-cell',
    },
    {
      header: 'Options',
      value: 'options' as keyof ProcessReviewResponse,
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
        <DataTable<ProcessReviewResponse>
          data={processReviewList}
          columns={columns}
          table_title="Process Review Management"
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
