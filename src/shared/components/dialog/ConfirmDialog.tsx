import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import CustomModal from '@/shared/components/modal/CustomModal';
import { CustomButton } from '@/shared/components/button/Button';
import './ConfirmDialog.css';
import { ColorBtn } from '@/shared/types/button.types';
import { IconType } from 'react-icons';

interface ConfirmDialogProps {
  isOpen: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  iconDialog?: IconType;
  confirmIcon?: IconType;
  cancelIcon?: IconType;
  confirmColor?: ColorBtn;
  cancelColor?: ColorBtn;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  title = 'Confirm Action',
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  iconDialog,
  confirmIcon,
  cancelIcon = MdClose,
  confirmColor = 'red',
  cancelColor = 'blue',
  onConfirm,
  onCancel,
}) => {
  const ConfirmIconComponent = iconDialog || FaQuestion;

  return (
    <CustomModal isOpen={isOpen} title={title}>
      <div className="confirm-dialog-container">
        <div className="confirm-dialog-content">
          <div>
            <div className="icon-question">
              <ConfirmIconComponent size={24} />
            </div>
            <p>{message}</p>
          </div>
        </div>
        <div className="form-actions">
          <div className="form-actions-buttons">
            <CustomButton
              variant="filled"
              color={confirmColor}
              title={confirmText}
              onClick={onConfirm}
              icon={confirmIcon}
            />
            <CustomButton
              variant="filled"
              color={cancelColor}
              title={cancelText}
              onClick={onCancel}
              icon={cancelIcon}
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default ConfirmDialog;
