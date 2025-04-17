import { memo } from 'react';
import { Button, ButtonTheme } from '1_shared/ui/Button/Button';
import { Icon } from '1_shared/ui/Icon/Icon';
import { Popover } from '1_shared/ui/Popups';
import NotificationIcon from '1_shared/assets/icons/notification-20-20.svg';
import { NotificationList } from '2_entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}
export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  return (
    <Popover
      direction="bottom left"
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      }
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
