import React, { useState } from 'react';
import CustomModal from '../modal/CustomModal';
import { MdOutlineLaptopMac, MdOutlineRefresh } from 'react-icons/md';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { FcExpired } from 'react-icons/fc';
import { CustomButton } from '../button/Button';
import { BiExit } from 'react-icons/bi';
import './ExpiredSession.css';

interface ExpiredSessionProps {
  open?: boolean;
  onExit?: () => Promise<void>;
  onRefresh?: () => Promise<boolean>; // Cambiado a Promise<boolean> para manejar el resultado
}

const ExpiredSession: React.FC<ExpiredSessionProps> = ({
  open = true,
  onExit,
  onRefresh,
}) => {
  const isRefreshAvailable = !!onRefresh;
  const [loading, setLoading] = useState(false); // Estado para deshabilitar botones durante refresh
  const [loadingRefresh, setLoadingRefresh] = useState(false); // Estado para deshabilitar botones durante refresh
  const [loadingExit, setLoadingExit] = useState(false); // Estado para deshabilitar botones durante refresh

  const handleRefresh = async () => {
    if (!onRefresh || loading) return;
    setLoading(true);
    setLoadingRefresh(true);
    try {
      const success = await onRefresh();
      if (!success) {
        console.log('Refresh failed, keeping modal open');
      }
    } catch (error) {
      console.error('Error during refresh:', error);
    } finally {
      setLoading(false);
      setLoadingRefresh(false);
    }
  };

  const handleExit = async () => {
    if (!onExit || loading) return;
    try {
      setLoading(true);
      setLoadingExit(true);
      await onExit?.();
    } catch (error) {
      console.log(`Logout failed!`);
    } finally {
      setLoading(false);
      setLoadingExit(false);
    }
  };

  return (
    <CustomModal isOpen={open} title="">
      <div className="expired-session-container">
        <div className="expired-session-laptop">
          <div className="laptop-icon">
            <MdOutlineLaptopMac className="expired-session-icon-laptop" />
            <HiOutlineFaceSmile className="expired-session-icon-smile" />
          </div>
          <FcExpired className="expired-session-icon-warning" />
        </div>
        <div className="expired-session-message">
          <h2>
            {isRefreshAvailable
              ? 'Your session has expired'
              : 'Your session has fully expired'}
          </h2>
          <p>
            {isRefreshAvailable
              ? 'Please refresh the page. Don’t worry, we kept all of your filters and breakdowns intact, so you can continue where you left off.'
              : 'Your session and refresh token have expired. Please log in again.'}
          </p>
        </div>
        <div className="form-actions">
          <div className="form-actions-buttons">
            {isRefreshAvailable && (
              <CustomButton
                variant="solid"
                color="blue"
                title="Refresh"
                onClick={handleRefresh}
                icon={MdOutlineRefresh}
                disabled={loading} // Deshabilitar durante refresh
                loading={loadingRefresh}
              />
            )}
            <CustomButton
              variant="solid"
              color="red"
              title="Exit"
              onClick={handleExit}
              icon={BiExit}
              disabled={loading} // Deshabilitar durante refresh
              loading={loadingExit}
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default ExpiredSession;
