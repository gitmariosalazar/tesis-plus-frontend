import { CustomButton } from '@/shared/components/button/Button';
import InputLabel from '@/shared/components/input/InputLabel';
import SelectMultipleOption from '@/shared/components/input/SelectMultipleOption';
import { FaSave } from 'react-icons/fa';
import { MdCancel, MdVpnKey } from 'react-icons/md';
import '../styles/UserChangePermission.css';

const UserChangePermission = () => {
  return (
    <div className="change-permission-content">
      <h2 className="change-permission-title">
        Update Permissions
        <p className="profile-title-description">
          Last change permission 2 months ago.
        </p>
      </h2>
      <form onSubmit={() => {}} className="change-permission-form">
        <SelectMultipleOption />
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
        <div className="buttons-change-permission">
          <CustomButton
            tooltip="Save permission"
            title="Save permission"
            icon={FaSave}
            color="green"
            variant="solid"
          />
          <CustomButton
            tooltip="Cancel"
            title="Cancel"
            icon={MdCancel}
            color="red"
            variant="solid"
          />
        </div>
      </form>
    </div>
  );
};

export default UserChangePermission;
