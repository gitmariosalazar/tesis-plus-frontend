import React from 'react';
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

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'dashboard',
    icon: <FaChartPie />,
    label: 'Dashboard',
    onClick: () => console.log('Dashboard clicked'),
  },
  { key: 'process', icon: <FaArrowsSpin />, label: 'My Process' },
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

const MenuLayout: React.FC<MenuLayoutProps> = ({
  collapsed,
  onToggle,
  onMenuClick,
}) => {
  return (
    <div className="menu-layout">
      <div className="layout-logo">
        <div className={`logo-plus${collapsed ? ' active-logo' : ''}`}>
          <img
            src="https://iplus.com.ec/static/media/plus_navbar.fa2bd3e327c45710a881.webp"
            alt="Logo"
          />
        </div>
        <div className="btn-menu-toggle">
          <Button color="purple" variant="solid" onClick={onToggle}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
      </div>

      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['myAccount']}
        items={items}
        onClick={({ key }) => onMenuClick && onMenuClick(key)}
      />
    </div>
  );
};

export default MenuLayout;
