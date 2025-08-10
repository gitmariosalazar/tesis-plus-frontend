import React, { useRef, useState } from 'react';
import './MyProfile.css';
import { CustomButton } from '@/shared/components/button/Button';
import { FaEdit } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';

const MyProfile = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fullName = 'Mario Salazar';

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getInitial = (name: string) => {
    return name?.charAt(0)?.toUpperCase() || '';
  };

  return (
    <div className="profile-page">
      <div className="profile-content">
        <div className="profile-box">
          <h2 className="profile-title">
            Basic Info
            <p className="profile-title-description">
              Some info may be visible to other people using this services.
            </p>
          </h2>

          <div className="profile-row">
            <div className="profile-field">
              <p>Profile Picture</p>
              <span>Add a profile picture</span>
            </div>
            <div className="picture-content">
              <div onClick={handleImageClick} className="avatar-wrapper">
                {imageSrc ? (
                  <img src={imageSrc} alt="Profile" />
                ) : (
                  getInitial(fullName)
                )}
              </div>

              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="profile-row">
            <p>Full Name:</p>
            <span>Mario Salazar</span>
          </div>
          <div className="profile-row">
            <p>Birthday:</p>
            <span>February 2, 1995</span>
          </div>
          <div className="edit-profile-option">
            <CustomButton
              tooltip="Edit User"
              title="Edit"
              icon={FaEdit}
              color="green"
              variant="dashed"
            />
          </div>
        </div>
        <div className="profile-box">
          <h2 className="profile-title">
            Contact Info
            <p className="profile-title-description">
              Some info may be visible to other people using this services.
            </p>
          </h2>
          <div className="profile-row">
            <p>Email:</p>
            <span>mariosalazar.ms.10@gmail.com</span>
          </div>
          <div className="profile-row">
            <p>Phone Number:</p>
            <span>+593994532438</span>
          </div>
          <div className="edit-profile-option">
            <CustomButton
              tooltip="Edit User"
              title="Edit"
              icon={FaEdit}
              color="green"
              variant="dashed"
            />
          </div>
        </div>
        <div className="profile-box">
          <h2 className="profile-title">
            Address Info
            <p className="profile-title-description">
              Some info may be visible to other people using this services.
            </p>
          </h2>
          <div className="profile-row">
            <p>Home:</p>
            <span>Ibarra - El Tejar</span>
          </div>
          <div className="profile-row">
            <p>Work:</p>
            <span>No set</span>
          </div>
          <div className="edit-profile-option">
            <CustomButton
              tooltip="Edit User"
              title="Edit"
              icon={FaEdit}
              color="green"
              variant="dashed"
            />
          </div>
        </div>
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
          <div className="edit-profile-option">
            <CustomButton
              tooltip="Go to Security"
              title="Go to Security"
              icon={MdSecurity}
              color="magenta"
              variant="dashed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
