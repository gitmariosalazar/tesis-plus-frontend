import React, { useRef, useState } from 'react';
import './MyProfile.css';
import { CustomButton } from '@/shared/components/button/Button';
import { FaUserLock, FaUserShield } from 'react-icons/fa';
import UserChangePassword from '../components/UserChangePassword';

const Security = () => {
  return (
    <div className="profile-page">
      <div className="profile-content">
        <div className="profile-box">
          <h2 className="profile-title">
            Security Info
            <p className="profile-title-description">
              A secure password helps protect your Account.
            </p>
          </h2>

          <div className="profile-row">
            <p>*****************</p>
            <span>Last changed October 25, 2025</span>
          </div>
          <div className="profile-row">
            <p>User Type:</p>
            <span>Admin User</span>
          </div>
          <div className="profile-row">
            <p>Permission:</p>
            <span>Admin User</span>
          </div>
          <div className="edit-profile-option">
            <CustomButton
              tooltip="Change password"
              title="Update Password"
              icon={FaUserLock}
              color="green"
              variant="dashed"
            />
            <CustomButton
              tooltip="Change Permissions"
              title="Update Permission"
              icon={FaUserShield}
              color="cyan"
              variant="dashed"
            />
          </div>
        </div>
        <div className="profile-box security-option">
          <UserChangePassword />
        </div>
      </div>
    </div>
  );
};

export default Security;
