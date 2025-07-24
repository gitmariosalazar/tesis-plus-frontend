import { BrowserRouter, HashRouter, useRoutes } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { routes } from './routes/index.routes';
import '../styles/toast.css';

function AppRoutes() {
  const routing = useRoutes(routes);
  return routing;
}

export function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthProvider>
    </HashRouter>
  );
}
