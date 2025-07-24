import React, { useState } from 'react';
import { Avatar, Dropdown, MenuProps, Space, Typography } from 'antd';
import { FaUser, FaUserCog } from 'react-icons/fa';

const { Text } = Typography;

interface UserMenuProps {
  user: CurrentUserResponse;
  onLogout: () => void;
  onProfile: () => void;
  onChangePassword: () => void;
}

import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import { PiLockKeyOpenFill } from 'react-icons/pi';
import './UserMenu.css';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { CurrentUserResponse } from '@/domain/services/security/authentication/dto/response/AuthCurrentUserResponse';

const UserMenu: React.FC<UserMenuProps> = ({
  user,
  onLogout,
  onProfile,
  onChangePassword,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuProps['items'] = [
    {
      key: 'profile',
      label: 'Profile',
      icon: <FaUserCog />,
      onClick: onProfile,
    },
    {
      key: 'changePassword',
      label: 'Change Password',
      icon: <PiLockKeyOpenFill />,
      onClick: onChangePassword,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: <RiLogoutCircleRLine />,
      danger: true,
      onClick: onLogout,
    },
  ];

  return (
    <Dropdown
      menu={{ items: menuItems }}
      placement="bottomRight"
      trigger={['click']}
      open={isOpen}
      onOpenChange={(visible) => setIsOpen(visible)}
    >
      <div className="user-menu-avatar">
        <Avatar icon={<FaUser />} style={{ marginRight: 8 }} />
        <Space
          direction="horizontal"
          size={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text strong style={{ fontSize: 14, color: 'white' }}>
            {!user ? 'Guest' : `${user.firstName} ${user.lastName}`}
          </Text>
        </Space>
        <span>
          {isOpen ? (
            <IoMdArrowDropup size={25} />
          ) : (
            <IoMdArrowDropdown size={25} />
          )}
        </span>
      </div>
    </Dropdown>
  );
};

export default UserMenu;
