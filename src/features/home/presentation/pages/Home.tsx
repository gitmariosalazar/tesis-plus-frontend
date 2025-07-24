import { CustomButton } from '@/shared/components/button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h1>Welcome to PLUS</h1>
      <img
        src="https://iplus.com.ec/static/media/plus_navbar.fa2bd3e327c45710a881.webp"
        alt=""
      />
      <p>
        This is the home page of the PLUS application. Here you can find various
        features and functionalities to enhance your experience.
      </p>
      <div className="btn-home-login">
        <CustomButton
          onClick={() => navigate('/login')}
          variant="solid"
          color="primary"
          disabled={false}
          title="Go to Login"
          className="custom-button"
          icon={BsArrowRightCircleFill}
        ></CustomButton>
      </div>
    </div>
  );
};

export default Home;
