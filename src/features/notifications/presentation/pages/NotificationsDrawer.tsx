import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';

import { IoNotifications, IoReloadCircleSharp } from 'react-icons/io5';
import { CustomButton } from '@/shared/components/button/Button';
import { RiCloseCircleFill } from 'react-icons/ri';
import NotificationContentDrawer from '../components/NotificationContentDrawer';

const NotificationsDrawer = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="header-page-icons">
        <IoNotifications size={25} onClick={showLoading} />
        <span>
          <p>9+</p>
        </span>
      </div>

      <Drawer
        closable
        destroyOnHidden
        title={<p>Loading Drawer</p>}
        placement="right"
        loading={loading}
        onClose={() => setOpen(false)}
        open={open}
        width={500}
        extra={
          <Space>
            <CustomButton
              onClick={onClose}
              color="primary"
              variant="filled"
              title="Close"
              icon={RiCloseCircleFill}
            />
            <CustomButton
              onClick={showLoading}
              variant="outlined"
              color="pink"
              title="Reload"
              icon={IoReloadCircleSharp}
              loading={loading}
            />
          </Space>
        }
      >
        <NotificationContentDrawer />
      </Drawer>
    </>
  );
};

export default NotificationsDrawer;
