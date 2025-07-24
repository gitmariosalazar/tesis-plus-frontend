import { icons } from '@/assets/assets';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-left">
        <div className="logo-info">
          <p>Welcome to the public procurement control and monitoring system</p>
        </div>
        <img src={icons.backend} alt="Entity Logo" className="logo-entity" />
      </div>

      <div className="login-right">
        <div className="login-container">
          <h3 className="login-title">
            Sign In Page
            <div className="logo-user">
              <img
                src={icons.user_icon}
                alt="User Icon"
                className="logo-signin"
              />
            </div>
          </h3>

          <LoginForm />

          <div className="input-box fp-content">
            <Link to="/register" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

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
            <p>Don't have an account?</p>
            <Link to="/register" className="sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
