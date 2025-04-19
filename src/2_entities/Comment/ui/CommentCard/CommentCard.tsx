import { memo } from 'react';

import { RoutePath } from '@/1_shared/config/routeConfig/routeConfig';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import { Avatar } from '@/1_shared/ui/Avatar/Avatar';
import { Text } from '@/1_shared/ui/Text/Text';
import { Skeleton } from '@/1_shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/1_shared/ui/AppLink/AppLink';
import { VStack } from '@/1_shared/ui/Stack';

import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        {comment.user.avatar ? <Avatar src={comment.user.avatar} size={30} /> : null}
        <Text title={comment.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </VStack>
  );
});
