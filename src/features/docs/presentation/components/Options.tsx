import React, { useState } from 'react';
import { Dropdown, MenuProps, Typography } from 'antd';
import { FaRegCreditCard, FaPrint } from 'react-icons/fa';
import { GrStatusInfo } from 'react-icons/gr';
import './Options.css';

const { Text } = Typography;

interface OptionsInvoiceProps {
  activePage?: () => void;
  children?: React.ReactNode;
}

const OptionsInvoice: React.FC<OptionsInvoiceProps> = ({
  activePage,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuProps['items'] = [
    {
      key: 'payInvoice',
      label: 'Pay Invoice',
      icon: <FaRegCreditCard />,
      onClick: activePage,
    },
    {
      key: 'changeStatus',
      label: 'Change Status',
      icon: <GrStatusInfo />,
      onClick: activePage,
    },
    {
      key: 'printInvoice',
      label: 'Print Invoice',
      icon: <FaPrint />,
      onClick: activePage,
    },
  ];

  return (
    <Dropdown
      menu={{ items: menuItems, className: 'custom-dropdown-menu' }}
      placement="bottomRight"
      trigger={['click']}
      open={isOpen}
      onOpenChange={(visible) => setIsOpen(visible)}
    >
      {children}
    </Dropdown>
  );
};

export default OptionsInvoice;
