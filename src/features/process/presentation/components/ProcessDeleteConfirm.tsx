import React from 'react';
import { MdClose, MdDeleteForever } from 'react-icons/md';
import './ProcessDeleteConfirm.css';
import ConfirmDialog from '@/shared/components/dialog/ConfirmDialog';

interface DeleteProcessConfirmProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteProcessConfirm: React.FC<DeleteProcessConfirmProps> = ({
  isOpen,
  onClose,
}) => {
  const handleCancel = () => {
    console.log('Cancel clicked');
    onClose();
  };
  const handleConfirm = () => {
    console.log('Delete confirmed');
    onClose();
  };

  return (
    <ConfirmDialog
      isOpen={isOpen}
      title="Confirm Deletion"
      message="Are you sure you want to delete this Process?"
      confirmText="Delete"
      cancelText="Cancel"
      confirmIcon={MdDeleteForever}
      cancelIcon={MdClose}
      confirmColor="red"
      cancelColor="blue"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

export default DeleteProcessConfirm;
