import React from 'react';
import UserEditForm from '../components/UserEditForm';
import '../styles/EditMyProfile.css';
import EditMyProfileForm from '../components/EditMyProfileForm';

const EditMyProfile = () => {
  return (
    <div className="edit-profile">
      <div className="form-edit-profile">
        <EditMyProfileForm />
      </div>
    </div>
  );
};

export default EditMyProfile;
