import { UserResponse } from '@/domain/services/security/users/dto/response/user.response';
import OptionsProcess from '@/features/process/presentation/components/Options';
import { users } from '@/shared/api/data/users';
import { CustomButton } from '@/shared/components/button/Button';
import DataTable, { Column } from '@/shared/components/table/DataTable';
import React from 'react';
import {
  MdDeleteForever,
  MdEditSquare,
  MdOutlineAddTask,
  MdOutlinePreview,
} from 'react-icons/md';
import { RiFileSettingsFill } from 'react-icons/ri';
import UserEditForm from '../components/UserEditForm';
import UserView from '../components/UserView';
import DeleteUserConfirm from '../components/UserDeleteConfirm';
import { FaCheckSquare, FaWindowClose } from 'react-icons/fa';

const UsersTable = () => {
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openDetailsModal, setOpenDetailsModal] = React.useState(false);

  const handleOpenDetailsModal = () => {
    setOpenDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setOpenDetailsModal(false);
  };

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

  const usersData: UserResponse[] = users;

  const columns: Column<UserResponse>[] = [
    { header: 'ID', value: 'idUser', sortable: true },
    {
      header: 'Email',
      value: 'userEmail',
      sortable: true,
      width: 'medium-width-cell',
    },
    {
      header: 'First Name',
      value: 'firstName',
      sortable: true,
      width: 'very-small-width-cell',
    },
    {
      header: 'Last Name',
      value: 'lastName',
      sortable: true,
      width: 'very-small-width-cell',
    },
    {
      header: 'Active',
      value: 'userActive',
      render: (value: boolean) => (
        <CustomButton
          tooltip={value ? 'Active' : 'Inactive'}
          variant="filled"
          color={value ? 'green' : 'red'}
          icon={value ? FaCheckSquare : FaWindowClose}
          onClick={handleOpenDeleteModal}
        />
      ),
      width: 'very-small-width-cell',
    },
    {
      header: 'User Type ID',
      value: 'userType.name',
      sortable: true,
      width: 'very-small-width-cell',
    },
    {
      header: 'Options',
      value: 'options' as keyof UserResponse,
      render: () => (
        <div className="custom-table-options">
          <div className="table-options">
            <CustomButton
              tooltip="Edit User"
              variant="filled"
              color="green"
              icon={MdEditSquare}
              onClick={handleOpenEditModal}
            />
            <CustomButton
              tooltip="Delete User"
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
    <div className="users-table">
      <div className="header-table-ant">
        <DataTable<UserResponse>
          data={usersData}
          columns={columns}
          table_title="Users Management"
          button={
            <CustomButton
              variant="solid"
              color="green"
              title="Add User"
              icon={MdOutlineAddTask}
            />
          }
        />
        <UserEditForm isOpen={openEditModal} onClose={handleCloseEditModal} />
        <UserView isOpen={openDetailsModal} onClose={handleCloseDetailsModal} />
        <DeleteUserConfirm
          isOpen={openDeleteModal}
          onClose={handleCloseDeleteModal}
        />
      </div>
    </div>
  );
};

export default UsersTable;
