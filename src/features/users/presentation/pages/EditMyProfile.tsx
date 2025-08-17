import React from 'react';
import UserEditForm from '../components/UserEditForm';
import '../styles/EditMyProfile.css';
import EditMyProfileForm from '../components/EditMyProfileForm';

const EditMyProfile = () => {
  return (
    <div className="profile-page">
      <div className="profile-content">
        <div className="profile-box">
          <h2 className="profile-title">
            Change My Profile
            <p className="profile-title-description">
              Update your profile information below.
            </p>
          </h2>
          <div className="edit-profile">
            <EditMyProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMyProfile;
