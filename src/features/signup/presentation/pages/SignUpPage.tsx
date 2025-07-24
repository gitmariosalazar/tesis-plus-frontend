import { icons } from '@/assets/assets';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import './SignUpPage.css';

export const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-left">
        <div className="logo-info">
          <p>Welcome to the public procurement control and monitoring system</p>
        </div>
        <img src={icons.backend} alt="Entity Logo" className="logo-entity" />
      </div>

      <div className="sign-up-right">
        <div className="sign-up-container">
          <h3 className="sign-up-title">
            Sign Un Page
            <div className="logo-user">
              <img
                src={icons.user_icon}
                alt="User Icon"
                className="logo-signin"
              />
            </div>
          </h3>

          <SignUpForm />

          <div className="continue-with">
            <hr />
            <p>Or continue with</p>
            <hr />
          </div>

          <div className="login-with">
            <div className="login-icons">
              {[icons.google, icons.microsoft, icons.twitter].map((icon, i) => (
                <div key={i} className="btns">
                  <img src={icon} alt="Auth provider" className="icon-login" />
                </div>
              ))}
            </div>
          </div>

          <div className="no-account">
            <p>Do you have an account?</p>
            <Link to="/login" className="sign-in">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
