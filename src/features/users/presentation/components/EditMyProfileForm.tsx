import { CustomButton } from '@/shared/components/button/Button';
import InputLabel from '@/shared/components/input/InputLabel';
import React from 'react';
import {
  FaAddressCard,
  FaKey,
  FaPhoneSquare,
  FaSave,
  FaUserEdit,
} from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';
import { MdCancel, MdEmail } from 'react-icons/md';
import { useLoginForm } from '@/features/auth/application/hooks/useLoginForm';

const EditMyProfileForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    loading,
    //error,
  } = useLoginForm();
  return (
    <div>
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <div className="input-fields-container-signup">
          <InputLabel
            label="First Name"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={email} // Assuming you want to use email as username for simplicity
            onChange={(e) => setEmail(e.target.value)}
            required
            leftIcon={FaUserEdit}
            rightIcon={undefined}
            resetError={() => {}}
            validator={() => true}
            className="grid-half"
          />

          <InputLabel
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={email} // Assuming you want to use email as username for simplicity
            onChange={(e) => setEmail(e.target.value)}
            required
            leftIcon={FaUserEdit}
            rightIcon={undefined}
            resetError={() => {}}
            validator={() => true}
            className="grid-half"
          />

          <InputLabel
            label="Card Id"
            type="text"
            name="cardId"
            placeholder="Enter your card ID"
            value={email} // Assuming you want to use email as username for simplicity
            onChange={(e) => setEmail(e.target.value)}
            required
            leftIcon={FaAddressCard}
            rightIcon={undefined}
            resetError={() => {}}
            validator={() => true}
            className="grid-half"
          />

          <InputLabel
            label="Phone Number"
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={email} // Assuming you want to use email as username for simplicity
            onChange={(e) => setEmail(e.target.value)}
            required
            leftIcon={FaPhoneSquare}
            rightIcon={undefined}
            resetError={() => {}}
            validator={() => true}
            className="grid-half"
          />

          <InputLabel
            label="Email Address"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            leftIcon={MdEmail}
            rightIcon={undefined}
            resetError={() => {}}
            validator={() => true}
            className="grid-full"
          />

          <InputLabel
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            leftIcon={FaKey}
            rightIcon={undefined}
            resetError={() => {}}
            validator={() => true}
            className="grid-full"
          />
          <InputLabel
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            leftIcon={FaKey}
            rightIcon={undefined}
            resetError={() => {}}
            validator={() => true}
            className="grid-full"
          />
        </div>
        <div className="buttons-change-permission">
          <CustomButton
            tooltip="Save permission"
            title="Save"
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

export default EditMyProfileForm;
