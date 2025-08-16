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
import { ProcessReviewTable } from '@/features/process/presentation/pages/ProcessReviewTable';
import NoRecordsFound from '@/shared/components/not-found/presentation/pages/NoRecordsFound';
import ProcessDocumentsTable from '@/features/process/presentation/pages/ProcessDocumentsTable';
import LoadingGate from '@/shared/components/loading/LoadingGate';
import MyProfile from '@/features/users/presentation/pages/MyProfile';
import Security from '@/features/users/presentation/pages/Security';
import EditMyProfile from '@/features/users/presentation/pages/EditMyProfile';

const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuthContext();
  const [activePage, setActivePage] = useState<string>('dashboard');

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <LoadingGate>
            <DashboardPage />
          </LoadingGate>
        );
      case 'viewProcess':
        return (
          <LoadingGate>
            <ProcessTable />
          </LoadingGate>
        );
      case 'invoices':
        return (
          <LoadingGate>
            <InvoiceTable />
          </LoadingGate>
        );
      case 'documents':
        return (
          <LoadingGate>
            <DocumentsPage />
          </LoadingGate>
        );
      case 'notifications':
        return (
          <LoadingGate>
            <NotificationTable />
          </LoadingGate>
        );
      case 'users':
        return (
          <LoadingGate>
            <UsersTable />
          </LoadingGate>
        );
      case 'processMonitoring':
        return (
          <LoadingGate>
            <NoRecordsFound />
          </LoadingGate>
        );
      case 'editUser':
        return (
          <LoadingGate>
            <EditMyProfile />
          </LoadingGate>
        );
      case 'security':
        return (
          <LoadingGate>
            <Security />
          </LoadingGate>
        );
      case 'profile':
        return (
          <LoadingGate>
            <MyProfile />
          </LoadingGate>
        );
      case 'processReview':
        return (
          <LoadingGate>
            <ProcessReviewTable />
          </LoadingGate>
        );
      case 'processDocuments':
        return (
          <LoadingGate>
            <ProcessDocumentsTable />
          </LoadingGate>
        );
      default:
        return (
          <LoadingGate>
            <NoRecordsFound />
          </LoadingGate>
        );
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
