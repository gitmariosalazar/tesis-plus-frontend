import { Modal } from 'antd';
import React from 'react';
import { ToastContainer } from 'react-toastify';

interface CustomModalProps {
  isOpen?: boolean;
  title?: string;
  children?: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen = false,
  title = '',
  children,
}) => {
  return (
    <Modal centered title={title} open={isOpen} footer={null} closable={false}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Modal>
  );
};

export default CustomModal;
