import { useAuthContext } from '@/app/providers/AuthProvider';
import ExpiredSession from '@/shared/components/expired-session/ExpiredSession';
import { MessageToastCustom } from '@/shared/components/toast/CustomMessageToast';
import { useNavigate } from 'react-router-dom';

interface LogoutExpiredSessionFormProps {
  sessionStatus: 'expired' | 'refreshFailed' | 'disabled';
  open: boolean;
}

const LogoutExpiredSessionForm: React.FC<LogoutExpiredSessionFormProps> = ({
  sessionStatus,
  open,
}) => {
  const { setUser, setIsAuthenticated, refreshUser } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
    MessageToastCustom(
      'error',
      'Session Expired',
      'Your session has fully expired. Please log in again.',
      'top-right'
    );
  };

  const refresh = async (): Promise<boolean> => {
    try {
      await refreshUser();
      return true; // Indica éxito
    } catch (err) {
      console.error('Refresh failed:', err);
      return false; // Indica fallo
    }
  };

  return (
    <ExpiredSession
      open={open}
      onRefresh={sessionStatus === 'expired' ? refresh : undefined}
      onExit={async () => logout()}
    />
  );
};

export default LogoutExpiredSessionForm;
