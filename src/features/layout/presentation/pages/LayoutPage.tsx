import React, { useState } from 'react';
import './LayoutPage.css';
import MenuLayout from '../components/Menu';
import { IoNotifications } from 'react-icons/io5';
import UserMenu from '@/shared/components/user/UserMenu';
import { useAuthContext } from '@/app/providers/AuthProvider';
import { icons } from '@/assets/assets';
import ProductTable, {
  InvoiceTable,
} from '@/features/invoices/presentation/pages/InvoiceTable';
import NotificationsDrawer from '@/features/notifications/presentation/pages/NotificationsDrawer';
import SearchButton from '@/shared/components/search/ButtonSearch';
import ProcessTable from '@/features/process/presentation/pages/ProcessTable';
import { DashboardPage } from '@/features/dashboard/presentation/pages/DashboardPage';
import DocumentsPage from '@/features/docs/presentation/pages/DocumentsPage';
import NotificationTable from '@/features/notifications/presentation/pages/NotificationTable';
import UsersTable from '@/features/users/presentation/pages/UsersTable';

const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuthContext();
  const [activePage, setActivePage] = useState<string>('dashboard');

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'viewProcess':
        return <ProcessTable />;
      case 'invoices':
        return <InvoiceTable />;
      case 'documents':
        return <DocumentsPage />;
      case 'notifications':
        return <NotificationTable />;
      case 'users':
        return <UsersTable />;
      case 'processMonitoring':
        return <div>Process Monitoring Content</div>;
      case 'editUser':
        return <div>Edit User Content</div>;
      case 'security':
        return <div>Security Settings Content</div>;
      case 'profile':
        return <div>Profile Content</div>;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className={`layout-page ${collapsed ? 'collapsed' : ''}`}>
      <aside className="aside-layout">
        <MenuLayout
          collapsed={collapsed}
          onToggle={toggleCollapsed}
          onMenuClick={setActivePage}
        />
      </aside>
      <header className="header-page">
        <div className="header-page-box">
          {/*
          <div className="header-page-search">
            <SearchButton classname="search-button" />
          </div>
          */}

          <NotificationsDrawer />
          <UserMenu
            user={user!}
            onLogout={logout}
            onProfile={() => console.log('Go to profile')}
            onChangePassword={() => console.log('Change password')}
          />
        </div>
      </header>
      <main className="main-layout">
        <div className="content">{renderContent()}</div>
      </main>
      <footer className="footer-layout">Footer Content</footer>
    </div>
  );
};

export default LayoutPage;
