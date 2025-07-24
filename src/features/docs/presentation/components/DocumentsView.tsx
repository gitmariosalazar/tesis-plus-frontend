import React from 'react';

import './DocumentsView.css';
import CustomModal from '@/shared/components/modal/CustomModal';
import { CustomButton } from '@/shared/components/button/Button';
import { MdClose, MdSave } from 'react-icons/md';

interface DocumentsViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentsView: React.FC<DocumentsViewProps> = ({ isOpen, onClose }) => {
  const handleCancel = () => {
    console.log('Cancel clicked');
    onClose(); // ✅ Llama a la función para cerrar modal
  };

  return (
    <CustomModal title="View Document by ID" isOpen={isOpen}>
      <div className="invoice-view-container">
        <p>Here you can view the details of the invoice.</p>

        <div className="detail-invoice">
          <p>
            <strong>Document ID:</strong> 12345
          </p>
          <p>
            <strong>Name:</strong> Sample Document
          </p>
          <p>
            <strong>URL:</strong> http://example.com/document/12345
          </p>
          <p>
            <strong>Owner:</strong> John Doe
          </p>
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

export default DocumentsView;
