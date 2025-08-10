import { useNavigate } from 'react-router-dom';
import '../styles/NotFoundPage.css';
import { FcCancel, FcHome } from 'react-icons/fc';
import { CustomButton } from '@/shared/components/button/Button';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <FcCancel size={100} />
      <h1>Oops!</h1>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <CustomButton
        onClick={() => navigate('/')}
        title="Go to Home"
        color="purple"
        variant="filled"
        icon={FcHome}
      ></CustomButton>
    </div>
  );
}
