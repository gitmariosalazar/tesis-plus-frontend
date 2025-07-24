import { icons } from '@/assets/assets';
import React from 'react';
import './UnAuthorizedPage.css';
import { CustomButton } from '../button/Button';
import { FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UnAuthorizedPage = () => {
  const navigate = useNavigate();
  return (
    <div className="unauthorized-page">
      <div className="unauthorized-photo">
        <img
          src={icons.webdevelopment}
          alt="Unauthorized Access"
          className="unauthorized-image"
        ></img>

        <div className="unauthorized-content-absolute">
          <img
            src={icons.password}
            alt="Unauthorized Access"
            className="unauthorized-image-absolute"
          />
        </div>
      </div>
      <h1 className="unauthorized-code">401</h1>
      <h2 className="unauthorized-title">Access Denied</h2>
      <p>Please contact your administrator if you believe this is an error.</p>

      <p className="unauthorized-text">
        If you are not authorized to access this page, please log in with the
        correct credentials.
      </p>
      <CustomButton
        title="Go to Login"
        icon={FaSignInAlt}
        color="purple"
        variant="filled"
        className="unauthorized-button"
        onClick={() => {
          navigate('/login');
        }}
      />
    </div>
  );
};

export default UnAuthorizedPage;
