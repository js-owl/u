import { memo } from 'react';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import { Card, CardTheme } from '@/1_shared/ui/Card/Card';
import { Text } from '@/1_shared/ui/Text/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}
export const NotificationItem = memo(({ className, item }: NotificationItemProps) => {
  const content = (
    <Card theme={CardTheme.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a className={cls.link} target="_blank" href={item.href}>
        {content}
      </a>
    );
  }

  return content;
});
