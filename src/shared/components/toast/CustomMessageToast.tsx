import { toast } from 'react-toastify';
import { FcInfo, FcOk } from 'react-icons/fc';
import { TiWarning } from 'react-icons/ti';
import type { ToastPosition } from 'react-toastify';
import { MdCancel, MdError } from 'react-icons/md';

type CustomToastProps = {
  title: string;
  icon: string;
  message: string;
};

const CustomToast = ({ title, icon, message }: CustomToastProps) => {
  let IconComponent;
  switch (icon) {
    case 'success':
      IconComponent = FcInfo;
      break;
    case 'info':
      IconComponent = FcOk;
      break;
    case 'warning':
      IconComponent = TiWarning;
      break;
    case 'error':
      IconComponent = MdError;
      break;
    case 'dark':
      IconComponent = FcOk;
      break;
    default:
      IconComponent = MdCancel;
  }

  return (
    <div className="container-toast">
      <div className="icon-toast pulse">
        <span className="material-symbols-outlined">
          <IconComponent />
        </span>
      </div>
      <div className="body-toast">
        <div className="title-toast">
          <p>{title}</p>
        </div>
        <div className="message-toast">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @param theme Theme for the toast, can be 'success', 'info', 'warning', 'error', or 'dark'.
 * @param message Message to display in the toast.
 * @param title Title of the toast.
 * @param position Position of the toast on the screen, can be 'top-right', 'top-left', 'bottom-right', 'bottom-left', etc.
 */
const MessageToastCustom = (
  theme: string,
  message: string,
  title: string,
  position: ToastPosition
) => {
  toast(<CustomToast title={title} icon={theme} message={message} />, {
    position: position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: theme,
    progress: undefined,
    style: {
      border: '1px solid rgba(211, 255, 12, 0.2)',
    },
  });
};

export { MessageToastCustom };
