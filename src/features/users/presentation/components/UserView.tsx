import React from 'react';

import CustomModal from '@/shared/components/modal/CustomModal';
import { CustomButton } from '@/shared/components/button/Button';
import { MdClose, MdSave } from 'react-icons/md';

interface UserViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserView: React.FC<UserViewProps> = ({ isOpen, onClose }) => {
  const handleCancel = () => {
    console.log('Cancel clicked');
    onClose(); // ✅ Llama a la función para cerrar modal
  };

  return (
    <CustomModal title="View User by ID" isOpen={isOpen}>
      <div className="user-view-container">
        <p>Here you can view the details of the Users.</p>

        <div className="user-details">
          <p>
            <strong>User ID:</strong> 12345
          </p>
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Role:</strong> Admin
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

export default UserView;
