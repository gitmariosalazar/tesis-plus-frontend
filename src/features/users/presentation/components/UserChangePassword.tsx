import InputLabel from '@/shared/components/input/InputLabel';
import React from 'react';
import { PiLockKeyFill } from 'react-icons/pi';
import { MdVpnKey } from 'react-icons/md';
import '../styles/UserChangePassword.css';
import { CustomButton } from '@/shared/components/button/Button';
import { FaSave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserChangePassword = () => {
  return (
    <div className="change-password-content">
      <h2 className="change-password-title">
        Update Password
        <p className="profile-title-description">
          Last change password 16 days ago.
        </p>
      </h2>
      <form onSubmit={() => {}} className="change-password-form">
        <InputLabel
          label="Old Password"
          type="password"
          name="old-password"
          placeholder="Type your old password"
          value="old-password"
          onChange={() => {}}
          required
          leftIcon={PiLockKeyFill}
        />
        <InputLabel
          label="New Password"
          type="password"
          name="new-password"
          placeholder="Type your new password"
          value="new-password"
          onChange={() => {}}
          required
          leftIcon={MdVpnKey}
        />
        <InputLabel
          label="Confirm New Password"
          type="password"
          name="confirm-new-password"
          placeholder="Confirm your new password"
          value="confirm-new-password"
          onChange={() => {}}
          required
          leftIcon={MdVpnKey}
        />
        <div className="buttons-change-password">
          <CustomButton
            tooltip="Change password"
            title="Update Password"
            icon={FaSave}
            color="green"
            variant="solid"
          />
          <Link className="forgot-password-option" to={'/password-reset'}>
            I forgot my password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserChangePassword;
