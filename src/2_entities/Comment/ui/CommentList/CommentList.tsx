import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import { Text } from '@/1_shared/ui/Text/Text';
import { VStack } from '@/1_shared/ui/Stack';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="16" className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments.map((c: Comment) => <CommentCard key={c.id} isLoading={isLoading} comment={c} />)
      ) : (
        <Text text={t('comments absence')} />
      )}
    </VStack>
  );
});
