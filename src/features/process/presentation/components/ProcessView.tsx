import React from 'react';

import './ProcessView.css';
import CustomModal from '@/shared/components/modal/CustomModal';
import { CustomButton } from '@/shared/components/button/Button';
import { MdClose, MdSave } from 'react-icons/md';

interface ProcessViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProcessView: React.FC<ProcessViewProps> = ({ isOpen, onClose }) => {
  const handleCancel = () => {
    console.log('Cancel clicked');
    onClose(); // ✅ Llama a la función para cerrar modal
  };

  return (
    <CustomModal title="View Process by ID" isOpen={isOpen}>
      <div className="invoice-view-container">
        <p>Here you can view the details of the invoice.</p>

        <div className="detail-invoice">
          <p>
            <strong>Invoice ID:</strong> 12345
          </p>
          <p>
            <strong>Customer Name:</strong> John Doe
          </p>
          <p>
            <strong>Amount:</strong> $100.00
          </p>
          <p>
            <strong>Status:</strong> Paid
          </p>
          {/* Add more details as needed */}
        </div>

        <div className="form-actions">
          <div className="form-actions-buttons">
            <CustomButton
              variant="filled"
              color="blue"
              title="Close"
              icon={MdClose}
              onClick={handleCancel}
            />
            <CustomButton
              variant="filled"
              color="green"
              title="Save Changes"
              disabled={true}
              icon={MdSave}
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default ProcessView;
