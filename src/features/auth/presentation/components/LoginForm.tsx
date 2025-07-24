import { CustomButton } from '@/shared/components/button/Button';
import { useLoginForm } from '../../application/hooks/useLoginForm';
import InputLabel from '@/shared/components/input/InputLabel';
import { MdEmail } from 'react-icons/md';
import { PiLockKeyFill } from 'react-icons/pi';
import { FaSignInAlt } from 'react-icons/fa';
import './LoginForm.css';

const LoginForm = () => {
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
    <form onSubmit={handleSubmit} className="login-form">
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
      />
      <InputLabel
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        leftIcon={PiLockKeyFill}
        rightIcon={undefined}
        resetError={() => {}}
        validator={() => true}
      />
      <div className="button-sign-in">
        <CustomButton
          title="Sign In"
          icon={FaSignInAlt}
          loading={loading}
          disabled={loading}
          typeHtml="submit"
          color="pink"
          variant="outlined"
          className="btn-login-page"
        />
      </div>
    </form>
  );
};

export default LoginForm;
