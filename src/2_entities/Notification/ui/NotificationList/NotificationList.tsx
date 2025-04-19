import { memo } from 'react';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import { VStack } from '@/1_shared/ui/Stack';
import { Skeleton } from '@/1_shared/ui/Skeleton/Skeleton';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { isLoading, data: notifications, error } = useNotifications(null, { pollingInterval: 10000 });

  if (isLoading) {
    return (
      <VStack gap="16" className={classNames(cls.NotificationList, {}, [className])}>
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }
  if (error || !notifications) {
    return null;
  }

  return (
    <VStack gap="16" className={classNames(cls.NotificationList, {}, [className])}>
      {notifications?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});
