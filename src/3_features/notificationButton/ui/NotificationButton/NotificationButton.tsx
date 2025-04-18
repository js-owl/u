import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import NotificationIcon from '1_shared/assets/icons/notification-20-20.svg';
import { Button, ButtonTheme } from '1_shared/ui/Button/Button';
import { Icon } from '1_shared/ui/Icon/Icon';
import { Popover } from '1_shared/ui/Popups';
import { Drawer } from '1_shared/ui/Drawer/Drawer';
import { NotificationList } from '2_entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}
export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover direction="bottom left" trigger={trigger}>
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
});
