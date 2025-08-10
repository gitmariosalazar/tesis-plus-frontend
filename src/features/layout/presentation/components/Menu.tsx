import React, { useEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import type { MenuProps } from 'antd';
import './Menu.css';
import { FaUsersCog, FaUserCog } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FaUserPen } from 'react-icons/fa6';
import { FaArrowsSpin } from 'react-icons/fa6';
import { FaFileInvoice, FaChartPie } from 'react-icons/fa';
import { SiGoogledocs } from 'react-icons/si';
import { MdNotificationsActive, MdOutlineSecurity } from 'react-icons/md';
import { TbDeviceImacSearch } from 'react-icons/tb';
import { BsFillClipboard2CheckFill } from 'react-icons/bs';
import { HiClipboardDocumentList } from 'react-icons/hi2';
import { MdOutlineContentPasteSearch } from 'react-icons/md';
import { IoIosListBox } from 'react-icons/io';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'dashboard',
    icon: <FaChartPie />,
    label: 'Dashboard',
    onClick: () => console.log('Dashboard clicked'),
  },
  {
    key: 'process',
    icon: <FaArrowsSpin />,
    label: 'My Process',
    children: [
      { key: 'viewProcess', label: 'View Process', icon: <IoIosListBox /> },
      {
        key: 'processReview',
        label: 'Process Review',
        icon: <BsFillClipboard2CheckFill />,
      },
      {
        key: 'processDocuments',
        label: 'Process Documents',
        icon: <HiClipboardDocumentList />,
      },
      {
        key: 'processSearch',
        label: 'Process Search',
        icon: <MdOutlineContentPasteSearch />,
      },
    ],
  },
  { key: 'invoices', icon: <FaFileInvoice />, label: 'My Invoices' },
  { key: 'documents', icon: <SiGoogledocs />, label: 'My Documents' },
  {
    key: 'notifications',
    icon: <MdNotificationsActive />,
    label: 'My Notifications',
  },
  { key: 'users', icon: <FaUsersCog />, label: 'Users' },
  {
    key: 'processMonitoring',
    label: 'Process Monitoring',
    icon: <TbDeviceImacSearch />,
  },
  {
    key: 'myAccount',
    label: 'My Account',
    icon: <FaUserCog />,
    children: [
      { key: 'editUser', label: 'Edit User', icon: <FaUserPen /> },
      { key: 'security', label: 'Security', icon: <MdOutlineSecurity /> },
      { key: 'profile', label: 'Profile', icon: <ImProfile /> },
    ],
  },
];

interface MenuLayoutProps {
  collapsed: boolean;
  onToggle: () => void;
  onMenuClick?: (key: string) => void;
}

// Custom hook to detect mobile screen
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

const MenuLayout: React.FC<MenuLayoutProps> = ({
  collapsed,
  onToggle,
  onMenuClick,
}) => {
  const isMobile = useIsMobile();
  const finalCollapsed = isMobile ? true : collapsed;

  return (
    <div className="menu-layout">
      <div className="layout-logo">
        <div className={`logo-plus${finalCollapsed ? ' active-logo' : ''}`}>
          <img
            src="https://iplus.com.ec/static/media/plus_navbar.fa2bd3e327c45710a881.webp"
            alt="Logo"
          />
        </div>
        <div className="btn-menu-toggle">
          <Button
            color="purple"
            variant="solid"
            onClick={onToggle}
            disabled={isMobile} // Disable toggle button on mobile
          >
            {finalCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
      </div>

      <Menu
        className="menu-aside"
        mode="inline"
        inlineCollapsed={finalCollapsed}
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['myAccount']}
        items={items}
        onClick={({ key }) => onMenuClick && onMenuClick(key)}
      />
    </div>
  );
};

export default MenuLayout;
